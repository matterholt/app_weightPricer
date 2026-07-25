<script lang="ts">
	import type { LiveStockEntry } from '../../../daTypes/livestock';
	import { marketPricesState } from '../../../states/useMarketAveragePrice.svelte';
	import { pricePerWeight } from '../../../utils/livestockActions';

	import EditInput from './EditInput.svelte';
	import { editEntry } from './inputstate.svelte';

	let { animalDetails }: { animalDetails: LiveStockEntry } = $props();

	let priceAnalysis = $derived.by(() => {
		return {
			lowCost: pricePerWeight(animalDetails?.weight, marketPricesState.lowValue),
			averageCost: pricePerWeight(animalDetails?.weight, marketPricesState.average),
			highCost: pricePerWeight(animalDetails?.weight, marketPricesState.highValue)
		};
	});
</script>

<dialog id="my-dialog" class="modal">
	<div class="modal-box">
		<div class="flex justify-between">
			<h3 class="text-lg font-bold">Live Stock ID: {animalDetails?.tag_id}</h3>

			<p class={animalDetails?.isSold ? 'text-error' : 'text-success'}>
				{animalDetails?.isSold ? 'SOLD' : 'Available'}
			</p>
		</div>
		<div class="divider"></div>

		<div class="grid grid-cols-2 grid-rows-4 gap-x-5">
			<p>Visual ID: {animalDetails?.visual_id}</p>
			<p>Gender: {animalDetails?.gender}</p>

			{#if editEntry.input === 'animalWeight'}
				<div class="flex gap-2">
					<EditInput inputType="number" label="Weight" value={animalDetails?.weight} />
				</div>
			{:else}
				<button class="flex gap-5 p-2" onclick={() => (editEntry.input = 'animalWeight')}
					>Weight: <span>
						{animalDetails?.weight}
					</span></button
				>
			{/if}

			{#if editEntry.input === 'profitedCash'}
				<div class="flex gap-2">
					<EditInput inputType="number" label="Sell Price" value={animalDetails?.profitedCash} />
				</div>
			{:else}
				<button class="flex gap-5 p-2" onclick={() => (editEntry.input = 'profitedCash')}
					>Sell Price: <span
						>$
						{animalDetails?.profitedCash}
					</span></button
				>
			{/if}

			<div class="col-start-2 row-start-1 row-span-4 flex flex-col gap-5">
				<h4 class="font-bold">Price Analysis</h4>
				<p class="flex justify-between">Low: <span>${priceAnalysis?.lowCost}</span></p>
				<p class="flex justify-between">Average: <span>${priceAnalysis?.averageCost}</span></p>
				<p class="flex justify-between">High: <span>${priceAnalysis?.highCost}</span></p>
			</div>
		</div>
		<div class="modal-action">
			<button
				class="btn"
				commandfor="my-dialog"
				onclick={() => (editEntry.input = '')}
				command="close">Save & Close</button
			>
		</div>
	</div>
</dialog>
