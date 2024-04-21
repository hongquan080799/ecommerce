<script lang="ts">
	import { Dropdown, DropdownItem, Popover } from 'flowbite-svelte';
	import type { PopularProductWithCat, SubCategory } from '../types/Product';

	export let categories: PopularProductWithCat[] = [];
</script>

<div class="category-container">
	<div class="header">
		<svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.5em" viewBox="0 0 15 15"
			><path
				fill="currentColor"
				fill-rule="evenodd"
				d="M1.5 3a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1zM1 7.5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5"
				clip-rule="evenodd"
			/></svg
		>
		<p class="ml-2 text-gray-700">Danh mục sản phẩm</p>
	</div>
	<ul class="list">
		{#each categories as cat}
			<li class="flex h-9 items-center" id={`${cat.id}`}>
				<img src={cat.imageUrl} alt={cat.name} class="h-full" />
				<p>{cat.name}</p>
			</li>
			<Dropdown placement="right-start">
				{#each cat.subCategories as sub}
					<a href={`categories/${sub.id}`}>
						<li class="flex h-9 w-fit min-w-48 items-center px-6">
							<img src={sub.imageUrl} alt={sub.name} class="h-full" />
							<p>{sub.name}</p>
						</li>
					</a>
				{/each}
			</Dropdown>
		{/each}
	</ul>
</div>

<style>
	.category-container {
		font-size: 0.9rem;
	}
	.category-container svg {
		color: #da251c;
	}
	.header {
		display: flex;
		border-bottom: 1px solid #d4d4d4;
	}
	.list {
		color: #707070;
		font-size: 0.8rem;
		/* overflow-y: scroll; */
		-webkit-overflow-scrolling: touch;
		max-height: 100%;
	}
	.list li {
		padding: 0.2rem 0 0.2rem 0.4rem;
		border-bottom: 1px solid #f1f1f1;
	}
	.list li p {
		padding-left: 0.6rem;
	}
	.list li:hover {
		background-color: #fd6332;
		cursor: pointer;
		color: white;
	}
</style>
