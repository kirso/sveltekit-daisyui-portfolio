<script>
	import Hero from '$lib/components/Hero.svelte'
	import Pets from '$lib/components/Pets.svelte'

	let {data} = $props()
</script>

<main class="container">
	<h1 class="p-4 text-6xl text-primary">Paulina Puppers</h1>
	<p>Find my work here</p>
	<Hero />
	<Pets pets={data.pets} />
</main>
