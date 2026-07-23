<script lang="ts">
	import type { MarketReport } from '$lib/daTypes/markets';
	import DisplayTable from '$lib/components/general/DisplayTable.svelte';

	import { marketReports } from '$lib/states/useMarketReports.svelte';
	import TitleBlock from '$lib/components/general/TitleBlock.svelte';


	const rowHeadingOrder :(keyof MarketReport)[] =["auction_date","auction_id","head","wt_light","wt_heavy","price_low","price_high","wt_avg","price_avg", "dressing" ]
</script>


<div class=" flex flex-col items-center m-5">
	<TitleBlock>Market Report for Lambs</TitleBlock>
	<div class="flex justify-between w-full p-5">
		{#each marketReports as singleReport, i (i)}
			<div class="flex flex-col gap-2">
				<DisplayTable
				headingOrder={rowHeadingOrder}
				tableData = {singleReport.report}
				/>
			</div>
		{/each}
	</div>
</div>
