<script lang="ts">
	import type { MarketReport } from '$lib/daTypes/markets';

	import { marketReports } from '$lib/states/useMarketReports.svelte';
	import TitleBlock from '$lib/components/general/TitleBlock.svelte';


	const rowHeadingOrder :(keyof MarketReport)[] =["auction_date","auction_id","head","wt_light","wt_heavy","price_low","price_high","wt_avg","price_avg", "dressing" ]
</script>

{#snippet auctionReport(report: MarketReport)}
	<ul class="list  flex-row gap-5 p-4">

		{#each rowHeadingOrder as listItem, id (id)}
			<li class="text-center flex flex-col">
			<strong>
			{listItem }
			</strong>
				{report[listItem]}
			</li>
		{/each}
	</ul>
{/snippet}

<div class=" flex flex-col items-center m-5">
	<TitleBlock>Market Report for Lambs</TitleBlock>
	<div class="flex justify-between w-full p-5">
		{#each marketReports as singleReport, i (i)}
			<div class="flex flex-col gap-2">
				<h2>Weight Target: {singleReport.target_weight}</h2>

				{#each singleReport.report as querryReport, i (i)}
					<div class="rounded-xl border border-amber-300">
						{@render auctionReport(querryReport)}
					</div>
				{/each}
			</div>
		{/each}
	</div>
</div>
