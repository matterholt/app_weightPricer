<script lang="ts">
	import { livestockState } from '../../states/useOwnerLivestock.svelte';
	import type { LiveStockEntry } from '../../daTypes/livestock';
	import { totaledAmountSold } from '../../utils/averagePrice';
	import { sortedByWeight } from '$lib/utils/livestockActions';
	import LivestockRow from './livestock_row/LivestockRow.svelte';

	import AnimalDialog from '../feature/animal_dialog/AnimalDialog.svelte';

	let availableLivestock = $state(
		sortedByWeight(livestockState.rollcall.filter((x) => x.isSold !== true))
	);

	let animalStats: LiveStockEntry | undefined = $state();

</script>

{#snippet tableRow(livestockEntry: LiveStockEntry[])}
	{#each livestockEntry as livestock (livestock?.tag_id)}
	<LivestockRow  animal={livestock}/>
	{/each}
{/snippet}

<div class="overflow-x-auto">
	<AnimalDialog animalDetails={animalStats} host={animalStats?.tag_id} />
	<table class="table">
		<thead>
			<tr>
				<th></th>
				<th>to Sell</th>
				<th>Tag ID</th>
				<th>Visual ID</th>
				<th>Weight</th>
				<th>Gender</th>
				<th>Average Price</th>
			</tr>
		</thead>
		<tbody>
			{@render tableRow(availableLivestock)}
		</tbody>
	</table>
</div>
