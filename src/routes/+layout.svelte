<script lang="ts">
	import '../app.css'

	import Footer from '$lib/components/Footer.svelte'
	import Header from '$lib/components/Header.svelte'
	import type {Snippet} from 'svelte'

	type Props = {
		children: Snippet
	}

	let {children}: Props = $props()
</script>

<Header />
{@render children()}
<Footer />
