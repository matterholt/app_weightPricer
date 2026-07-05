<script lang="ts">
	import type { LiveStockEntry } from '../../../daTypes/livestock';
	import { marketPricesState } from '../../../states/useMarketAveragePrice.svelte';
	import { pricePerWeight } from '../../../utils/livestockActions';

	import EditInput from './EditInput.svelte';

	let { animalDetails }: { animalDetails: LiveStockEntry } = $props();

	let priceAnalysis = $derived.by(() => {
		return {
			lowCost: pricePerWeight(animalDetails?.weight, marketPricesState.lowValue),
			averageCost: pricePerWeight(animalDetails?.weight, marketPricesState.average),
			highCost: pricePerWeight(animalDetails?.weight, marketPricesState.highValue)
		};
	});

	let editMode: boolean = $state(false);
</script>

{#snippet editModeForm()}
	<div>
		<EditInput inputType="text" label="Weight" value={animalDetails?.weight} />
		<EditInput inputType="text" label="Visual ID" value={animalDetails?.visual_id} />
		<EditInput inputType="text" label="Gender" value={animalDetails?.gender} />
		<EditInput inputType="text" label="Cash" value={animalDetails?.profitedCash} />
		<div class="modal-action">
			<button class="btn" onclick={() => (editMode = !editMode)}>save & close </button>
		</div>
	</div>
{/snippet}

<dialog id="my-dialog" class="modal">
	<div class="modal-box">
		<div class="flex justify-between">
			<h3 class="text-lg font-bold">Live Stock ID: {animalDetails?.tag_id}</h3>

			<p class={animalDetails?.isSold ? 'text-error' : 'text-success'}>
				{animalDetails?.isSold ? 'SOLD' : 'Available'}
			</p>
		</div>
		<div class="divider"></div>
		{#if editMode}
			{@render editModeForm()}
		{:else}
			<div class="grid grid-cols-2 grid-rows-4">
				<p>Weight: {animalDetails?.weight}</p>
				<p>Visual ID: {animalDetails?.visual_id}</p>
				<p>Gender: {animalDetails?.gender}</p>
				<p>Sell Price: ${animalDetails?.profitedCash}</p>
				<div class="col-start-2 row-start-1 row-span-4 flex flex-col gap-5">
					<h4 class="font-bold">Price Analysis</h4>
					<p class="flex justify-between">Low: <span>${priceAnalysis?.lowCost}</span></p>
					<p class="flex justify-between">Average: <span>${priceAnalysis?.averageCost}</span></p>
					<p class="flex justify-between">High: <span>${priceAnalysis?.highCost}</span></p>
				</div>
			</div>
			<div class="modal-action">
				<button class="btn" onclick={() => (editMode = !editMode)}>Edit</button>
				<button class="btn" commandfor="my-dialog" command="close">Close</button>
			</div>
		{/if}
	</div>
</dialog>
