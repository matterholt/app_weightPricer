<script>
	import { marketPricesState, updateAverage } from '../states/useMarketAveragePrice.svelte';
	import TitleBlock from './general/TitleBlock.svelte';

	const priceRange_mtHope = $state({ lowValue: '3.25', highValue: '4.00' });
	const priceRange_monrow = $state({ lowValue: '1.80', highValue: '3.40' });
	$effect(() => {
		updateAverage([priceRange_mtHope, priceRange_monrow]);
	});
</script>

{#snippet priceRange(prices, inCol)}
	<div class="stats h-full">
		<div class="stat place-items-center">
			<div class={[inCol ? 'flex-col gap-4' : 'flex-row', 'flex']}>
				{#if prices.lowValue}
					<div>
						<div class="stat-title text-red-200">Low Price</div>
						<div class="stat-value">${prices.lowValue}</div>
					</div>
				{/if}
				{#if prices.average}
					<div>
						<div class="stat-title">Average Price</div>
						<div class="stat-value">${prices.average}</div>
					</div>
				{:else}
					<div class="stat-value m-4">/</div>
				{/if}

				{#if prices.highValue}
					<div>
						<div class="stat-title text-green-200">High Price</div>
						<div class="stat-value">${prices.highValue}</div>
					</div>
				{/if}
			</div>
			<div class="stat-desc">Pricing for 50lbs to 70lbs</div>
		</div>
	</div>
{/snippet}

<div class=" flex flex-col items-center m-5">
	<TitleBlock>Market Report for Lambs</TitleBlock>
	<div class="flex justify-between w-full p-5">
		<div class="rounded-xl border border-amber-300">
			{@render priceRange(marketPricesState, true)}
		</div>
		<div class="flex flex-col gap-10">
			<div>
				<h3 class="text-center font-medium">Mount Hope Report</h3>
				{@render priceRange(priceRange_mtHope)}
			</div>

			<div>
				<h3 class="text-center font-medium">Monrow Report</h3>
				{@render priceRange(priceRange_monrow)}
			</div>
		</div>
	</div>
</div>
