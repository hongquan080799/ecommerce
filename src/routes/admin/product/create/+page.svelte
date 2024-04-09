<script lang="ts">
	import TechnicalInfoInput from '$lib/product/TechnicalInfoInput.svelte';
	import type { Product } from '../../../../types/Product';
	import RichTextEditor from '$lib/product/RichTextEditor.svelte';
	import CategoryPicker from '$lib/product/CategoryPicker.svelte';
	import MultiImageUploader from '../../../../components/product/MultiImageUploader.svelte';
	import BrandPicker from '$lib/product/BrandPicker.svelte';
	import * as api from '../../../../api';
	import { goto } from '$app/navigation';
	let isClear = false;
	let product: Partial<Product> = {};
	const clearImage = (imageUrl: string) => {
		productImages = productImages.filter((item) => !item.startsWith(imageUrl));
		product.images = productImages;
		isClear = true;
	};
	let productImages: string[] = [];
	const onProductSubmit = async () => {
		try {
			await api.productApi.insertProduct(product);
			alert('Thêm sản phẩm thành công');
			goto('/admin/product');
		} catch (error) {
			console.log(error);
			alert('Thêm sản phẩm thất bại');
		}
	};
</script>

<p class="mb-10 text-lg font-bold">Thêm sản phẩm</p>

<form class="form-container" on:submit={onProductSubmit}>
	<div class="form-group">
		<label for="email" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
			>Tên sản phẩm</label
		>
		<input
			bind:value={product.name}
			type="text"
			id="name"
			class=" block w-5/6 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light dark:focus:border-blue-500 dark:focus:ring-blue-500"
		/>
	</div>
	<div class="form-group">
		<label for="email" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
			>Mô tả</label
		>
		<textarea
			rows="4"
			id="description"
			bind:value={product.description}
			class="block w-5/6 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light dark:focus:border-blue-500 dark:focus:ring-blue-500"
		/>
	</div>
	<div class="form-group">
		<label for="technicalInfo" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
			>Thông tin kỹ thuật</label
		>
		<div class="block w-5/6">
			<TechnicalInfoInput
				onHandle={(result) => {
					product.technicalInfo = result;
				}}
			/>
		</div>
	</div>
	<div class="form-group">
		<label for="email" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
			>Thông tin sản phẩm</label
		>
		<div class="block w-5/6">
			<RichTextEditor onChange={(result) => (product.productInfo = result)} />
		</div>
	</div>
	<div class="form-group">
		<label for="email" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
			>Giá</label
		>
		<input
			type="number"
			id="price"
			bind:value={product.price}
			class="block w-5/6 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light dark:focus:border-blue-500 dark:focus:ring-blue-500"
		/>
	</div>
	<div class="form-group">
		<label for="email" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
			>Khuyến mãi</label
		>
		<input
			type="number"
			id="discount"
			bind:value={product.discount}
			class="block w-5/6 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light dark:focus:border-blue-500 dark:focus:ring-blue-500"
		/>
	</div>
	<div class="form-group">
		<label for="email" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
			>Số lượng</label
		>
		<input
			type="number"
			id="number"
			bind:value={product.quantity}
			class="block w-5/6 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light dark:focus:border-blue-500 dark:focus:ring-blue-500"
		/>
	</div>
	<div class="form-group">
		<label for="email" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
			>Trạng thái</label
		>
		<input
			type="tsext"
			id="status"
			class="block w-5/6 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light dark:focus:border-blue-500 dark:focus:ring-blue-500"
		/>
	</div>
	<div class="form-group">
		<label for="email" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
			>Nhãn hàng</label
		>
		<div class="block w-5/6">
			<BrandPicker
				handleSubmit={(result) => {
					product.brandId = result?.id;
				}}
			/>
		</div>
	</div>
	<div class="form-group">
		<label for="email" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
			>Danh mục</label
		>
		<div class="block w-5/6">
			<CategoryPicker
				handleSubmit={(result) => {
					product.categoryId = result?.id;
				}}
			/>
		</div>
	</div>
	<div class="form-group">
		<label for="email" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
			>Hình ảnh</label
		>
		<div class="relative block w-5/6">
			<MultiImageUploader
				onImageUploaded={(imageUrls) => {
					productImages = imageUrls; // Update the reactive variable
					product.images = imageUrls;
				}}
				{isClear}
			/>
			<div class="mt-10 flex max-w-96 flex-wrap">
				{#each productImages as imagesPath}
					<div class="image-container">
						<div class="close" on:click={() => clearImage(imagesPath)}>
							<svg
								class="h-5 w-5 text-gray-800 dark:text-white"
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
									d="M6 18 17.94 6M18 18 6.06 6"
								/>
							</svg>
						</div>
						<div class="item">
							<img src={imagesPath} alt="test" />
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
	<button
		type="submit"
		class="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
		>Save</button
	>
</form>

<style>
	.form-group {
		display: flex;
		margin-bottom: 20px;
		align-items: center;
	}

	.form-group label {
		width: 250px; /* Adjust the width as needed */
		margin-right: 10px;
	}
	.form-container {
		width: 70%;
	}
	.image-container {
		position: relative;
		margin: 10px 20px;
	}
	.image-container .close {
		position: absolute;
		right: 0;
		top: 0;
		transform: translate(100%, -50%);
		cursor: pointer;
	}
</style>
