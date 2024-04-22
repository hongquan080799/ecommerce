<div class="box-search-container">
	<div class="box-search">
		<input />
		<button
			><svg
				class="h-5 w-5 text-white dark:text-white"
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
			</svg></button
		>
	</div>
</div>

<style>
	.box-search-container {
		width: 100%;
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
		border: solid 1px #dbdbdb;
	}
	.box-search button {
		background-color: #298200;
		color: #fff;
		height: 100%;
		padding: 0 10px;
	}
	.box-search button:hover {
		background-color: #309900;
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
</style>
