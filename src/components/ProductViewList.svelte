<script lang="ts">
	import type { PopularProductWithCat, Product, SubCategory } from '../types/Product';
	import ProductView from './ProductView.svelte';
	export let categories: PopularProductWithCat[] = [];
	const getProductsList = (subCatList: SubCategory[]) => {
		return subCatList
			.map((subCat) => {
				return subCat.products;
			})
			.flat();
	};
</script>

<div class="product-container">
	{#each categories as cat}
		<ProductView
			titleCatogory={cat.name}
			titleProduct={`${cat.name} nổi bật`}
			categoryList={cat.subCategories}
			popularProducts={getProductsList(cat.subCategories)}
		/>
	{/each}
</div>

<style>
</style>
