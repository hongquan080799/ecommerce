<script lang="ts">
	import type { Product } from '../types/Product';
	export let titleProduct: string;
	export let popularProducts: Product[]; // Corrected spelling
	let formattedPrice = (price: number) => {
		return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
	};
</script>

<div class="container">
	<p class="mt-4 text-sm font-bold">{titleProduct}</p>
	<ul class="product-container">
		{#each popularProducts as product (product.id)}
			<li class="product-item">
				<div class="flex justify-center">
					<img src={product.imageUrl} alt={product.name} />
				</div>
				<p class="text-sm font-medium">{product.name}</p>
				<p class="mt-4 text-sm text-blue-500">{product.brand}</p>
				<p class="text-sm font-bold text-red-700">{formattedPrice(product.price)}</p>
				<p class="text-xs font-light italic text-gray-500 line-through">
					{formattedPrice(product.price - product.price * product.discount)}
				</p>
			</li>
		{/each}
	</ul>
</div>

<style>
	.product-container {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		margin-top: 9px;
		gap: 0.5rem;
		padding: 0.5rem 0 1rem 0;
	}
	.product-item {
		max-width: 14rem;
		display: flex;
		flex-direction: column;
		box-shadow: -1px 3px 7px 0px rgba(188, 188, 188, 0.75);
		padding: 1rem 8px;
		cursor: pointer;
	}
	.product-item img {
		width: 50%;
	}
	.container {
		background-color: #fff;
		padding: 0.5rem 0.6rem;
		margin: 1rem 0 15px 0;
	}
</style>
