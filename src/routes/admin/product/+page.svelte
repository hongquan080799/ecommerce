<script lang="ts">
	import { goto } from '$app/navigation';
	import * as api from '../../../api';
	import moment from 'moment';
	import type { Product } from '../../../types/Product';
	import ImageSlider from '$lib/product/ImageSlider.svelte';
	import { formattedPrice } from '../../../utils/Format';
	/** @type {import('./$types').PageData} */
	export let data;
	let { loadedData } = data.props;
	let filterData = loadedData as Product[];
	let search = '';
	const onSearch = () => {
		if (search.length > 0) {
			filterData = filterData.filter((item) =>
				item.name.toLowerCase().includes(search.toLowerCase())
			);
		} else {
			filterData = loadedData as Product[];
		}
	};
	const onDelete = async (id: number) => {
		const confirmed = confirm('bạn có muốn xóa sản phẩm này không ?');
		if (!confirmed) return;
		try {
			await api.productApi.deleteProduct(id);
			alert('Xóa sản phẩm thành công');
			loadedData = (await api.productApi.loadProducts()) as unknown as Product[];
			onSearch();
		} catch (error) {
			console.log(error);
			alert('Xóa sản phẩm thất bại');
		}
	};
</script>

<p class="text-lg font-bold">Sản phẩm</p>

<div class="relative mt-5 overflow-x-auto shadow-md sm:rounded-lg">
	<div class="flex justify-between bg-white pb-4 dark:bg-gray-900">
		<div class="relative mt-1">
			<div
				class="rtl:inset-r-0 pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3"
			>
				<svg
					class="h-4 w-4 text-gray-500 dark:text-gray-400"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 20 20"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
					/>
				</svg>
			</div>
			<input
				type="text"
				id="table-search"
				bind:value={search}
				on:input={onSearch}
				class="block w-80 rounded-lg border border-gray-300 bg-gray-50 ps-10 pt-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
				placeholder="Search for items"
			/>
		</div>
		<button
			on:click={() => goto('/admin/product/create')}
			type="button"
			class="mb-2 me-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			>Thêm</button
		>
	</div>
	<table class="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
		<thead class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
			<tr>
				<th scope="col" class="p-4">
					<div class="flex items-center">
						<input
							id="checkbox-all-search"
							type="checkbox"
							class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
						/>
						<label for="checkbox-all-search" class="sr-only">checkbox</label>
					</div>
				</th>
				<th scope="col" class="px-6 py-3">Mã sản phẩm</th>
				<th scope="col" class="px-6 py-3">Tên sản phẩm</th>
				<th scope="col" class="px-6 py-3">Mô tả</th>
				<th scope="col" class="px-6 py-3">Hình ảnh</th>
				<th scope="col" class="px-6 py-3">Giá</th>
				<th scope="col" class="px-6 py-3">Khuyễn mãi</th>
				<th scope="col" class="px-6 py-3">Danh mục</th>
				<th scope="col" class="px-6 py-3">Nhãn hàng</th>
				<th scope="col" class="px-6 py-3">Số lượng</th>
				<th scope="col" class="px-6 py-3">Time</th>
				<th scope="col" class="px-6 py-3">Updated by</th>
				<th scope="col" class="px-6 py-3"></th>
			</tr>
		</thead>
		<tbody>
			{#each filterData as data}
				<tr
					class="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
				>
					<td class="w-4 p-4">
						<div class="flex items-center">
							<input
								id="checkbox-table-search-1"
								type="checkbox"
								class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
							/>
							<label for="checkbox-table-search-1" class="sr-only">checkbox</label>
						</div>
					</td>
					<td class="px-6 py-4">{data.id}</td>
					<th
						scope="row"
						class="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
					>
						{data.name}
					</th>
					<td class="w-15 px-6 py-4">
						{data.description}
					</td>

					<td class="w-36 px-6 py-4">
						<ImageSlider imageList={data.images} />
					</td>
					<td class="px-6 py-4">
						{formattedPrice(data.price)}
					</td>
					<td class="px-6 py-4">
						{`${data.discount * 100} %`}
					</td>
					<td class="w-15 px-6 py-4">
						{data.categoryName}
					</td>
					<td class="w-15 px-6 py-4">
						{data.brandName}
					</td>
					<td class="w-15 px-6 py-4">
						{data.quantity}
					</td>
					<td class="px-6 py-4">
						{moment(data.updatedAt).format('DD/MM/YYYY HH:mm:ss')}
					</td>
					<td class="px-6 py-4">{data.updatedBy}</td>
					<td class="px-6 py-4">
						<button
							on:click={() => goto('/admin/product/update/' + data.id)}
							type="button"
							class="mb-2 me-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
							>Sửa</button
						>
						<button
							type="button"
							class="mb-2 me-2 rounded-lg bg-red-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
							on:click={() => onDelete(Number(data.id))}>Xóa</button
						>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
