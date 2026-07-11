<script lang="ts">
   	import type { LiveStockEntry } from '$lib/daTypes/livestock'

   	let {animal}:{animal:LiveStockEntry} = $props();

    let toSellState = $state(false)

    function handleLivestockUpdate (){

    }
</script>

<tr class={toSellState ? 'bg-gray-600' : ''}>
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
		<input type="checkbox" bind:checked={toSellState} class="toggle" />
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
