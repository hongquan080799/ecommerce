<script lang="ts">
	import { Drawer, CloseButton } from 'flowbite-svelte';
	import type { PopularProductWithCat } from '../types/Product';
	import { sineIn } from 'svelte/easing';
	import { hidden } from '$lib/Store';

	export let categories: PopularProductWithCat[] = [];
	let hiddenSub = true;
	let transitionParams = {
		x: -320,
		duration: 200,
		easing: sineIn
	};
	let subList: any[] = [];
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
	<div class="drawer-container">
		<Drawer transitionType="fly" {transitionParams} bind:hidden={$hidden} id="sidebar">
			<div class="flex items-center">
				<h5
					id="drawer-label"
					class="mb-6 inline-flex items-center text-base font-semibold uppercase text-gray-500 dark:text-gray-400"
				>
					Danh mục
				</h5>
				<CloseButton on:click={() => ($hidden = true)} class="mb-4 dark:text-white" />
			</div>
			<ul class="flex flex-col justify-center text-gray-600">
				{#each categories as cat}
					<li
						class="my-1 flex h-9 items-center"
						id={`${cat.id}`}
						on:click={() => {
							subList = cat.subCategories;
							hiddenSub = false;
						}}
					>
						<img src={cat.imageUrl} alt={cat.name} class="mr-2 h-full" />
						<p>{cat.name}</p>
					</li>
				{/each}
			</ul>
		</Drawer>
		<Drawer transitionType="fly" {transitionParams} bind:hidden={hiddenSub} id="sidebarSub">
			<div class="flex items-center">
				<h5
					id="drawer-label"
					class="mb-6 inline-flex items-center text-base font-semibold uppercase text-gray-500 dark:text-gray-400"
				>
					Danh mục
				</h5>
				<CloseButton
					on:click={() => {
						hiddenSub = true;
						$hidden = false;
					}}
					class="mb-4 dark:text-white"
				/>
			</div>
			<ul class="flex flex-col justify-center text-gray-600">
				{#each subList as cat}
					<li class="my-1 flex h-9 items-center" id={`${cat.id}`}>
						<img src={cat.imageUrl} alt={cat.name} class="mr-2 h-full" />
						<p>{cat.name}</p>
					</li>
				{/each}
			</ul>
		</Drawer>
	</div>
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
	@media screen and (max-width: 900px) {
		.list {
			display: none;
		}
	}
</style>
