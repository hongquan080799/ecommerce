<script lang="ts">
	import { AdvancedRating, Button, Rating, Modal, Textarea } from 'flowbite-svelte';
	import type { Product } from '../../types/Product';
	import type { RatingRate, RatingRequest, Rating as RatingType } from '../../types/Rating';
	// @ts-ignore
	import StarRating from '@ernane/svelte-star-rating';
	import { onMount } from 'svelte';
	import * as api from '$api';
	import moment from 'moment';
	import { goto } from '$app/navigation';
	let clickOutsideModal = false;
	let config = {
		readOnly: false,
		countStars: 5,
		range: { min: 0, max: 5, step: 0.001 },
		score: 3.785,
		showScore: true,
		scoreFormat: function () {
			return `(${this.score.toFixed(0)}/${this.countStars})`;
		},
		starConfig: {
			size: 30,
			fillColor: '#F9ED4F',
			strokeColor: '#000000',
			unfilledColor: '#FFFFFF',
			strokeUnfilledColor: '#000000F'
		}
	};
	export let product: Product;
	export let jwt: string | undefined;
	let ratingList: RatingType[] = [];
	let ratingRate: RatingRate = {
		fiveStarCount: 0,
		fourStarCount: 0,
		threeStarCount: 0,
		twoStarCount: 0,
		oneStarCount: 0,
		totalRatings: 0,
		averageRating: 0
	};
	onMount(async () => {
		try {
			const rateRes = await api.ratingApi.getRatingStatiscal(product.id);
			if (rateRes.totalRatings > 0) {
				ratingRate = rateRes;
			}

			ratingList = await api.ratingApi.getAllRatingByProduct(product.id);
		} catch (error) {
			console.log(error);
		}
	});
	let ratingRequest = {
		productId: product.id,
		rating: config.score,
		message: ''
	};
	$: ratingRequest.rating = config.score;
	const onAddRating = async () => {
		try {
			await api.ratingApi.insertRating(ratingRequest, String(jwt));
			alert('Đánh giá thành công');
			ratingList = await api.ratingApi.getAllRatingByProduct(product.id);
			ratingRate = await api.ratingApi.getRatingStatiscal(product.id);
		} catch (error: any) {
			console.log(error);
			alert('Đánh giá thất bại : ' + error.message);
		}
	};
</script>

<div class="container">
	<p class="text-lg font-medium">Đánh giá nhận xét sản phẩm</p>
	<AdvancedRating
		ratings={[
			{ label: '5 star', rating: ratingRate.fiveStarCount },
			{ label: '4 star', rating: ratingRate.fourStarCount },
			{ label: '3 star', rating: ratingRate.threeStarCount },
			{ label: '2 star', rating: ratingRate.twoStarCount },
			{ label: '1 star', rating: ratingRate.oneStarCount }
		]}
	>
		<span slot="rating">
			<Rating total={5} rating={3.72} id="example-8">
				<p slot="text" class="ms-2 text-sm font-medium text-gray-500 dark:text-gray-400">
					{ratingRate.averageRating}/5
				</p>
			</Rating>
		</span>
		<p slot="globalText" class="mt-2 text-sm font-medium text-gray-500 dark:text-gray-400">
			{ratingRate.totalRatings} đánh giá
		</p>
	</AdvancedRating>
	<hr class="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700" />
	<div class="mb-5 text-center">
		<p class="mb-2 text-lg">Bạn đánh giá sao về sản phẩm này</p>
		<Button
			on:click={() => {
				if (!jwt) {
					goto('/authentication/login');
					return;
				}
				clickOutsideModal = true;
			}}
			color="green">Đánh giá ngay</Button
		>
		<Modal title="Đánh giá & nhận xét" bind:open={clickOutsideModal} autoclose={false} outsideclose>
			<div class="flex items-center">
				<img class="w-40" src={product.images[0]} alt={product.name} />
				<p class="text-xl font-bold text-gray-700">{product.name}</p>
			</div>
			<div>
				<p>Đánh giá chung</p>
				<StarRating bind:config />
			</div>
			<Textarea
				bind:value={ratingRequest.message}
				id="textarea-id"
				placeholder="Viết đánh giá của bạn"
				rows="4"
				name="message"
			/>
			<svelte:fragment slot="footer">
				<Button on:click={onAddRating}>Gửi đánh giá</Button>
			</svelte:fragment>
		</Modal>
	</div>
	<hr class="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700" />
	<ul class="chat-area">
		{#each ratingList as item}
			<li>
				<div class="mb-2 flex items-start">
					<img class="image" src={item.userAvatar} alt={item.user} />
					<div class="">
						<p class="text-sm">{item.user}</p>
						<Rating id={item.id} total={5} size={20} rating={item.rating} />
						<p class="text-xs italic text-gray-600">
							{moment(item.time).format('DD/MM/YYYY HH:mm:ss')}
						</p>
					</div>
				</div>
				<div class="text-box ml-10">
					<p class="text-sm">{item.message}</p>
				</div>
			</li>
		{/each}
	</ul>
</div>

<style>
	.container {
		background-color: #fff;
		margin: 0.5rem 0;
		padding: 1rem 1rem;
	}
	.image {
		width: 2.2rem;
		border-radius: 100%;
		margin-right: 0.7rem;
	}
	.text-box {
		background-color: #fff;
		border: 1px solid #ddd;
		border-radius: 4px;
		padding: 1rem;
		margin-bottom: 1rem;
	}
	.chat-area {
		max-height: 40rem;
		overflow-y: auto;
	}
</style>
