<script lang="ts">
	import type {Snippet} from 'svelte'

	type Props = {
		children: Snippet
	}
	const {children}: Props = $props()
</script>

<button class="btn btn-primary">{@render children()}</button>
