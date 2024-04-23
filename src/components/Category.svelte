<script lang="ts">
	import { Dropdown, DropdownItem, Popover } from 'flowbite-svelte';
	import type { PopularProductWithCat, SubCategory } from '../types/Product';

	export let categories: PopularProductWithCat[] = [];
</script>

<div class="category-container">
	<ul class="list">
		{#each categories as cat}
			<li class="flex h-9 items-center" id={`${cat.id}`}>
				<img src={cat.imageUrl} alt={cat.name} class="h-full" />
				<p>{cat.name}</p>
				<ul class="sub-cat">
					{#each cat.subCategories as sub}
						<a href={`category/${sub.id}`}>
							<li class="flex h-9 w-fit min-w-48 items-center px-6">
								<img src={sub.imageUrl} alt={sub.name} class="h-full" />
								<p>{sub.name}</p>
							</li>
						</a>
					{/each}
				</ul>
			</li>
		{/each}
	</ul>
</div>

<style>
	.category-container {
		font-size: 0.9rem;
		background-color: #fff;
	}
	.header {
		display: flex;
		border-bottom: 1px solid #d4d4d4;
	}
	.list {
		color: #707070;
		font-size: 0.8rem;
		/* overflow-y: scroll; */
		/* -webkit-overflow-scrolling: touch;
		max-height: 100%; */
		display: flex;
		/* overflow-x: auto; */
	}
	.list li {
		padding: 0.2rem 0 0.2rem 0.4rem;
		border-bottom: 1px solid #f1f1f1;
		min-width: 10rem;
		border-right: 1px solid #e7e7e7;
		position: relative;
	}
	.list li p {
		padding-left: 0.6rem;
	}
	.list li:hover {
		background-color: #298200;
		cursor: pointer;
		color: white;
	}
	.sub-cat {
		display: none;
		position: absolute;
		z-index: 100;
		left: 0;
		top: 0;
		transform: translate(1rem, 2.1rem);
		background-color: white;
		color: #707070;
	}
	.list li:hover .sub-cat {
		display: block;
	}
</style>
