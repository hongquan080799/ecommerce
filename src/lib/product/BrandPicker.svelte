<script lang="ts">
	import { onMount } from 'svelte';
	import { Button, Modal } from 'flowbite-svelte';
	import * as api from '../../api';
	import moment from 'moment';
	import type { Brand } from '../../types/Brand';
	export let handleSubmit: (brand: Brand | undefined) => void;
	let formModal = false;
	let brands: Brand[] = [];
	let filterData: Brand[] = [];
	let search = '';
	let seletedBrand: Brand | undefined;
	export let seletedBrandId: number | undefined = undefined;
	onMount(() => {
		if (seletedBrandId) {
			api.brandApi.loadBrandsWithId(seletedBrandId).then((res) => {
				seletedBrand = res;
			});
		}
	});

	const onSearch = () => {
		if (search.length > 0) {
			filterData = filterData.filter((item) =>
				item.name.toLowerCase().includes(search.toLowerCase())
			);
		} else {
			filterData = brands;
		}
	};
	onMount(async () => {
		const result = await api.brandApi.loadBrands();
		filterData = result;
	});
	const onSelect = async (brand: Brand) => {
		seletedBrand = brand;
	};
	const onSubmit = () => {
		handleSubmit(seletedBrand);
		formModal = false;
	};
</script>

<Button color={'blue'} on:click={() => (formModal = true)}>Chọn</Button>

<Modal title="Nhãn hàng" bind:open={formModal} size="xl" autoclose={false} class="min-h-96 w-full">
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
		</div>
		<table class="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
			<thead class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
				<tr>
					<th scope="col" class="px-6 py-3">Mã nhãn hàng</th>
					<th scope="col" class="px-6 py-3">Tên nhãn hàng</th>
					<th scope="col" class="px-6 py-3">Logo</th>
					<th scope="col" class="px-6 py-3">Time</th>
					<th scope="col" class="px-6 py-3">Updated by</th>
				</tr>
			</thead>
			<tbody>
				{#each filterData as data}
					<tr
						class="{seletedBrand && seletedBrand.id === data.id
							? 'bg-blue-200'
							: 'bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600'} cursor-pointer border-b"
						on:click={() => onSelect(data)}
					>
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
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
	<svelte:fragment slot="footer">
		{#if seletedBrand}
			<Button color="blue" on:click={onSubmit}>Save</Button>
		{/if}
	</svelte:fragment>
</Modal>
