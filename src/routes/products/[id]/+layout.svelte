<script>
	import Footer from '../../../components/Footer.svelte';
	import Header from '../../../components/Header.svelte';
	import Popular from '../../../components/Popular.svelte';
	import Slogan from '../../../components/Slogan.svelte';
</script>

<Header />
<div class="body-container">
	<slot />
	<Popular />
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
