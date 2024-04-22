<script lang="ts">
	import type { Brand } from '../../types/Brand';

	export let data: Brand[] = [];
</script>

<div class="container">
	{#each data as item}
		<div class="brand">
			<img src={item.imageUrl} alt={item.name} />
		</div>
	{/each}
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: repeat(10, 1fr);
		gap: 0.1rem;
	}
	.brand {
		width: 5.5rem;
		height: 2.5rem;
		border: 1px solid #dddddd;
		padding: 0.5rem 0.5rem;
		cursor: pointer;
	}
	.brand:hover {
		transform: scale(1.05);
		transition: 0.5s all;
	}
	.brand img {
		height: 100%;
	}
</style>
