<script>
	// @ts-nocheck

	import { Carousel } from 'flowbite-svelte';
	import { scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { Button, Modal } from 'flowbite-svelte';
	/**
	 * @type {string[]}
	 */
	export let imageList = [];
	let formModal = false;
	let images = imageList.map((image) => {
		return {
			alt: image,
			src: image,
			title: image
		};
	});
	const scaleAnimation = (x) => scale(x, { duration: 500, easing: quintOut });
</script>

<Button color={'blue'} on:click={() => (formModal = true)}>Xem</Button>

<Modal title="Hình ảnh sản phẩm" bind:open={formModal} size="md" autoclose={false} class=" w-full">
	<div class=" mx-auto max-w-2xl bg-slate-500">
		<Carousel
			{images}
			transition={scaleAnimation}
			let:Controls
			let:Indicators
			imgClass="object-contain h-full w-fit"
		>
			<Controls />
			<Indicators />
		</Carousel>
	</div>
</Modal>
