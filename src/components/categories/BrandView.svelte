<div class="container">
	{#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 23, 43] as ite}
		<div class="brand">
			<img
				src="https://st.meta.vn/img/thumb.ashx/120x0x95/Data/image/2021/03/26/logo-casper-to.png"
				alt="brand"
			/>
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
		width: 100%;
	}
</style>
