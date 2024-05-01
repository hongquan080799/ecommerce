<script lang="ts">
	import { Button } from 'flowbite-svelte';
	export let data: any[] = [];
</script>

<div class="container">
	{#each data as item}
		<Button
			class="category mr-4 p-0"
			color="none"
			on:click={() => (window.location.href = '/category/' + item.id)}
		>
			<img class="image" src={item.image_url} alt={item.name} />
			<p class="text-md">{item.name}</p>
		</Button>
	{/each}
</div>

<style>
	.container {
		background-color: #fff;
		height: 7rem;
		display: flex;
	}
	.category {
		padding: 1rem 1rem;
		cursor: pointer;
		margin: 0 0.5rem 1rem 0.5rem;
	}
	.category:hover {
		transform: scale(1.05);
		transition: 0.5s all;
	}
	.image {
		width: 3rem;
	}
</style>
