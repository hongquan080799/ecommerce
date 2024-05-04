<script lang="ts">
	import { Carousel, Indicator, Rating, Button, Thumbnails, Badge } from 'flowbite-svelte';
	import type { Product } from '../../../types/Product';
	import TechnicalInfo from '../../../components/product/TechnicalInfo.svelte';
	import { formattedPrice } from '../../../utils/Format';
	import ProductInfo from '../../../components/product/ProductInfo.svelte';
	const productName = 'Sản phẩm tương tự';
	export let data;
	let product: Product = JSON.parse(JSON.stringify(data)) as Product;
	let images = product.images
		? product.images.map((image) => {
				return {
					alt: image,
					src: image,
					title: image
				};
			})
		: [];
	let index = 0;
	let forward = true;
	let orderNumber = 1;
</script>

<div class="container">
	<div class="header">
		<p class="mb-6 text-2xl font-bold">{product.name}</p>
		<Rating id="example-1" total={5} size={20} rating={4} />
		<p class="text-sm">
			Nhãn hàng : <span class="text-sm text-blue-700">{product.brandName}</span>
		</p>
	</div>
	<div class="product-layout">
		<div class="product-section">
			<div class="image-slider">
				<div class="max-w-4xl space-y-4">
					<Carousel {images} {forward} let:Indicators let:Controls bind:index>
						<Controls />
						<Indicators />
					</Carousel>
				</div>
				<div class="thumbnails-container">
					<Thumbnails
						class="flex-wrap justify-start gap-3 bg-transparent"
						let:Thumbnail
						let:image
						let:selected
						{images}
						bind:index
					>
						<Thumbnail
							{...image}
							{selected}
							class="w-20 outline outline-green-300"
							activeClass="outline outline-green-400"
						/>
					</Thumbnails>
				</div>
			</div>
		</div>
		<div class="product-section flex flex-col">
			<div class="mt-5 flex flex-col">
				<p class="mr-5 text-3xl font-medium text-red-600">
					{formattedPrice(product.price - product.price * product.discount)}
					<span class="text-lg font-medium text-gray-500"> / Cái </span>
				</p>
				<p class="text-md">
					<span class="italic line-through">{formattedPrice(product.price)}</span>
				</p>
			</div>
			<div class="status">
				<div class="my-2 flex items-center">
					<p class="text-md mr-5">Trạng thái:</p>
					<Badge color="green">Còn hàng</Badge>
				</div>
				<div class="my-2 flex items-center">
					<p class="text-md mr-5">Kho:</p>
					<p class="text-md">{product.quantity}</p>
				</div>
			</div>
			<div class="hotline-box">
				<span class="text-sm">Tư vấn miễn phí, vui lòng gọi hotline</span>
				<a href="tel:096 8833 253">
					<p class="flex items-center justify-center text-lg">
						<svg
							class="h-6 w-6"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z"
							/>
						</svg>
						096 8833 253
					</p></a
				>
			</div>
			<div class="support-ask-title" style="margin-top: 10px;"><p>Chat với META</p></div>
			<div class=" flex">
				<div class="support-ask-item">
					<span class="support-ask-icon"
						><a href="/#" target="_blank" title="Chat Facebook" rel="noreferrer nofollow">
							<img
								class="lazy-img lazy-loaded"
								alt="✓"
								src="https://meta.vn/images/messenger-icon.png"
								data-src="images/messenger-icon.png"
							/></a
						></span
					>
					<span class="support-ask-name"
						><a href="/#" target="_blank" title="Chat Facebook" rel="noreferrer nofollow"
							><p>Chat facebook</p></a
						></span
					>
				</div>
				<div class="support-ask-item">
					<span class="support-ask-icon"
						><a
							href="/#"
							class="zalo-chat"
							target="_blank"
							title="Chat Zalo với META"
							rel="noreferrer nofollow"
						>
							<img
								class="lazy-img lazy-loaded"
								alt="✓"
								src="https://meta.vn/images/zalo-icon.png"
								data-src="images/zalo-icon.png"
							/></a
						></span
					>
					<span class="support-ask-name"
						><a
							href="/#"
							class="zalo-chat"
							target="_blank"
							title="Chat Zalo với META"
							rel="noreferrer nofollow">Chat Zalo</a
						></span
					>
				</div>
			</div>
			<div class=" flex flex-1 items-end justify-end">
				<div class="flex h-10 w-full items-center overflow-hidden rounded-sm text-sm">
					<input
						type="number"
						class="m-0 h-full w-16 border-gray-400"
						bind:value={orderNumber}
						min={1}
						max={product.quantity}
					/>
					<button class="m-0 h-full w-full bg-red-500 text-white"> Thêm vào giỏ </button>
				</div>
			</div>
		</div>
	</div>

	<!-- <ProductViewNonCategory titleProduct={productName} popularProducts={productList} /> -->
	{#if product.technicalInfo}
		<TechnicalInfo infos={JSON.parse(product.technicalInfo)} />
	{/if}
	{#if product.productInfo}
		<ProductInfo productInfo={product.productInfo} />
	{/if}
</div>

<style>
	.header {
		margin-top: 1rem;
		border-bottom: #c0bfbf 1px solid;
		margin-bottom: 1rem;
	}

	.price {
		background-color: #da251c;
		display: flex;
		justify-content: space-between;
		padding: 1rem 2rem;
		border-radius: 5px;
	}
	.Service-freeship {
		padding: 0 5px;
		background-color: #fff;
	}
	.tip-wrap-pc {
		border: 1px solid #ddd;
		border-radius: 3px;
		padding: 5px;
	}
	.tip-row {
		display: flex;
		align-items: center;
	}

	.tip-row .icon-tip {
		width: 28px;
		height: 28px;
		display: inline-block;
	}
	.tip-row .icon-tip img {
		width: 100%;
		height: 100%;
		object-fit: scale-down;
	}
	.product-layout {
		display: grid;
		grid-template-columns: 1fr 0.4fr;
		gap: 1rem;
	}

	.care-detail {
		grid-row-start: 1;
		grid-column-start: 3;
		margin-top: 5.5rem;
	}
	:global(body) {
		margin: 0;
		padding: 0;
		background-color: rgb(235, 235, 235);
	}
	.image-slider {
		display: grid;
		grid-template-columns: 3fr 1fr;
		gap: 2rem;
	}
	.detail-right-box {
		background-color: #fff;
		margin-bottom: 10px;
	}
	.detail-right-box-title {
		padding: 10px 10px 0 10px;
		font-size: 18px;
		font-weight: 500;
	}
	.care-detail-box {
		padding: 10px;
	}
	.care-detail-item {
		margin: 10px;
	}
	.care-detail-item a {
		display: flex;
		align-items: center;
	}

	a {
		text-decoration: none;
		color: #333;
		cursor: pointer;
	}
	img {
		overflow-clip-margin: content-box;
		overflow: clip;
	}
	.thanh-toan-care img,
	.bao-hanh-care img,
	.van-chuyen-care img {
		-moz-filter: grayscale(100%);
		-webkit-filter: grayscale(100%);
		filter: grayscale(100%);
		width: 12px;
	}
	.support-ask-item {
		display: inline-block;
		margin-right: 1rem;
	}
	.support-ask-icon img {
		width: 20px;
		height: 20px;
	}
	.support-ask-item a {
		display: inline-block;
		font-size: 1rem;
	}
	.support-ask-name {
		vertical-align: 5px;
	}
	@media screen and (max-width: 528px) {
		.order-text {
			display: none;
		}
	}
	@media screen and (max-width: 642px) {
		.image-slider {
			display: flex;
			flex-direction: column;
		}
		.product-layout {
			display: grid;
			grid-template-columns: 1fr;
			gap: 1rem;
		}
	}
	@media screen and (max-width: 1000px) {
		.image-slider {
			display: flex;
			flex-direction: column;
		}
		.product-layout {
			display: grid;
			grid-template-columns: 1fr;
			gap: 1rem;
		}
	}
	.product-section {
		background-color: #fff;
		padding: 1rem 1rem;
	}
	.hotline-box a {
		color: #f27349;
	}
	.hotline-box {
		-webkit-text-size-adjust: 100%;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		--flatsome-scroll-padding-top: calc(
			var(--flatsome--header--sticky-height, 0px) + var(--wp-admin--admin-bar--height, 0px)
		);
		--primary-color: #292c2e;
		--flatsome--header--sticky-height: 70px;
		-webkit-font-smoothing: antialiased;
		line-height: 1.5;
		font-size: 100%;
		font-family: Roboto, sans-serif;
		font-weight: 400;
		font-style: normal;
		--wp--preset--color--black: #000000;
		--wp--preset--color--cyan-bluish-gray: #abb8c3;
		--wp--preset--color--white: #ffffff;
		--wp--preset--color--pale-pink: #f78da7;
		--wp--preset--color--vivid-red: #cf2e2e;
		--wp--preset--color--luminous-vivid-orange: #ff6900;
		--wp--preset--color--luminous-vivid-amber: #fcb900;
		--wp--preset--color--light-green-cyan: #7bdcb5;
		--wp--preset--color--vivid-green-cyan: #00d084;
		--wp--preset--color--pale-cyan-blue: #8ed1fc;
		--wp--preset--color--vivid-cyan-blue: #0693e3;
		--wp--preset--color--vivid-purple: #9b51e0;
		--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(
			135deg,
			rgba(6, 147, 227, 1) 0%,
			rgb(155, 81, 224) 100%
		);
		--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(
			135deg,
			rgb(122, 220, 180) 0%,
			rgb(0, 208, 130) 100%
		);
		--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(
			135deg,
			rgba(252, 185, 0, 1) 0%,
			rgba(255, 105, 0, 1) 100%
		);
		--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(
			135deg,
			rgba(255, 105, 0, 1) 0%,
			rgb(207, 46, 46) 100%
		);
		--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(
			135deg,
			rgb(238, 238, 238) 0%,
			rgb(169, 184, 195) 100%
		);
		--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(
			135deg,
			rgb(74, 234, 220) 0%,
			rgb(151, 120, 209) 20%,
			rgb(207, 42, 186) 40%,
			rgb(238, 44, 130) 60%,
			rgb(251, 105, 98) 80%,
			rgb(254, 248, 76) 100%
		);
		--wp--preset--gradient--blush-light-purple: linear-gradient(
			135deg,
			rgb(255, 206, 236) 0%,
			rgb(152, 150, 240) 100%
		);
		--wp--preset--gradient--blush-bordeaux: linear-gradient(
			135deg,
			rgb(254, 205, 165) 0%,
			rgb(254, 45, 45) 50%,
			rgb(107, 0, 62) 100%
		);
		--wp--preset--gradient--luminous-dusk: linear-gradient(
			135deg,
			rgb(255, 203, 112) 0%,
			rgb(199, 81, 192) 50%,
			rgb(65, 88, 208) 100%
		);
		--wp--preset--gradient--pale-ocean: linear-gradient(
			135deg,
			rgb(255, 245, 203) 0%,
			rgb(182, 227, 212) 50%,
			rgb(51, 167, 181) 100%
		);
		--wp--preset--gradient--electric-grass: linear-gradient(
			135deg,
			rgb(202, 248, 128) 0%,
			rgb(113, 206, 126) 100%
		);
		--wp--preset--gradient--midnight: linear-gradient(
			135deg,
			rgb(2, 3, 129) 0%,
			rgb(40, 116, 252) 100%
		);
		--wp--preset--font-size--small: 13px;
		--wp--preset--font-size--medium: 20px;
		--wp--preset--font-size--large: 36px;
		--wp--preset--font-size--x-large: 42px;
		--wp--preset--spacing--20: 0.44rem;
		--wp--preset--spacing--30: 0.67rem;
		--wp--preset--spacing--40: 1rem;
		--wp--preset--spacing--50: 1.5rem;
		--wp--preset--spacing--60: 2.25rem;
		--wp--preset--spacing--70: 3.38rem;
		--wp--preset--spacing--80: 5.06rem;
		--wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);
		--wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);
		--wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);
		--wp--preset--shadow--outlined: 6px 6px 0px -3px rgba(255, 255, 255, 1),
			6px 6px rgba(0, 0, 0, 1);
		--wp--preset--shadow--crisp: 6px 6px 0px rgba(0, 0, 0, 1);
		box-sizing: border-box;
		text-align: center;
		padding: 15px 10px;
		border-radius: 8px;
		border: 1px solid #ccc;
		background: #081021;
		color: #fff;
		margin-bottom: 15px;
		margin-top: 10px;
	}
</style>
