<script lang="ts">
	import type { Brand } from '../types/Brand';

	export let brands: Brand[] = [];
</script>

<div class="container">
	<div><p class="text-sm font-bold">NHÃN HÀNG NỔI BẬT</p></div>
	<div class="brand-container">
		{#each brands as brand}
			<div class="brand-block">
				<a href="#" class="brand-thumb" title="Bosch">
					<img class="lazy-img lazy-loaded" width="80" height="36" src={brand.imageUrl} alt="✓" />
				</a>
				<!-- <a href="/bosch.html" class="brand-thumb" title="Bosch">
                    <img class="lazy-img lazy-loaded" width="80" height="36" src="https://st.meta.vn/img/thumb.ashx/Data/image/2021/03/18/logo-bosch-nho.png" data-src="https://st.meta.vn/img/thumb.ashx/Data/image/2021/03/18/logo-bosch-nho.png" alt="✓">
                </a> -->
			</div>
		{/each}
	</div>
</div>

<style>
	.container {
		background-color: #fff;
		padding: 0.3rem 0.4rem;
		padding-bottom: 0.6rem;
	}
	.brand-container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		overflow: auto;
		padding: 0.3rem 1rem;
		overflow-y: hidden;
		-webkit-overflow-scrolling: touch;
	}
	.brand-block {
		width: 100px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 10px 15px;
	}
	.brand-thumb {
		line-height: 50px;
		margin: 0.5rem 0;
		display: inline-block;
		vertical-align: middle;
	}
	.brand-thumb img {
		max-width: 80px;
		vertical-align: middle;
	}
</style>
