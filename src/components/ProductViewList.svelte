<script lang="ts">
	import type { PopularProductWithCat, Product } from '../types/Product';
	import ProductView from './ProductView.svelte';
	export let categories: PopularProductWithCat[] = [];
	let products = categories
		.map((item) => item.subCategories)
		.flat()
		.map((item2) => item2.products)
		.flat();
</script>

<div class="product-container">
	{#each categories as cat}
		<ProductView
			titleCatogory={cat.name}
			titleProduct={`${cat.name} nổi bật`}
			categoryList={cat.subCategories}
			popularProducts={products}
		/>
	{/each}
</div>

<style>
</style>
