<script>
	import { Rating } from 'flowbite-svelte';
	import ProductInfoSlider from '../../../components/ProductInfoSlider.svelte';
	import Header from '../../../components/Header.svelte';
</script>

<div>
	<Header />
	<ol class="breadcum">
		<li>
			<svg
				class="h-4 w-4 text-gray-500"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				fill="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					fill-rule="evenodd"
					d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"
					clip-rule="evenodd"
				/>
			</svg>
		</li>
		<li>
			<svg
				class="h-4 w-4 text-gray-500"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				fill="none"
				viewBox="0 0 24 24"
			>
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="m9 5 7 7-7 7"
				/>
			</svg>
		</li>
		<li><p class="text-sm">Tủ lạnh</p></li>
		<li>
			<svg
				class="h-4 w-4 text-gray-500"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				fill="none"
				viewBox="0 0 24 24"
			>
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="m9 5 7 7-7 7"
				/>
			</svg>
		</li>
		<li><p class="text-sm">Tủ lạnh 4 cánh</p></li>
	</ol>
</div>
<div class="product-layout">
	<div class="image-slider">
		<ProductInfoSlider />
	</div>
	<div>
		<div class="header">
			<p class="mb-6 text-lg font-bold">Tủ lạnh 4 cánh Electrolux EQE6909A-BVN (622 lít)</p>
			<Rating id="example-1" total={5} size={20} rating={4} />
			<p class="text-sm">Thương hiệu : <span class="text-sm text-blue-700">Casper</span></p>
		</div>
		<div class="price">
			<div class="price-block">
				<p class="text-xl text-white">30.000.000 đ</p>
				<p class="text-md text-white">15% <span class="italic line-through">32.000.000 đ</span></p>
			</div>
			<div class="flash-sale">
				<p class="text-md text-white">Kết thúc sau 27 phút</p>
				<p class="text-md text-white">Còn <span class="italic">4</span> chiếc</p>
			</div>
		</div>
		<div class="status">
			<div class="my-2 flex items-center">
				<p class="mr-5 text-sm">Trạng thái:</p>
				<p class="text-sm">Còn hàng</p>
			</div>
			<div class="my-2 flex items-center">
				<p class="mr-5 text-sm">Chọn số lượng:</p>
				<div class="flex h-8 items-center text-sm">
					<button
						class=" m-0 h-full w-8 border border-gray-400 font-bold text-gray-400 shadow outline-none hover:shadow-lg"
					>
						-
					</button>
					<input type="number" class="m-0 h-full w-16 border-gray-400" />
					<button
						class="m-0 h-full w-8 border border-gray-400 font-bold text-gray-400 shadow outline-none hover:shadow-lg"
					>
						+
					</button>
				</div>
			</div>
			<div class="my-2 flex items-center">
				<p class="mr-5 text-sm">Cho vào giỏ:</p>
				<svg
					class="e h-6 w-6 text-blue-500"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					fill="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						fill-rule="evenodd"
						d="M4 4a1 1 0 0 1 1-1h1.5a1 1 0 0 1 .979.796L7.939 6H19a1 1 0 0 1 .979 1.204l-1.25 6a1 1 0 0 1-.979.796H9.605l.208 1H17a3 3 0 1 1-2.83 2h-2.34a3 3 0 1 1-4.009-1.76L5.686 5H5a1 1 0 0 1-1-1Z"
						clip-rule="evenodd"
					/>
				</svg>
			</div>
		</div>
		<div class="functional-btn my-2 flex text-white">
			<button class="mr-2 flex w-1/2 items-center justify-between bg-red-600 py-2">
				<span>
					<svg
						class="h-8 w-8 text-white"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						fill="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							fill-rule="evenodd"
							d="M5 3a1 1 0 0 0 0 2h.687L7.82 15.24A3 3 0 1 0 11.83 17h2.34A3 3 0 1 0 17 15H9.813l-.208-1h8.145a1 1 0 0 0 .979-.796l1.25-6A1 1 0 0 0 19 6h-2.268A2 2 0 0 1 15 9a2 2 0 1 1-4 0 2 2 0 0 1-1.732-3h-1.33L7.48 3.796A1 1 0 0 0 6.5 3H5Z"
							clip-rule="evenodd"
						/>
						<path
							fill-rule="evenodd"
							d="M14 5a1 1 0 1 0-2 0v1h-1a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0V8h1a1 1 0 1 0 0-2h-1V5Z"
							clip-rule="evenodd"
						/>
					</svg>
				</span>
				<div class="flex flex-1 flex-col items-center">
					<p class="text-lg font-bold">Đặt mua</p>
					<p class="text-sm">Giao hàng trên toàn quốc</p>
				</div>
			</button>
			<button class="flex w-1/2 items-center justify-between bg-green-700 py-2">
				<svg
					class="h-8 w-8 text-white"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					fill="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						fill-rule="evenodd"
						d="M11 4a1 1 0 0 0-1 1v10h10.459l.522-3H16a1 1 0 1 1 0-2h5.33l.174-1H16a1 1 0 1 1 0-2h5.852l.117-.67v-.003A1.983 1.983 0 0 0 20.06 4H11ZM9 18c0-.35.06-.687.17-1h11.66c.11.313.17.65.17 1v1a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1v-1Zm-6.991-7a17.8 17.8 0 0 0 .953 6.1c.198.54 1.61.9 2.237.9h1.34c.17 0 .339-.032.495-.095a1.24 1.24 0 0 0 .41-.27c.114-.114.2-.25.254-.396a1.01 1.01 0 0 0 .055-.456l-.242-2.185a1.073 1.073 0 0 0-.395-.71 1.292 1.292 0 0 0-.819-.286H5.291c-.12-.863-.17-1.732-.145-2.602-.024-.87.024-1.74.145-2.602H6.54c.302 0 .594-.102.818-.286a1.07 1.07 0 0 0 .396-.71l.24-2.185a1.01 1.01 0 0 0-.054-.456 1.088 1.088 0 0 0-.254-.397 1.223 1.223 0 0 0-.41-.269A1.328 1.328 0 0 0 6.78 4H4.307c-.3-.001-.592.082-.838.238a1.335 1.335 0 0 0-.531.634A17.127 17.127 0 0 0 2.008 11Z"
						clip-rule="evenodd"
					/>
				</svg>
				<div class="flex flex-1 flex-col items-center">
					<p class="text-lg font-bold">Tư vấn</p>
					<p class="text-sm">Chúng tôi sẽ tư vấn cho bạn</p>
				</div>
			</button>
		</div>
	</div>
	<div class="Service-freeship">
		<div class="tip-wrap-pc">
			<div class="tip-row">
				<div class="icon-tip">
					<img
						class="lazy-img lazy-loaded"
						alt=""
						src="https://meta.vn/images/free-ship.svg"
						data-src="images/free-ship.svg"
					/>
				</div>
				<div class="txt-tip">
					Miễn phí giao hàng trong nội thành Hà Nội và nội thành TP. Hồ Chí Minh. <a
						class="setup-view"
						target="_blank"
						href="/danh-sach-khu-vuc-mien-phi-van-chuyen"
						rel="nofollow">(Xem thêm)<i class="fa fa-angle-right"></i></a
					>
				</div>
			</div>

			<div class="tip-row">
				<div class="icon-tip">
					<img
						class="lazy-img lazy-loaded"
						alt=""
						src="https://st.meta.vn/img/thumb.ashx/Data/image/2024/03/14/icon-chinhhang.png"
						data-src="https://st.meta.vn/img/thumb.ashx/Data/image/2024/03/14/icon-chinhhang.png"
					/>
				</div>
				<div class="txt-tip"><p>Hàng Chính Hãng</p></div>
			</div>

			<div class="tip-row">
				<div class="icon-tip">
					<img
						class="lazy-img lazy-loaded"
						alt=""
						src="https://st.meta.vn/img/thumb.ashx/Data/image/2024/03/15/icon-baohanh-c.png"
						data-src="https://st.meta.vn/img/thumb.ashx/Data/image/2024/03/15/icon-baohanh-c.png"
					/>
				</div>
				<div class="txt-tip">
					<p>Bảo hành <strong>chính hãng</strong>, có người đến tận nhà.</p>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.header {
		border-bottom: #c0bfbf 1px solid;
		margin-bottom: 1rem;
	}
	.breadcum {
		display: flex;
		background-color: #eeeeee;
		align-items: center;
		padding: 0.3rem 0.4rem;
	}
	ol li {
		margin: 0 0.2rem;
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
		grid-template-columns: 0.5fr 1fr;
		column-gap: 3rem;
		max-width: 1236px;
		margin: 0 auto;
		background-color: #fff;
		padding: 1rem 1rem 2rem 1rem;
	}
	.product-layout div:last-child {
		grid-column-start: 2;
	}
	:global(body) {
		margin: 0;
		padding: 0;
		background-color: rgb(235, 235, 235);
	}
	.image-slider {
		padding: 0 2rem;
	}
</style>
