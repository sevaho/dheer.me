<script>
	import SocialButton from '$lib/SocialButton.svelte';

	let socials = [
		{ name: 'Facebook', href: 'https://www.facebook.com/sofie.dheer', color: '#4267B2' },
		{
			name: 'LinkedIn',
			href: 'https://www.linkedin.com/in/sofie-d-heer-43987717b/',
			color: '#0072b1'
		}
	];
</script>

<svelte:head>
	<title>Sofie D'heer Architecture</title>
	<meta name="Sofie D'heer portfolio website." />
</svelte:head>

<div
	class="flex items-center justify-center h-screen bg-white-200 bg-cover bg-[url('/PC160850.jpg')]"
>
	<div class="container flex justify-center">
		<div class="bg-white pt-5 pb-5 pl-10 pr-10 opacity-80 max-w-3xl rounded">
			<div class="text-center">
				<h2
					class="text-4xl tracking-tight leading-10 font-extrabold text-blue-900 sm:text-5xl sm:leading-none md:text-6xl"
				>
					D'heer <span class="text-gray-600">Architecture</span>
				</h2>
			</div>
		</div>
	</div>
</div>

<div
	class="leading-normal tracking-normal text-white"
	style="font-family: 'Source Sans Pro', sans-serif;"
>
	<!--Hero-->
	<div class="pt-4  bg-cover bg-[url('/PC160860.jpg')]">
		<svg
			viewBox="0 0 1428 174"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
		>
			<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
				<g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fill-rule="nonzero">
					<path
						d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
						opacity="0.100000001"
					/>
					<path
						d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
						opacity="0.100000001"
					/>
					<path
						d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
						id="Path-4"
						opacity="0.200000003"
					/>
				</g>
				<g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fill-rule="nonzero">
					<path
						d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"
					/>
				</g>
			</g>
		</svg>
	</div>

	<section class="bg-white border-b py-8">
		<div class="container max-w-5xl mx-auto m-8">
			<h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
				Projecten
			</h2>
			<div class="flex flex-wrap">
				<div class="w-5/6 sm:w-1/2 p-6">
					<h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">Eindwerk</h3>
					<p class="text-gray-600 mb-8">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc
						commodo posuere et sit amet ligula.
						<br />
						<br />
					</p>
				</div>
				<div class="w-full sm:w-1/2 p-2 mt-6">
					<img src="PC160850.jpg" class="max-w-full h-auto rounded" alt="..." />
				</div>
				<div class="container">
					<div class="flex flex-wrap -m-1 md:-m-2">
						<div class="flex flex-wrap w-1/2">
							<div class="w-1/2 p-1 md:p-2">
								<img
									alt="gallery"
									class="block object-cover object-center w-full h-full rounded-lg"
									src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
								/>
							</div>
							<div class="w-1/2 p-1 md:p-2">
								<img
									alt="gallery"
									class="block object-cover object-center w-full h-full rounded-lg"
									src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
								/>
							</div>
							<div class="w-full p-1 md:p-2">
								<img
									alt="gallery"
									class="block object-cover object-center w-full h-full rounded-lg"
									src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
								/>
							</div>
						</div>
						<div class="flex flex-wrap w-1/2">
							<div class="w-full p-1 md:p-2">
								<img
									alt="gallery"
									class="block object-cover object-center w-full h-full rounded-lg"
									src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
								/>
							</div>
							<div class="w-1/2 p-1 md:p-2">
								<img
									alt="gallery"
									class="block object-cover object-center w-full h-full rounded-lg"
									src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
								/>
							</div>
							<div class="w-1/2 p-1 md:p-2">
								<img
									alt="gallery"
									class="block object-cover object-center w-full h-full rounded-lg"
									src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="flex flex-wrap flex-col-reverse sm:flex-row mt-5">
				<div class="w-full sm:w-1/2 p-1 mt-6">
					<img src="DSC_0692.png" class="max-w-full h-auto rounded" alt="..." />
				</div>
				<div class="w-full sm:w-1/2 p-6 mt-6">
					<div class="align-middle">
						<h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">Eindwerk</h3>
						<p class="text-gray-600 mb-8">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc
							commodo posuere et sit amet ligula.
							<br />
							<br />
						</p>

					</div>
				</div>
				<div class="container">
					<div class="flex flex-wrap -m-1 md:-m-2">
						<div class="flex flex-wrap w-1/2">
							<div class="w-1/2 p-1 md:p-2">
								<img
									alt="gallery"
									class="block object-cover object-center w-full h-full rounded"
									src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
								/>
							</div>
							<div class="w-1/2 p-1 md:p-2">
								<img
									alt="gallery"
									class="block object-cover object-center w-full h-full rounded"
									src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
								/>
							</div>
							<div class="w-full p-1 md:p-2">
								<img
									alt="gallery"
									class="block object-cover object-center w-full h-full rounded-lg"
									src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
								/>
							</div>
						</div>
						<div class="flex flex-wrap w-1/2">
							<div class="w-full p-1 md:p-2">
								<img
									alt="gallery"
									class="block object-cover object-center w-full h-full rounded-lg"
									src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
								/>
							</div>
							<div class="w-1/2 p-1 md:p-2">
								<img
									alt="gallery"
									class="block object-cover object-center w-full h-full rounded-lg"
									src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
								/>
							</div>
							<div class="w-1/2 p-1 md:p-2">
								<img
									alt="gallery"
									class="block object-cover object-center w-full h-full rounded-lg"
									src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="bg-[#e9eff0] border-b py-8 text-gray-800">
		<div class="container max-w-5xl mx-auto m-8">
			<h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
				Wie is Sofie D'heer
			</h2>

			<div class="flex flex-wrap">
			<div class="w-full sm:w-1/2 p-6 mt-6">
				<img src="sofie_dheer.jpeg" class="max-w-full h-auto rounded-full" alt="..." />
			</div>
			<div class="w-full sm:w-1/2 p-6 mt-6">
                <p>TODO</p>
			</div>
			</div>
		</div>
	</section>

	<section class="bg-[#171315] border-b py-8">
		<div class="container max-w-5xl mx-auto m-8">
			<h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-white-800">
				Socials & Contact
			</h2>
			<div class="flex flex-wrap mt-20 mb-20 justify-center">
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
	</section>
</div>

<style>
	.gradient {
		background: linear-gradient(90deg, #cdc 0%, #000 100%);
	}
</style>
