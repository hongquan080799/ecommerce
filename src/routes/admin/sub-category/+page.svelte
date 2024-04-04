<script lang="ts">
	import { goto } from '$app/navigation';
	import Category from '../../../components/Category.svelte';
	import * as api from '../../../api';
	import moment from 'moment';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	const parentId = $page.url.searchParams.get('parentId');

	let loadedData: Category[] = [];
	onMount(async () => {
		try {
			console.log('parentId' + parentId);
			const data = await api.categoryApi.loadCategoriesWithParentId(Number(parentId));
			loadedData = data as unknown as Category[];
			filterData = loadedData;
		} catch (error) {
			console.log(error);
		}
	});
	let search = '';
	const onSearch = () => {
		if (search.length > 0) {
			filterData = filterData.filter((item) =>
				item.name.toLowerCase().includes(search.toLowerCase())
			);
		} else {
			filterData = loadedData as Category[];
		}
	};
	const onDelete = async (id: number) => {
		const confirmed = confirm('bạn có muốn xóa danh mục này không ?');
		if (!confirmed) return;
		try {
			await api.categoryApi.deleteCategory(id);
			alert('Xóa danh mục thành công');
			loadedData = (await api.categoryApi.loadCategories()) as unknown as Category[];
			onSearch();
		} catch (error) {
			console.log(error);
			alert('Xóa danh mục thất bại');
		}
	};
	let filterData = loadedData as Category[];
</script>

<p class="text-lg font-bold">Danh mục</p>

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
			on:click={() => goto('/admin/sub-category/create?parentId=' + parentId)}
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
				<th scope="col" class="px-6 py-3">Mã danh mục</th>
				<th scope="col" class="px-6 py-3">Tên danh mục</th>
				<th scope="col" class="px-6 py-3">Logo</th>
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
						<img class="w-14" src={data.imageUrl} alt={data.name} />
					</td>
					<td class="px-6 py-4">
						{moment(data.updatedAt).format('DD/MM/YYYY HH:mm:ss')}
					</td>
					<td class="px-6 py-4">Quan</td>
					<td class="px-6 py-4">
						<button
							type="button"
							class="mb-2 me-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
							>Sửa</button
						>
						<button
							type="button"
							class="mb-2 me-2 rounded-lg bg-red-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
							on:click={() => onDelete(data.id)}>Xóa</button
						>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
