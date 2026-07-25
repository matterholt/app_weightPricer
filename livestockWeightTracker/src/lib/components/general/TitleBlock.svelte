<script lang="ts">
	let { children } = $props();
</script>

<div class="grid place-content-center m-4">
	<h2 class="font-extrabold text-2xl w-fit">
		{@render children?.()}
	</h2>
</div>
