<script>
	import SocialButton from '$lib/SocialButton.svelte';

	let socials = [
		{ name: 'Facebook', href: 'https://www.facebook.com/sofie.dheer', color: '#4267B2' },
		{ name: 'Pintrest', href: 'https://www.facebook.com/sofie.dheer', color: '#E60023' },
		{
			name: 'LinkedIn',
			href: 'https://www.linkedin.com/in/sofie-d-heer-43987717b/',
			color: '#0072b1'
		}
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
		<p class="text-center text-xl md:text-3l mt-10">
			Contact: <a class="text-sky-400 underline decoration-sky-500" href="mailto:sofie@dheer.me"
				>sofie@dheer.me</a
			>
		</p>
	</div>
</div>
