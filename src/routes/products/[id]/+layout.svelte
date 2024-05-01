<script>
	import Footer from '../../../components/Footer.svelte';
	import Header from '../../../components/Header.svelte';
	import Popular from '../../../components/Popular.svelte';
	import Slogan from '../../../components/Slogan.svelte';
	import QuestionAndAnswer from '../../../components/product/QuestionAndAnswer.svelte';
	import Rating from '../../../components/product/Rating.svelte';
	export let data;
</script>

<Header userInfo={data.userInfo} />
<div class="body-container">
	<slot />
	<Popular subCategories={data.subCatList} />
	<Rating product={data.product} jwt={data.jwt} />
	<QuestionAndAnswer product={data.product} jwt={data.jwt} />
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
</style>
