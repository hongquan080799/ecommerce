<script lang="ts">
	import { goto } from '$app/navigation';
	import { Button, Input } from 'flowbite-svelte';
	import type { Category } from '../types/Category';
	import type { ProductWithCat } from '../types/Product';
	import { formattedPrice } from '../utils/Format';
	import { CartOutline, EyeOutline } from 'flowbite-svelte-icons';
	export let titleCatogory: string;
	export let titleProduct: string;
	export let categoryList: Category[];
	export let popularProducts: ProductWithCat[]; // Corrected spelling
</script>

<div class="container">
	<p class="text-sm font-bold">{titleCatogory}</p>
	<ul class="category-container">
		{#each categoryList as category (category.id)}
			<a href={`/category/${category.id}`}>
				<li class="category-item">
					<img src={category.imageUrl} alt={category.name} />
					<p class="text-sm">{category.name}</p>
				</li>
			</a>
		{/each}
	</ul>
	<p class="mt-4 text-sm font-bold">{titleProduct}</p>
	<ul class="product-container">
		{#each popularProducts as product}
			<li class="product-item">
				<div class="flex max-h-16 justify-center">
					<img src={product.images[0]} alt={product.name} />
				</div>
				<p class="max-h-10 text-sm font-medium">{product.name}</p>
				<p class="mt-4 text-sm text-blue-500">{product.brand.name}</p>
				<p class="text-sm font-bold text-red-700">{formattedPrice(product.price)}</p>
				<p class="text-xs font-light italic text-gray-500 line-through">
					{formattedPrice(product.price - product.price * product.discount)}
				</p>
				<div class="mt-6 flex">
					<Button size="sm" class="mr-1 w-full" color="green"
						><CartOutline />
						<p class="add-to-card-text">Thêm vào giỏ</p></Button
					>
					<Button color="primary" on:click={() => goto('/products/' + Number(product.id))}
						><EyeOutline />
					</Button>
				</div>
			</li>
		{/each}
	</ul>
</div>

<style>
	.category-container {
		display: flex;
		margin-top: 10px;
		padding-top: 5px;
		overflow-x: auto;
		-webkit-overflow-scrolling: touch;
		scrollbar-width: thin;
	}
	.product-container {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		margin-top: 9px;
		gap: 0.5rem;
		-webkit-overflow-scrolling: touch;
		scrollbar-width: thin;
		@media screen and (max-width: 1288px) {
			grid-template-columns: repeat(4, 1fr);
		}
		@media screen and (max-width: 900px) {
			grid-template-columns: repeat(3, 1fr);
		}
		@media screen and (max-width: 780px) {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	.add-to-card-text {
		@media screen and (max-width: 900px) {
			display: none;
		}
	}
	.category-item {
		max-width: 10rem;
		min-width: 10rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		border: 1px solid #cecece;
		margin: -1px -1px 0 0;
		cursor: pointer;
	}
	.product-item {
		width: 100%;
		display: flex;
		flex-direction: column;
		box-shadow: -1px -1px 14px 0px rgba(0, 0, 0, 0.3);
		-webkit-box-shadow: -1px -1px 14px 0px rgba(0, 0, 0, 0.3);
		-moz-box-shadow: -1px -1px 14px 0px rgba(0, 0, 0, 0.3);
		padding: 1.4rem 0.5rem;
		cursor: pointer;
	}
	/* .product-item:hover {
		transform: scale(1.02);
		transition: transform 0.5s ease;
	} */
	.category-item img {
		width: 40%;
	}
	.product-item img {
		width: 50%;
	}
	.container {
		background-color: #fff;
		padding: 0.5rem 0.6rem 1.5rem 0.6rem;
		margin: 5px 0 15px 0;
	}
</style>
