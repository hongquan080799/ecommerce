<script>
	// @ts-nocheck

	import Slogan from './../components/Slogan.svelte';
	import Category from '../components/Category.svelte';
	import FlashSale from '../components/FlashSale.svelte';
	import Header from '../components/Header.svelte';
	import Popular from '../components/Popular.svelte';
	import PopularBrand from '../components/PopularBrand.svelte';
	import ProductViewList from '../components/ProductViewList.svelte';
	import Slider from '../components/Slider.svelte';
	import Info from '../components/info.svelte';
	import Footer from '../components/Footer.svelte';
	// class="text-gray-700"
	/** @type {import('./$types').PageData} */
	export let data;
	let { productWithCatList, brands } = data.props;
</script>

<Header />
<div class="body-container">
	<div class="bg-white">
		<div class="banner-container">
			<div class="item1">
				<Category categories={productWithCatList} />
			</div>
			<div class="item2">
				<Info />
			</div>
			<div class="item3">
				<Slider />
			</div>
			<div class="item4">
				<div>
					<a href="/boneco.html" rel="nofollow"
						><img
							alt="✓"
							width="266"
							height="220"
							class="lazy-img lazy-loaded"
							src="https://st.meta.vn/Data/2024/Thang03/nhap-ma-giam-5-phantram-boneco.jpg"
							data-src="https://st.meta.vn/Data/2024/Thang03/nhap-ma-giam-5-phantram-boneco.jpg"
						/></a
					>
				</div>
				<div>
					<a href="/cay-nuoc-nong-lanh-c565?ref=home-right-caynuoc" rel="nofollow"
						><img
							alt="✓"
							width="266"
							height="220"
							class="lazy-img lazy-loaded"
							src="https://st.meta.vn/Data/2024/Thang02/cay-nuoc-nong-lanh-300x250.jpg"
							data-src="https://st.meta.vn/Data/2024/Thang02/cay-nuoc-nong-lanh-300x250.jpg"
						/></a
					>
				</div>
			</div>
			<div class="item5">
				<div>
					<a href="/quat-cay-quat-dung-c449?ref=home-hori-quat" rel="nofollow"
						><img
							alt="✓"
							width="320"
							height="90"
							class="lazy-img lazy-loaded"
							src="https://st.meta.vn/Data/2022/Thang02/quat-cay-a.jpg"
							data-src="https://st.meta.vn/Data/2022/Thang02/quat-cay-a.jpg"
						/></a
					>
				</div>
				<div>
					<a href="/may-xay-da-nang-c443?ref=home-hori-mayxay" rel="nofollow"
						><img
							alt="✓"
							width="320"
							height="90"
							class="lazy-img lazy-loaded"
							src="https://st.meta.vn/Data/2022/Thang11/may-xay-da-nang-330x90.jpg"
							data-src="https://st.meta.vn/Data/2022/Thang11/may-xay-da-nang-330x90.jpg"
						/></a
					>
				</div>
				<div>
					<a href="/may-rua-xe-gia-dinh-c865?ref=home-hori-mayruaxegd" rel="nofollow"
						><img
							alt="✓"
							width="320"
							height="90"
							class="lazy-img lazy-loaded"
							src="https://st.meta.vn/Data/2022/Thang07/Banner-may-rua-xe-gia-dinh-330x99.png"
							data-src="https://st.meta.vn/Data/2022/Thang07/Banner-may-rua-xe-gia-dinh-330x99.png"
						/></a
					>
				</div>
			</div>
		</div>
	</div>
	<Popular categories={productWithCatList} />
	<!-- <FlashSale /> -->
	<ProductViewList categories={productWithCatList} />
	<PopularBrand {brands} />
	<Slogan />
	<Footer />
</div>

<style>
	/* Global styles */
	:global(body) {
		margin: 0;
		padding: 0;
		background-color: rgb(235, 235, 235);
	}

	.body-container {
		background-color: #fff;
		max-width: 1236px;
		margin-inline: auto;
		display: flex;
		flex-direction: column;
		padding: 0 5px;
		background-color: rgb(235, 235, 235);
	}
	.banner-container {
		display: grid;
		grid-template-columns: 245px 720px 1fr;
		grid-template-rows: 25px 1fr 96px;
		gap: 0px;
	}
	.item1 {
		grid-row: 1 / 4;
	}
	.item2 {
		grid-column: 2 / 4;
	}
	/* .item4{
        
    } */
	.item4 div {
		width: 100%;
	}
	.item4 div img {
		width: 100%;
	}
	.item5 {
		grid-column: 2 / 4;
		grid-row: 3 / 3;
		display: flex;
	}
</style>
