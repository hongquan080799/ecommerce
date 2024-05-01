<script>
	import { Carousel } from 'flowbite-svelte';
	import ZoneMarket from './ZoneMarket.svelte';
	/**
	 * @type {import('../types/Banner').Banner[]}
	 */
	export let banners = [];
	console.log(banners);
	let images = banners.map((banner) => {
		return {
			alt: banner.name,
			src: banner.imageUrl,
			title: banner.name,
			redirectUrl: banner.redirectUrl || ''
		};
	});
</script>

<div class="slider-container">
	<div class="max-h-fit max-w-full">
		{#if banners.length > 0}
			<Carousel
				{images}
				duration={3900}
				let:Indicators
				let:Controls
				imgClass="object-contain h-full w-fit"
			>
				<a slot="slide" href={images[index].redirectUrl} target="_blank" let:Slide let:index>
					<Slide image={images[index]} />
				</a>
				<Controls />
				<Indicators />
			</Carousel>
		{/if}
	</div>
	<!-- <ZoneMarket /> -->
</div>

<style>
	.slider-container {
		background-color: #fff;
	}
</style>
