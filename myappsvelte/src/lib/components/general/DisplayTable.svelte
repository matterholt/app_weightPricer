<script lang="ts">
	import type { MarketReport } from '$lib/daTypes/markets';

	let {
		tableData,
		headingOrder
	}: { tableData: MarketReport[]; headingOrder: (keyof MarketReport)[] } = $props();
</script>

{#snippet tableRow(livestockEntry)}
	{#each livestockEntry as animal (animal?.tag_id)}
		<tr class="bg-gray-600">
			<td>{animal?.tag_id}</td>
			<td>{animal?.visual_id}</td>
			<td>{animal?.weight}</td>
			<td>{animal?.gender}</td>
			<td>$ {animal?.profitedCash}</td>
		</tr>
	{/each}
{/snippet}

<div class="overflow-x-auto">
	<table class="table">
		<thead>
			<tr>
				{#each headingOrder as colTitle (colTitle)}
					<th>
						{colTitle}
					</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each tableData as tableRow, idx (idx)}
				<tr>
					{#each headingOrder as rowEntries, idx (idx)}
						<th>
							{tableRow[rowEntries]}
						</th>
					{/each}
				</tr>
			{/each}
			<!-- {@render tableRow(availableLivestock)} -->
		</tbody>
	</table>
</div>
