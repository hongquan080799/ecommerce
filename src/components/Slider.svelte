<script lang="ts">
	import { Carousel } from 'flowbite-svelte';
	import ZoneMarket from './ZoneMarket.svelte';
	import type { Banner } from '../types/Banner';
	import { scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	export let banners: Banner[] = [];
	let images = banners.map((banner) => {
		return {
			alt: banner.name,
			src: banner.imageUrl,
			title: banner.name,
			redirectUrl: banner.redirectUrl
		};
	});
	const scaleAnimation = (x: any) => scale(x, { duration: 500, easing: quintOut });
</script>

<div class="slider-container">
	<div class="max-h-fit max-w-full">
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
	</div>
	<ZoneMarket />
</div>

<style>
	.slider-container {
		width: 100%;
		background-color: #fff;
	}
</style>
