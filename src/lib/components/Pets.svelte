<script lang="ts">
	import PetCard from './PetCard.svelte'

	type Props = {
		pets: {name: string}[]
	}

	let {pets}: Props = $props()
</script>

<section>
	<h2 class="mb-4 text-4xl">Highlighted good boys & girls</h2>
	<ul
		class="grid items-center justify-center gap-8 md:grid-cols-2 xl:grid-cols-3"
	>
		{#each pets as { name }}
			<li>
				<PetCard {name} />
			</li>
		{/each}
	</ul>
</section>
