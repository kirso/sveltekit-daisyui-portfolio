<script lang="ts">
	type Props = {
		pets: {name: string}[]
	}

	const {pets}: Props = $props()
</script>

<ul class="text-2xl">
	{#each pets as pet}
		<li>
			<h2 class="text-bold">{pet.name}</h2>
		</li>
	{/each}
</ul>
