<script lang="ts">
	type Props = {
		name: string
	}

	let {name}: Props = $props()
</script>

<div class="mx-auto w-96 card glass">
	<figure>
		<img
			src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
			alt="car!"
		/>
	</figure>
	<div class="card-body">
		<h2 class="card-title">{name}</h2>
		<p>Loves running in the park!</p>
		<div class="justify-end card-actions">
			<button class="shadow btn btn-secondary">See more!</button>
		</div>
	</div>
</div>
