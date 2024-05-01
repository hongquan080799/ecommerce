<script lang="ts">
	import type { Category } from '../types/Category';
	import type { PopularProductWithCat, SubCategory } from '../types/Product';
	const logo = '/images/hot.jpg';

	export let categories: PopularProductWithCat[] = [];
	let subCategory: SubCategory[] = categories.map((item) => item.subCategories).flat();
	let maxItemDisplay = 10;
	export let subCategories: Category[] = [];
</script>

<div class="container">
	<div class="header">
		<img src={logo} alt="icon" />
		<p class="ml-1 text-sm font-bold">Danh mục nổi bật</p>
	</div>
	<div class="item-container">
		{#each subCategory.slice(0, maxItemDisplay) as sub}
			<a href={`/category/${sub.id}`}>
				<div class="item">
					<!-- <div class="discount-container"><div class="discount">-43%</div></div> -->
					<img
						class="lazy-img lazy-loaded"
						alt="✓"
						data-src="/icons/cateico/c1018-210x210.jpg"
						src={sub.imageUrl}
					/>
					<p class="mb-10 text-center text-sm text-gray-500">{sub.name}</p>
				</div>
			</a>
		{/each}
		{#each subCategories.slice(0, maxItemDisplay) as sub}
			<a
				href={`/category/${sub.id}`}
				on:click={() => (window.location.href = '/category/' + sub.id)}
			>
				<div class="item">
					<!-- <div class="discount-container"><div class="discount">-43%</div></div> -->
					<img
						class="lazy-img lazy-loaded"
						alt="✓"
						data-src="/icons/cateico/c1018-210x210.jpg"
						src={sub.imageUrl}
					/>
					<p class="mb-10 text-center text-sm text-gray-500">{sub.name}</p>
				</div>
			</a>
		{/each}
	</div>
	{#if subCategory.length > maxItemDisplay}
		<div class="my-4 flex justify-center">
			<button
				on:click={() => (maxItemDisplay += 5)}
				class="bg-white-500 items-center rounded-sm border-2 border-solid border-blue-500 px-2 py-1 text-sm font-normal text-blue-500 hover:bg-blue-700 hover:text-white"
			>
				Xem thêm chuyên mục
			</button>
		</div>
	{/if}
	{#if subCategories.length > maxItemDisplay}
		<div class="my-4 flex justify-center">
			<button
				on:click={() => (maxItemDisplay += 5)}
				class="bg-white-500 items-center rounded-sm border-2 border-solid border-blue-500 px-2 py-1 text-sm font-normal text-blue-500 hover:bg-blue-700 hover:text-white"
			>
				Xem thêm chuyên mục
			</button>
		</div>
	{/if}
</div>

<style>
	.item-container {
		display: flex;
		flex-wrap: wrap;
		width: 100%;
	}
	.header {
		display: flex;
		align-items: center;
		margin-bottom: 10px;
	}
	img {
		width: 20px;
	}
	.container {
		margin: 10px 0 0 0;
		background-color: white;
		padding: 10px 10px;
	}
	.discount-container {
		display: flex;
		justify-content: end;
		width: 100%;
		padding: 4px 4px 0 0;
	}
	.discount {
		background-color: #f11919;
		color: white;
		width: fit-content;
		font-size: 0.7rem;
		border-radius: 5px;
	}
	.item img {
		width: 70%;
	}
	.item {
		max-width: 121px;
		min-width: 121px;
		max-height: 10rem;
		height: 8rem;
		align-items: center;
		display: flex;
		flex-direction: column;
		border: 1px solid #cecece;
		margin: -1px -1px 0 0;
	}
</style>
