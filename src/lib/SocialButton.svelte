<script charset="utf-8">
	export let item = { name: 'Not Found' }; // default value
</script>

<div class="m-3">
	<a
      href="{item.href}"
    title="Link to {item.name}"
    class="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-{item.color} hover:border-{item.color} hover:bg-{item.color} hover:text-white shadow-md py-2 px-6 inline-flex items-center"
	>
		<span class="mx-auto">{item.name}</span>
	</a>
</div>
