<script lang="ts">
    import { page } from '$app/state';

    import "../style/app.css";
	import favicon from '$lib/assets/favicon.svg';
	let { children } = $props();

	let activeTab = $state('available')


console.log(page.url.pathname )
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

    <div role="tablist" class="tabs tabs-border">
      <a href="livestock" role="tab"  class={["tab",page.url.pathname === '/livestock'?'tab-active' : "" ] }>livestock</a>
      <a href="market_report" role="tab" class={["tab",page.url.pathname === '/market_report'?'tab-active' : "" ] }>market_report</a>
    <a href="available" role="tab"  class={["tab",page.url.pathname === '/available'? 'tab-active' : "" ] }>available</a>
    <a href="sold"role="tab"   class={["tab",page.url.pathname === '/sold'? 'tab-active' : "" ] }>sold</a>
    </div>
{@render children()}
``
