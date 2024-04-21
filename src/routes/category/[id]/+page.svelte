<script>
	import { goto } from '$app/navigation';
	import { Button } from 'flowbite-svelte';
	import BrandView from '../../../components/categories/BrandView.svelte';
	import SearchBar from '../../../components/categories/SearchBar.svelte';
	import { formattedPrice } from '../../../utils/Format';
</script>

<div class="container">
	<div class="filter">
		<div class="filter-section">
			<p class="text-md text-center font-bold">Danh mục cha</p>
			<ul class="">
				<li class="my-2">
					<a href="#" class="flex items-center">
						<img src="https://meta.vn/icons/cats/1039.png" alt="alt" class="mr-2 w-6" />
						<p class="text-sm">Điều hòa 2 chiều</p>
					</a>
				</li>
				<li class="my-2">
					<a href="#" class="flex items-center">
						<img src="https://meta.vn/icons/cats/1039.png" alt="alt" class="mr-2 w-6" />
						<p class="text-sm">Điều hòa 2 chiều</p>
					</a>
				</li>
				<li class="my-2">
					<a href="#" class="flex items-center">
						<img src="https://meta.vn/icons/cats/1039.png" alt="alt" class="mr-2 w-6" />
						<p class="text-sm">Điều hòa 2 chiều</p>
					</a>
				</li>
				<li class="my-2">
					<a href="#" class="flex items-center">
						<img src="https://meta.vn/icons/cats/1039.png" alt="alt" class="mr-2 w-6" />
						<p class="text-sm">Điều hòa 2 chiều</p>
					</a>
				</li>
			</ul>
		</div>
		<div class="filter-section mt-16">
			<p class="text-md text-center font-bold">Thương hiệu</p>
			<SearchBar />
			<ul class="">
				<li class=" flex items-center">
					<div class="mb-3 flex items-center">
						<input
							id="default-checkbox"
							type="checkbox"
							value=""
							class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
						/>
						<label for="default-checkbox" class="ms-2 text-sm text-gray-900 dark:text-gray-300"
							>Casper</label
						>
					</div>
				</li>
				<li class=" flex items-center">
					<div class="mb-3 flex items-center">
						<input
							id="default-checkbox"
							type="checkbox"
							value=""
							class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
						/>
						<label for="default-checkbox" class="ms-2 text-sm text-gray-900 dark:text-gray-300"
							>Casper</label
						>
					</div>
				</li>
				<li class=" flex items-center">
					<div class="mb-3 flex items-center">
						<input
							id="default-checkbox"
							type="checkbox"
							value=""
							class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
						/>
						<label for="default-checkbox" class="ms-2 text-sm text-gray-900 dark:text-gray-300"
							>Casper</label
						>
					</div>
				</li>
			</ul>
		</div>
		<div class="filter-section mt-16">
			<p class="text-md mb-5 text-center font-bold">Khoảng giá</p>
			<ul class="">
				<li class=" flex items-center">
					<div class="mb-3 flex items-center">
						<input
							id="default-checkbox"
							type="checkbox"
							value=""
							class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
						/>
						<label for="default-checkbox" class="ms-2 text-sm text-gray-900 dark:text-gray-300"
							>3 triệu - 5 triệu</label
						>
					</div>
				</li>
				<li class=" flex items-center">
					<div class="mb-3 flex items-center">
						<input
							id="default-checkbox"
							type="checkbox"
							value=""
							class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
						/>
						<label for="default-checkbox" class="ms-2 text-sm text-gray-900 dark:text-gray-300"
							>3 triệu - 5 triệu</label
						>
					</div>
				</li>
				<li class=" flex items-center">
					<div class="mb-3 flex items-center">
						<input
							id="default-checkbox"
							type="checkbox"
							value=""
							class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
						/>
						<label for="default-checkbox" class="ms-2 text-sm text-gray-900 dark:text-gray-300"
							>3 triệu - 5 triệu</label
						>
					</div>
				</li>
			</ul>
		</div>
	</div>
	<div>
		<BrandView />
		<ul class="product-container">
			{#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13] as i}
				<li class="product-item">
					<div class="flex justify-center">
						<img
							src="https://www.webstaurantstore.com/images/products/medium/214530/2162108.jpg"
							alt="123"
						/>
					</div>
					<p class="text-sm font-medium">Máy nướng than</p>
					<p class="mt-4 text-sm text-blue-500">Casper</p>
					<p class="text-sm font-bold text-red-700">{formattedPrice(10000000)}</p>
					<p class="text-xs font-light italic text-gray-500 line-through">
						{formattedPrice(9000000)}
					</p>
				</li>
			{/each}
		</ul>
		<Button color="blue">Xem thêm</Button>
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
