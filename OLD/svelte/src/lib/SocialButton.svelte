<script charset="utf-8">
	export let item = { name: 'Not Found' }; // default value
</script>

<div class="m-3">
	<a
		href={item.href}
		title="Link to {item.name}"
		style="--color: {item.color};"
		class="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
	>
		<span class="mx-auto">{item.name}</span>
	</a>
</div>

<style lang="scss">
	a {

        transition: 0.2s;
		color: var(--color);
        border-color: var(--color);

		&:hover {
			background-color: var(--color);
			color: white;
		}
	}
</style>
