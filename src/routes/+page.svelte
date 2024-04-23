<script>
	// @ts-nocheck

	import Slogan from './../components/Slogan.svelte';
	import Category from '../components/Category.svelte';
	import FlashSale from '../components/FlashSale.svelte';
	import Header from '../components/Header.svelte';
	import Popular from '../components/Popular.svelte';
	import PopularBrand from '../components/PopularBrand.svelte';
	import ProductViewList from '../components/ProductViewList.svelte';
	import Slider from '../components/Slider.svelte';
	import Info from '../components/info.svelte';
	import Footer from '../components/Footer.svelte';
	// class="text-gray-700"
	/** @type {import('./$types').PageData} */
	export let data;
	let { productWithCatList, brands } = data.props;
</script>

<Header />
<div class="body-container">
	<Category categories={productWithCatList} />
	<Slider />
	<Popular categories={productWithCatList} />
	<!-- <FlashSale /> -->
	<ProductViewList categories={productWithCatList} />
	<PopularBrand {brands} />
	<Slogan />
	<Footer />
</div>

<style>
	/* Global styles */
	:global(body) {
		margin: 0;
		padding: 0;
		background-color: rgb(235, 235, 235);
	}

	.body-container {
		background-color: rgb(235, 235, 235);
		max-width: 1236px;
		margin-inline: auto;
		display: flex;
		flex-direction: column;
		padding: 0 5px;
	}
</style>
