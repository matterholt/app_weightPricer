<script module>
	import AuctionMarketReport from '$lib/components/feature/market_report/AuctionMarketReport.svelte';
	import LivestockTable from '$lib/components/feature/LivestockTable.svelte';
	import NewLivestock from '$lib/components/feature/adding_livestock/NewLivestock.svelte';
	import TitleBlock from '$lib/components/general/TitleBlock.svelte';

	let activeTab = $state('marketReport');
</script>

<div>
		<TitleBlock>Available Animals</TitleBlock>

</div>
