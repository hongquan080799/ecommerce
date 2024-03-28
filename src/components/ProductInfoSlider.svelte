<script>
	import { Carousel } from 'flowbite-svelte';
	export const images = [
		{
			alt: 'page1',
			src: 'https://st.meta.vn/Data/image/2024/02/19/tu-lanh-4-canh-electrolux-eqe6909a-bvn-622-lit.jpg',
			title: 'page1'
		},
		{
			alt: 'page3',
			src: 'https://st.meta.vn/Data/image/2024/02/19/tu-lanh-4-canh-electrolux-eqe6909a-bvn-622-lit-2.jpg',
			title: 'page3'
		}
	];
</script>

<div class="slider-container">
	<Carousel {images} duration={2000} />
</div>

<style>
	.slider-container {
		width: 100%;
	}
</style>
