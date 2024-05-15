<script>
	import ThemeToggleIcon from './ThemeToggleIcon.svelte'
</script>

<div class="navbar bg-base-100">
	<div class="flex-1">
		<a href="/" class="text-xl btn btn-ghost">Paulina Puppers</a>
	</div>
	<div class="flex-none">
		<ul class="items-center px-1 menu menu-horizontal">
			<li><a href="/">about</a></li>
			<li>
				<button onclick={window.toggleTheme}
					><ThemeToggleIcon class="w-5" /></button
				>
			</li>
		</ul>
	</div>
</div>
