<script>
	import { Button, Modal } from 'flowbite-svelte';
	import BrandView from '../../../components/categories/BrandView.svelte';
	import SearchBar from '../../../components/categories/SearchBar.svelte';
	import { formattedPrice } from '../../../utils/Format';
	import { CartOutline, EyeOutline } from 'flowbite-svelte-icons';
	import { goto } from '$app/navigation';
	import CategoryView from '../../../components/categories/CategoryView.svelte';
	let openModal = false;
	let openModalFilter = false;
	export let data;
	const { categoryTree, categoryId } = data;
</script>

<div class="container">
	<div class="filter">
		<div class="filter-section">
			<p class="text-md text-center font-bold">{categoryTree.name}</p>
			<ul class="">
				{#each categoryTree.subCategory as sub}
					<li class="p-2 {categoryId === sub.id && 'rounded-lg bg-green-600 text-white'}">
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
			<p class="text-md text-center font-bold">Nhãn hàng</p>
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
		<div class="product-filter-bar">
			<div class="flex px-2">
				<Button class="mr-3 p-0" color="none" on:click={() => (openModal = true)}
					><p class="w-20">Nhãn hàng</p>
					<svg
						class="ml-1 h-4 w-4 text-gray-800 dark:text-white"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						fill="none"
						viewBox="0 0 24 24"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="m19 9-7 7-7-7"
						/>
					</svg>
				</Button>
				<Modal title="Nhãn hàng" bind:open={openModal} class="h-screen" size="xl" autoclose>
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
									<label
										for="default-checkbox"
										class="ms-2 text-sm text-gray-900 dark:text-gray-300">{brand.name}</label
									>
								</div>
							</li>
						{/each}
					</ul></Modal
				>
			</div>
			<Button class="p-0" color="none" on:click={() => (openModalFilter = true)}
				><p class="w-20">Khoảng giá</p>
				<svg
					class="ml-1 h-4 w-4 text-gray-800 dark:text-white"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					fill="none"
					viewBox="0 0 24 24"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="m19 9-7 7-7-7"
					/>
				</svg></Button
			>
			<Modal title="Bộ lọc" bind:open={openModalFilter} class="h-screen" size="xl" autoclose>
				<p class="text-sm font-bold text-black">Khoảng giá</p>
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
			</Modal>
		</div>
		<CategoryView data={categoryTree.subCategory} />
		<div class="brand">
			<BrandView data={categoryTree.brandList} />
		</div>
		<ul class="product-container">
			{#each categoryTree.productWithCat as product}
				<li class="product-item">
					<div class="flex max-h-16 justify-center">
						<img src={product.images[0]} alt={product.name} />
					</div>
					<p class="text-sm font-medium">{product.name}</p>
					<p class="mt-4 text-sm text-blue-500">{product.brandName}</p>
					<p class="text-sm font-bold text-red-700">
						{formattedPrice(product.price - product.price * product.discount)}
					</p>
					<p class="text-xs font-light italic text-gray-500 line-through">
						{formattedPrice(product.price)}
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
		@media screen and (max-width: 1288px) {
			grid-template-columns: repeat(4, 1fr);
			padding: 0 1rem;
		}
		@media screen and (max-width: 900px) {
			grid-template-columns: repeat(3, 1fr);
		}
		@media screen and (max-width: 780px) {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	.brand {
		@media screen and (max-width: 1288px) {
			padding: 0 1rem;
		}
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
		background-color: #fff;
		padding-top: 1rem;
		min-height: 30rem;
	}
	.filter {
		width: 18rem;
		padding: 0 1rem;
		background-color: #fff;
		@media screen and (max-width: 1279px) {
			display: none;
		}
	}
	.add-to-card-text {
		@media screen and (max-width: 900px) {
			display: none;
		}
	}
	.product-filter-bar {
		display: flex;

		display: none;
		@media screen and (max-width: 1279px) {
			display: flex;
		}
	}
</style>
