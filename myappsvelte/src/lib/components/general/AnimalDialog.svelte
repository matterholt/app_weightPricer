<script>
	let { host, animalDetails } = $props();
</script>

<dialog id="my-dialog" class="modal">
	<div class="modal-box">
		<h3 class="text-lg font-bold">Hello! {host}</h3>
		<p class="py-4">
			{JSON.stringify(animalDetails)}
		</p>
		<div class="modal-action">
			<button class="btn" commandfor="my-dialog" command="close">Close</button>
		</div>
	</div>
</dialog>
