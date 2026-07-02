<script lang="ts">
	import { livestockState, collectMoney } from '../states/useOwnerLivestock.svelte';
	import type { LiveStockEntry } from '../states/useOwnerLivestock.svelte';
</script>

{#snippet figure(livestockEntry: LiveStockEntry[])}
	{#each livestockEntry as livestock, index (livestock?.tag_id)}
		<tr class={livestock.isSold ? 'bg-accent' : 'bg-primary'}>
			<th>{index + 1}</th>
			<td>{livestock?.tag_id}</td>
			<td>{livestock?.weight}</td>
			<td>{livestock?.visual_id}</td>
			<td>{livestock?.gender}</td>
			<td>${livestock?.profitedCash}</td>
			{#if livestock.isSold}
				<td> </td>
			{:else}
				<td>
					<input type="checkbox" checked={livestock.isSold} class="toggle" />
				</td>
			{/if}
		</tr>
	{/each}
{/snippet}

<div class="overflow-x-auto">
	<div>
		<h2>Available Animals</h2>
		<table class="table">
			<thead>
				<tr>
					<th></th>
					<th>Tag ID</th>
					<th>Weight</th>
					<th>Visual ID</th>
					<th>Gender</th>
					<th>Target Sell</th>
					<th>Sold</th>
				</tr>
			</thead>
			<tbody>
				{@render figure(livestockState.livestockAvailable)}
			</tbody>
		</table>
	</div>
	<div>
		<h2>Sold Animals</h2>
		<p>Total: ${collectMoney()}</p>
		<table class="table">
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
				{@render figure(livestockState.livestockSold)}
			</tbody>
		</table>
	</div>
</div>
