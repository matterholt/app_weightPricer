<script lang="ts">
	import type { NewLiveStock } from '$lib/daTypes/livestock';
	import { storeLivestockID, updateRollcall } from '$lib/states/useOwnerLivestock.svelte';
	import ErrorMsg from '$lib/components/general/ErrorMsg.svelte';

	let livestockStore = $derived(storeLivestockID());

	let tag_id: string = $state('');
	let weight: number | undefined = $state();
	let visual_id: string = $state('');
	let gender = $state('');

	let formErrors = $state({ inputId: '', msg: '' });

	let newlyAdded: NewLiveStock[] = $state([]);

	let headCount: number = $derived(newlyAdded.length + 1);

	const genderSelectOptions = [
		{ value: '', label: 'Select Gender' },
		{ value: 'female', label: 'Female' },
		{ value: 'male', label: 'Male' },
		{ value: 'male_castrated', label: 'Male, castrated' }
	];
	const OrderOfCols = ['headCount', 'tag_id', 'weight', 'visual_id', 'gender'];
	const headingKeys = {
		headCount: { title: 'Count', stateVar: 'headCount' },
		tag_id: { title: 'Tag ID', stateVar: 'tag_id' },
		visual_id: { title: 'Visual ID', stateVar: 'visual_id' },
		weight: { title: 'Weight', stateVar: 'weight' },
		gender: { title: 'Gender', stateVar: 'gender' }
	};

	function resetInputs() {
		formErrors = { inputId: '', msg: '' };
		tag_id = '';
		weight = 0;
		visual_id = '';
		gender = '';
	}

	function handleInputValidate() {
		formErrors = { inputId: '', msg: '' };

		if (
			(newlyAdded.length && newlyAdded.some((x) => x?.tag_id === tag_id)) ||
			livestockStore.some((x) => String(x) === tag_id)
		) {
			formErrors = { inputId: 'tag_id', msg: 'ID has aready has been used, ' };
			return 'error';
		}
		return 'ok';
	}

	function addToList() {
		handleInputValidate();
		if (formErrors.msg) {
			return;
		}
		newlyAdded = [...newlyAdded, { headCount, tag_id, weight, visual_id, gender }];
		resetInputs();
	}

	function addToState() {
		if (newlyAdded.length === 0) {
			console.log('nope');
			return;
		}
		updateRollcall(newlyAdded);
		resetInputs();
		newlyAdded = [];
	}
</script>

{#snippet LivestockList()}
	{#each newlyAdded as entry, index (entry.tag_id)}
		<li class="grid grid-cols-[50px_1fr_1fr_1fr_1fr] grid-rows-1 gap-2 items-center">
			<p>
				{entry[OrderOfCols[0]]}
			</p>
			<p>
				{entry[OrderOfCols[1]]}
			</p>
			<p>
				{entry[OrderOfCols[2]]}
			</p>
			<p>
				{entry[OrderOfCols[3]]}
			</p>
			<p>
				{entry[OrderOfCols[4]]}
			</p>
		</li>
	{/each}
{/snippet}

<div class="flex gap-4">
	<div>
		<h4 class="fieldset-legend">Livestock entries</h4>
		{#if formErrors.msg !== ''}
			<ErrorMsg>
				{formErrors.msg}
				in "{formErrors.inputId}"
			</ErrorMsg>
		{/if}
		<ul class="list bg-base-100 rounded-box shadow-md">
			<li
				class="grid grid-cols-[50px_1fr_1fr_1fr_1fr] grid-rows-1 gap-2 items-center border-b my-2 p-2"
			>
				{#each OrderOfCols as entry, index (index)}
					<div class="font-extrabold">{headingKeys[entry].title}</div>
				{/each}
			</li>

			{@render LivestockList()}

			<li class="grid grid-cols-[50px_1fr_1fr_1fr_1fr] grid-rows-1 gap-2 my-4 p-2 items-center">
				<div>{headCount}</div>
				<fieldset class="fieldset">
					<label class="label" for="name">Name</label>
					<input
						class="input input-neutral"
						type="text "
						required={true}
						name="tag_id"
						bind:value={tag_id}
						placeholder="#ID"
					/>
				</fieldset>
				<fieldset class="fieldset flex flex-col">
					<label class="label" for="Weight">weight</label>
					<input
						type="number"
						class="input input-neutral"
						name="weight"
						bind:value={weight}
						placeholder="LBs"
						min="1"
						title="current weight"
					/>
				</fieldset>
				<fieldset class="fieldset">
					<label class="label" for="name">Visual Char</label>
					<input
						class="input input-neutral"
						type="text"
						name="visual_id"
						bind:value={visual_id}
						placeholder="Detail"
					/>
				</fieldset>
				<fieldset class="fieldset flex flex-col">
					<label class="label" for="weight">Gender</label>
					<select class="input input-neutral" name="genders" id="genderSelect" bind:value={gender}>
						{#each genderSelectOptions as genderSelect (genderSelect.value)}
							<option value={genderSelect.value}>{genderSelect.label}</option>
						{/each}
					</select>
				</fieldset>
			</li>
		</ul>
		<button onclick={() => addToList()} disabled={!tag_id} class="btn btn-outline">Add</button>

		<button onclick={() => addToState()} disabled={newlyAdded.length === 0} class="btn btn-outline"
			>Save/Done</button
		>
	</div>
</div>
