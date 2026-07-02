<script lang="ts">
	import { averagePriceState } from '../states/useMarketAveragePrice.svelte';
	let props = $props();

	function pricePerWeight(animalWeight: string) {
		console.log('GGEETT', animalWeight);
		console.log('GEETT', averagePriceState);
		return (Number(animalWeight) * Number(averagePriceState.average)).toFixed(2);
	}
</script>

{#snippet figure(livestockEntry)}
	{#each livestockEntry as livestock, index}
		<tr>
			<th>{index + 1}</th>
			<td>{livestock?.tag_id}</td>
			<td>{livestock?.weight}</td>
			<td>{livestock?.visual_id}</td>
			<td>{livestock?.gender}</td>
			<td>${pricePerWeight(livestock?.weight)}</td>
		</tr>
	{/each}
{/snippet}

<div class="overflow-x-auto">
	<table class="table">
		<thead>
			<tr>
				<th></th>
				<th>Tag ID</th>
				<th>Weight</th>
				<th>Visual ID</th>
				<th>Gender</th>
				<th>Average Price</th>
			</tr>
		</thead>
		<tbody>
			{@render figure(props.livestockEntry)}
		</tbody>
	</table>
</div>
