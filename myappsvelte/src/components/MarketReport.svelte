<script module>
	import { averagePrice } from '../utils/averagePrice';
	const priceRange_mtHope = $state({ lowValue: '3.25', highValue: '4.00' });
	const priceRange_monrow = $state({ lowValue: '1.80', highValue: '3.40' });

	let calAveragePrice = $derived.by(() => {
		let mtHopePrices = Object.values(priceRange_mtHope);
		let monrowPrices = Object.values(priceRange_monrow);
		let average = averagePrice([...mtHopePrices, ...monrowPrices]);
		return { average };
	});
</script>

{#snippet priceRange(prices)}
	<div class="stats shadow">
		{#if prices.lowValue}
			<div class="stat">
				<div class="stat-title text-red-200">Low Price</div>
				<div class="stat-value">${prices.lowValue}</div>
			</div>
		{/if}
		{#if prices.average}
			<div class="">
				<div class="stat-title">Average Price</div>
				<div class="stat-value">${prices.average}</div>
			</div>
		{/if}

		{#if prices.highValue}
			<div class="stat">
				<div class="stat-title text-green-200">High Price</div>
				<div class="stat-value">${prices.highValue}</div>
			</div>
		{/if}
	</div>
{/snippet}

<div class=" flex flex-col items-center m-5">
	<h2 class="text-2xl font-bold">Market Report for Lambs</h2>

	<div class="flex justify-between w-full p-5 gap-10">
		<div class="place-content-center grid rounded-full border border-amber-300 w-35 h-35">
			{@render priceRange(calAveragePrice)}
		</div>
		<div class="flex flex-col gap-4">
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
