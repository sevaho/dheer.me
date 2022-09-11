<script>
	import SocialButton from '$lib/SocialButton.svelte';

	let socials = [
		{ name: 'Facebook', href: 'https://facebook.com', color: 'blue-500' },
		{ name: 'Pintrest', href: 'https://pintrest.com', color: 'red-600' },
		{ name: 'LinkedIn', href: 'https://linkedin.com', color: 'blue-600' }
	];
</script>

<div class="flex items-center justify-center h-screen bg-white-200">
	<div class="container">
		<div class="text-center">
			<h2
				class="text-4xl tracking-tight leading-10 font-extrabold text-blue-900 sm:text-5xl sm:leading-none md:text-6xl"
			>
				D'heer <span class="text-gray-600">Architecture</span>
			</h2>
			<h3 class="text-xl md:text-3xl mt-10">Website under construction</h3>
		</div>
		<div class="flex flex-wrap mt-10 justify-center">
			{#each socials as item}
				<SocialButton {item} />
			{/each}
		</div>
	</div>
</div>
