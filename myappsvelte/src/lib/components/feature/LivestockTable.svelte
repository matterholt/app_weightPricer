<script lang="ts">
	import { livestockState } from '../../states/useOwnerLivestock.svelte';

	import type { LiveStockEntry } from '../../daTypes/livestock';
	import { totaledAmountSold } from '../../utils/averagePrice';
	import { sortedByWeight } from '$lib/utils/livestockActions';

	import AnimalDialog from '../feature/animal_dialog/AnimalDialog.svelte';

	let availableLivestock = $state(
		sortedByWeight(livestockState.rollcall.filter((x) => x.isSold !== true))
	);

	let animalStats: LiveStockEntry | undefined = $state();


   let sellingCollection = $state(['25'])


   function updateToSellList(tagId){
     if(sellingCollection.includes(tagId)) return true

     return false

   }



</script>

{#snippet tableRow(livestockEntry: LiveStockEntry[])}
	{#each livestockEntry as animal (animal?.tag_id)}


	<tr class={updateToSellList(animal?.tag_id) ? 'bg-gray-600' : ''}>
		<th>
			<button
				class="btn"
				onclick={() => (animalStats = animal)}
				command="show-modal"
				commandfor="my-dialog"
			>
				✏️
			</button>
		</th>
		<td>
			<input type="checkbox" checked={updateToSellList(animal)} class="toggle" />
		</td>
		<td>{animal?.tag_id}</td>
		<td>{animal?.visual_id}</td>
		<td>{animal?.weight}</td>
		<td>{animal?.gender}</td>
		<td>$ {animal?.profitedCash}</td>

		<td>
			<button class="btn btn-circle border" onclick={() => handleLivestockUpdate(animal)}>
				💵
			</button>
		</td>
	</tr>

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
				<th>Price</th>
			</tr>
		</thead>
		<tbody>
			{@render tableRow(availableLivestock)}
		</tbody>
	</table>
</div>
