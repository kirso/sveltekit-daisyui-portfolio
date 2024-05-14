<script>
	import Header from './../lib/components/Header.svelte'
	import '../app.css'
	import Hero from '$lib/components/Hero.svelte'
	import Pets from '$lib/components/Pets.svelte'

	const pets = [
		{name: 'Rex'},
		{name: 'Scooby'},
		{name: 'Snoopy'},
		{name: 'Toto'},
		{name: 'Tweety'},
		{name: 'Wally'},
		{name: 'Woody'},
		{name: 'Zazu'},
		{name: 'Ziggy'},
		{name: 'Zoe'},
	]
</script>

<Header />
<main class="container">
	<h1 class="p-4 text-6xl text-white">Paulina Puppers</h1>
	<p>Find my work here</p>
	<Hero />
	<Pets {pets} />
</main>
