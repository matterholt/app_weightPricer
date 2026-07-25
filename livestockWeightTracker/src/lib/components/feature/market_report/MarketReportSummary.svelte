
<script lang="ts">
	import type { MarketReport} from '$lib/daTypes/markets';

	import { marketReports } from '$lib/states/useMarketReports.svelte';
	import TitleBlock from '$lib/components/general/TitleBlock.svelte';
</script>

{#snippet priceRange(report: MarketReport)}
	<div class="stats h-full">
		<div class="stat place-items-center gap-5">
			<div class="flex justify-between w-full">
			<p>
			{report.auction_date}
			</p>
				<h4>
					AUCTION ID: {report.auction_id}
				</h4>
				<p class="stat-desc">
					Quality: {report.dressing.toUpperCase()}
				</p>
			</div>
			<div class="grid grid-cols-3 gap-4">
				{#if report.price_low}
					<div>
						<div class="stat-title text-red-200">Low Price</div>
						<div class="stat-value">${report.price_low}</div>
					</div>
				{/if}

				{#if report.price_high}
					<div>
						<div class="stat-title text-green-200">High Price</div>
						<div class="stat-value">${report.price_high}</div>
					</div>
				{/if}
				{#if report.price_avg}
					<div>
						<div class="stat-title text-amber-300">Average Price</div>
						<div class="stat-value">${report.price_avg}</div>
					</div>
				{/if}
			</div>
			<div class="stat-desc">
				Weight Range {report.wt_light}lbs to {report.wt_heavy}lbs
			</div>
		</div>
	</div>
{/snippet}

<div class=" flex flex-col items-center m-5">
	<TitleBlock>Market Report for Lambs</TitleBlock>
	<div class="flex justify-between w-full p-5">
		{#each marketReports as singleReport, i (i)}
			<div class="flex flex-col gap-2">
				<h2>Weight Target: {singleReport.target_weight}</h2>

				{#each singleReport.report as querryReport, i (i)}
					<div class="rounded-xl border border-amber-300">
						{@render priceRange(querryReport)}
					</div>
				{/each}
			</div>
		{/each}
	</div>
</div>
