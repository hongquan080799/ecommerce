<script lang="ts">
	import { goto } from '$app/navigation';
	import ImageUploader from '../../../../components/product/ImageUploader.svelte';
	import * as api from '../../../../api';
	import type { Brand } from '../../../../types/Brand';
	let imagesPath = '';
	let isClear = false;
	let brand: Partial<Brand> = {};
	const clearImage = () => {
		imagesPath = '';
		isClear = true;
	};

	const insertCategory = async () => {
		if (imagesPath !== '') {
			brand.imageUrl = imagesPath;
		}
		try {
			await api.brandApi.insertBrand(brand);
			alert('Thêm nhãn hàng thành công');
			goto('/admin/brand');
		} catch (error) {
			console.log(error);
			alert('Thêm nhãn hàng thất bại');
		}
	};
</script>

<p class="mb-10 text-lg font-bold">Thêm nhãn hàng</p>

<form class="form-container" on:submit={insertCategory}>
	<div class="form-group">
		<label for="email" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
			>Tên nhãn hàng</label
		>
		<input
			bind:value={brand.name}
			type="text"
			id="firstName"
			class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light dark:focus:border-blue-500 dark:focus:ring-blue-500"
		/>
	</div>
	<div class="form-group">
		<label for="email" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
			>Logo</label
		>
		<div class="relative block w-full">
			<ImageUploader onImageUploaded={(imageUrl) => (imagesPath = imageUrl)} {isClear} />
			{#if imagesPath != ''}
				<div class="image-container">
					<div class="close" on:click={clearImage}>
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
			{/if}
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
		width: 140px; /* Adjust the width as needed */
		margin-right: 10px;
	}
	.form-container {
		width: 40%;
	}
	.image-container {
		position: absolute;
		left: 0;
		margin-top: 20px;
	}
	.image-container .close {
		position: absolute;
		right: 0;
		top: 0;
		transform: translate(100%, -50%);
		cursor: pointer;
	}
</style>
