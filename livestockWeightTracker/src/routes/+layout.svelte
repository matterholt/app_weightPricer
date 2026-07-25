<script lang="ts">
    import "../style/app.css";
	import favicon from '$lib/assets/favicon.svg';
	let { children } = $props();

	let activeTab = $state('available')
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

    <div role="tablist" class="tabs tabs-border">
      <a href="livestock" role="tab" class="tab">Tab 1</a>
      <a href="market_report" role="tab" class="tab tab-active">Tab 2</a>
      <a href="available"role="tab" class="tab">Tab 3</a>
      <a href="sold"role="tab" class="tab">Tab 3</a>
    </div>
{@render children()}
