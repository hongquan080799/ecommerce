<script>
	import Popular from '../../components/Popular.svelte';
	import Slogan from '../../components/Slogan.svelte';
	import Header from '../../components/Header.svelte';
	import Footer from '../../components/Footer.svelte';
	export let data;
</script>

<Header userInfo={data.userInfo} />
<div class="body-container">
	<div class="container">
		<slot />
	</div>
	<Popular subCategories={data.subCatList} />
	<Slogan />
	<Footer />
</div>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		background-color: rgb(235, 235, 235);
	}
	.body-container {
		background-color: rgb(235, 235, 235);
		max-width: 1236px;
		margin: 0 auto;
	}
	.container {
		padding-top: 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #fff;
		padding-bottom: 20rem;
	}
</style>
