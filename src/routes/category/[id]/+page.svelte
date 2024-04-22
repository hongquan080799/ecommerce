<script>
	import { Button } from 'flowbite-svelte';
	import BrandView from '../../../components/categories/BrandView.svelte';
	import SearchBar from '../../../components/categories/SearchBar.svelte';
	import { formattedPrice } from '../../../utils/Format';
	export let data;
	const { categoryTree, categoryId } = data;
</script>

<div class="container">
	<div class="filter">
		<div class="filter-section">
			<p class="text-md text-center font-bold">{categoryTree.name}</p>
			<ul class="">
				{#each categoryTree.subCategory as sub}
					<li class="p-2 {categoryId === sub.id && 'bg-green-500 text-white'}">
						<a
							href={'/category/' + sub.id}
							on:click={() => (window.location.href = '/category/' + sub.id)}
							class="flex items-center"
						>
							<img src={sub.image_url} alt={sub.name} class="mr-2 w-6" />
							<p class="text-sm">{sub.name}</p>
						</a>
					</li>
				{/each}
			</ul>
		</div>
		<div class="filter-section mt-16">
			<p class="text-md text-center font-bold">Thương hiệu</p>
			<SearchBar />
			<ul class="mt-2">
				{#each categoryTree.brandList as brand}
					<li class=" flex items-center">
						<div class="mb-3 flex items-center">
							<input
								id="default-checkbox"
								type="checkbox"
								value=""
								class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
							/>
							<label for="default-checkbox" class="ms-2 text-sm text-gray-900 dark:text-gray-300"
								>{brand.name}</label
							>
						</div>
					</li>
				{/each}
			</ul>
		</div>
		<div class="filter-section mt-16">
			<p class="text-md mb-5 text-center font-bold">Khoảng giá</p>
			<div class="flex">
				<div class="mr-2">
					<label
						for="min_price"
						class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Min</label
					>
					<input
						type="number"
						id="min_price"
						class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
						placeholder=""
						min="0"
						value
					/>
				</div>
				<div>
					<label
						for="max_price"
						class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Max</label
					>
					<input
						type="number"
						id="max_price"
						class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
						placeholder=""
						min="0"
						value
					/>
				</div>
			</div>
		</div>
	</div>
	<div>
		<BrandView data={categoryTree.brandList} />
		<ul class="product-container">
			{#each categoryTree.productWithCat as product}
				<li class="product-item">
					<div class="flex justify-center">
						<img
							src="https://www.webstaurantstore.com/images/products/medium/214530/2162108.jpg"
							alt="123"
						/>
					</div>
					<p class="text-sm font-medium">{product.name}</p>
					<p class="mt-4 text-sm text-blue-500">{product.brandName}</p>
					<p class="text-sm font-bold text-red-700">
						{formattedPrice(product.price - product.price * product.discount)}
					</p>
					<p class="text-xs font-light italic text-gray-500 line-through">
						{formattedPrice(product.price)}
					</p>
				</li>
			{/each}
		</ul>
		<!-- <Button color="blue">Xem thêm</Button> -->
	</div>
</div>

<style>
	.product-container {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		margin-top: 9px;
		gap: 0.5rem;
		-webkit-overflow-scrolling: touch;
		scrollbar-width: thin;
		margin-bottom: 2rem;
	}
	.product-item {
		display: flex;
		flex-direction: column;
		box-shadow: -1px -1px 14px 0px rgba(0, 0, 0, 0.3);
		-webkit-box-shadow: -1px -1px 14px 0px rgba(0, 0, 0, 0.3);
		-moz-box-shadow: -1px -1px 14px 0px rgba(0, 0, 0, 0.3);
		padding: 1.4rem 0.5rem;
		cursor: pointer;
	}
	.product-item:hover {
		transform: scale(1.02);
		transition: transform 0.5s ease;
	}
	.product-item img {
		width: 50%;
	}
	.container {
		display: flex;
	}
	.filter {
		width: 18rem;
		padding: 0 1rem;
	}
</style>
