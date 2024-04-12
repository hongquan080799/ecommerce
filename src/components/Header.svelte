<nav class="navbar">
	<div class="box-header">
		<div class="box-top-menu">
			<div class="hamburger-menu">
				<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 15 15"
					><path
						fill="currentColor"
						fill-rule="evenodd"
						d="M1.5 3a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1zM1 7.5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5"
						clip-rule="evenodd"
					/></svg
				>
			</div>
			<div class="logo">
				<p class="text-3xl font-bold text-white">MITA</p>
			</div>
			<div class="cart-and-account">
				<div class="item">
					<svg
						class="h-6 w-6 text-white"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						fill="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							fill-rule="evenodd"
							d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
							clip-rule="evenodd"
						/>
					</svg>
					<p>Đăng nhập</p>
				</div>
				<div class="item">
					<svg
						class="h-6 w-6 text-white"
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
					<p>Hotline</p>
				</div>
				<div class="item">
					<svg
						class="h-6 w-6 text-white"
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
					<p>Giỏ hàng</p>
				</div>
			</div>
		</div>
		<div class="box-search-container">
			<div class="box-search">
				<svg
					class="h-5 w-5 text-gray-500 dark:text-white"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					width="15"
					height="15"
					fill="none"
					viewBox="0 0 24 24"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-width="2"
						d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
					/>
				</svg>
				<input placeholder="Bạn cần mua sản phầm gì?" />
				<button>Tìm kiếm</button>
			</div>
		</div>
	</div>
</nav>

<style>
	.box-search-container {
		position: absolute;
		width: 100%;
		left: var(--hamburger-menuWidth);
		margin-left: 100px;
		max-width: 500px;
	}
	.box-search {
		display: flex;
		background-color: #fff;
		padding-left: 5px;
		align-items: center;
		height: 30px;
		color: #000000;
		width: 100%;
		justify-content: space-between;
	}
	.box-search button {
		background-color: #505050;
		color: #fff;
		height: 100%;
		padding: 0 10px;
	}
	.box-search button:hover {
		background-color: #969696;
		transition: all 0.3s;
	}
	.box-search input {
		height: 100%;
		border: none;
		outline: none;
		flex: 1;
		margin-left: 3px;
		color: #333333;
	}
	.navbar {
		background-color: #fd6332;
		color: #fff;
		padding: 10px 20px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.box-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		max-width: 1000px;
	}
	.hamburger-menu {
		display: none;
	}
	.box-top-menu {
		display: flex;
		align-items: center;
		width: 100%;
		justify-content: space-between;
	}
	.cart-and-account {
		display: flex;
		justify-content: space-between;
		width: 33%;
	}
	.item {
		display: flex;
	}

	@media screen and (max-width: 900px) {
		.hamburger-menu {
			display: block;
		}
		.item p {
			display: none;
		}
		.cart-and-account {
			width: 20%;
		}
		.box-search-container {
			left: 0;
			transform: translateY(100%);
			background-color: #fd6332;
			height: 45px;
			padding: 0 5px;
			width: 100%;
			margin-left: 0;
			max-width: 100%;
		}
		.navbar {
			margin-bottom: 45px;
		}
	}
</style>
