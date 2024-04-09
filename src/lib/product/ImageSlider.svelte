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

<Modal
	title="Hình ảnh sản phẩm"
	bind:open={formModal}
	size="xl"
	autoclose={false}
	class="min-h-96 w-full"
>
	<div class="relative mt-5 overflow-x-auto shadow-md sm:rounded-lg">
		<div class="flex justify-between bg-white pb-4 dark:bg-gray-900">
			<div class="max-w-4xl">
				{#if images.length > 0}
					<Carousel {images} transition={scaleAnimation} let:Controls let:Indicators>
						<Controls />
						<Indicators />
					</Carousel>
				{/if}
			</div>
		</div>
	</div>
</Modal>
