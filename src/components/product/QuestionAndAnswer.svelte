<script lang="ts">
	import * as api from '$api';
	import { Textarea, Button } from 'flowbite-svelte';
	import { PaperPlaneOutline } from 'flowbite-svelte-icons';
	import { onMount } from 'svelte';
	import type { Comment, CommentRequest } from '../../types/Comment';
	import moment from 'moment';
	export let jwt;
	export let product;

	let commentList: Comment[] = [];
	let commentRequest: CommentRequest = {
		message: '',
		productId: product.id
	};
	onMount(async () => {
		try {
			commentList = await api.commentApi.getAllCommentByProduct(product.id);
		} catch (error) {
			console.log(error);
		}
	});
	const insertComment = async () => {
		try {
			await api.commentApi.insertComment(commentRequest, jwt);
			commentList = await api.commentApi.getAllCommentByProduct(product.id);
			commentRequest.message = '';
		} catch (error: any) {
			alert('Error inserting : ' + error.message);
		}
	};
</script>

<div class="container">
	<p class="text-xl font-medium">Bình luận</p>
	<div>
		<Textarea
			bind:value={commentRequest.message}
			id="textarea-id"
			placeholder="Your message"
			rows="4"
			name="message"
		/>
		<Button color="green" on:click={insertComment}
			><PaperPlaneOutline class="h-6 w-6 rotate-45" />Gửi</Button
		>
	</div>
	<hr class="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700" />
	<ul class="chat-area">
		{#each commentList as item}
			<li>
				<div class="mb-2 flex items-center">
					<img class="image" src={item.userAvatar} alt={item.user} />
					<div class="">
						<p class="text-sm">{item.user}</p>
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
		padding: 1rem;
	}
	.text-box {
		background-color: #fff;
		border: 1px solid #ddd;
		border-radius: 4px;
		padding: 1rem;
		margin-bottom: 1rem;

		box-shadow: -1px 1px 9px -3px rgba(0, 0, 0, 0.75);
		-webkit-box-shadow: -1px 1px 9px -3px rgba(0, 0, 0, 0.75);
		-moz-box-shadow: -1px 1px 9px -3px rgba(0, 0, 0, 0.75);
	}
	.image {
		width: 2rem;
		border-radius: 100%;
		margin-right: 0.5rem;
	}
	.chat-area {
		max-height: 40rem;
		overflow-y: auto;
	}
</style>
