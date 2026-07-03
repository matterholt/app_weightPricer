<script lang="ts">
	import { livestockState } from '../states/useOwnerLivestock.svelte';
	import type { LiveStockEntry } from '../states/useOwnerLivestock.svelte';
	import { collectMoney } from '../utils/averagePrice';

	import TitleBlock from './general/TitleBlock.svelte';

	let soldLivestock = $state(livestockState.rollcall.filter((x) => x.isSold));
	let availableLivestock = $state(livestockState.rollcall.filter((x) => x.isSold !== true));

	let grossIncome = $derived(collectMoney(soldLivestock));

	$effect(() => {
		setInterval(() => {
			soldLivestock = livestockState.rollcall.filter((x) => x.isSold);
			availableLivestock = livestockState.rollcall.filter((x) => x.isSold !== true);
		}, livestockState?.rollcall);
	});
</script>

{#snippet figure(livestockEntry: LiveStockEntry[])}
	{#each livestockEntry as livestock, index (livestock?.tag_id)}
		<tr class={livestock.isSold ? 'bg-accent' : 'bg-primary'}>
			<th>{index + 1}</th>
			<td>{livestock?.tag_id}</td>
			<td>{livestock?.weight}</td>
			<td>{livestock?.visual_id}</td>
			<td>{livestock?.gender}</td>
			<td>$ {livestock?.profitedCash}-updatable</td>
			{#if livestock.isSold}
				<td> </td>
			{:else}
				<td>
					<input type="checkbox" bind:checked={livestock.isSold} class="toggle" />
				</td>
			{/if}
		</tr>
	{/each}
{/snippet}

<div class="overflow-x-auto">
	<TitleBlock>Available Animals</TitleBlock>
	<table class="table table-xs">
		<thead>
			<tr>
				<th></th>
				<th>Tag ID</th>
				<th>Weight</th>
				<th>Visual ID</th>
				<th>Gender</th>
				<th>Average Price</th>
				<th>Sold</th>
			</tr>
		</thead>
		<tbody>
			{@render figure(availableLivestock)}
		</tbody>
	</table>
</div>
<div>
	<TitleBlock>Sold Animals</TitleBlock>
	<p>Total: ${grossIncome}</p>
	<table class="table table-xs">
		<thead>
			<tr>
				<th></th>
				<th>Tag ID</th>
				<th>Weight</th>
				<th>Visual ID</th>
				<th>Gender</th>
				<th>Sold Price</th>
			</tr>
		</thead>
		<tbody>
			{@render figure(soldLivestock)}
		</tbody>
	</table>
</div>
