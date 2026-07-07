<script lang="ts">
	type InputTypes = 'text' | 'number';
	import { editEntry } from './inputstate.svelte';

	let {
		inputType,
		label,
		value
	}: {
		inputType: InputTypes;
		label?: string;
		value?: string | number;
	} = $props();
</script>

{#if inputType === 'text'}
	<label class="input">
		<span class="label">{label}</span>
		<input type="text" {value} />
	</label>
{/if}
{#if inputType === 'number'}
	<label class="input">
		<span class="label">{label}</span>
		<input type="number" {value} />
	</label>
{/if}
<button class="btn" onclick={() => (editEntry.input = '')}>👍</button>
