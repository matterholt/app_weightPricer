<script module>
	import MarketReport from '$lib/components/feature/MarketReport.svelte';
	import LivestockTable from '$lib/components/feature/LivestockTable.svelte';
	import NewLivestock from '$lib/components/feature/adding_livestock/NewLivestock.svelte';
	import TitleBlock from '$lib/components/general/TitleBlock.svelte';

	let activeTab = $state('available');
</script>

<div>
	<div>
		with a pop up or what ever it is call have a form that will update or add to the livestock list
	</div>

	<div class="w-fit m-10">
		<MarketReport />
		<TitleBlock>Available Animals</TitleBlock>
		<div role="tablist" class="tabs tabs-lift">
			<button
				aria-label="tab"
				onclick={() => (activeTab = 'available')}
				class={[activeTab === 'available' ? 'tab-active' : '', 'tab']}
			>
				Available Animals
			</button>
			<button
				aria-label="tab"
				onclick={() => (activeTab = 'sold')}
				class={[activeTab === 'sold' ? 'tab-active' : '', 'tab']}
			>
				Sold Animals
			</button>
			<button
				aria-label="tab"
				onclick={() => (activeTab = 'add')}
				class={[activeTab === 'add' ? 'tab-active' : '', 'tab']}
			>
				Add Animal
			</button>
		</div>
		{#if activeTab == 'available'}
			<LivestockTable />
		{/if}
		{#if activeTab == 'sold'}
			table listing sold animals
		{/if}
		{#if activeTab == 'add'}
			<NewLivestock />
		{/if}
	</div>
</div>
