<script lang="ts">
	import { Label, Input } from 'flowbite-svelte';
	import { SignUp } from '$lib';
	import MetaTag from '../../utils/MetaTag.svelte';
	import ImageUploader from '../../../components/product/ImageUploader.svelte';
	import * as api from '$api';
	import { goto } from '$app/navigation';
	let isClear = false;
	const clearImage = () => {
		avatarUrl = '';
		isClear = true;
	};
	const title = 'Create a Free Account';
	const site = {
		name: 'YOUNEED',
		img: '/images/flowbite-svelte-icon-logo.svg',
		link: '/',
		imgAlt: 'YOUNEED Logo'
	};
	let avatarUrl = '';
	const acceptTerms = true;
	const haveAccount = true;
	const btnTitle = 'Create account';
	const termsLink = '/';
	const loginLink = 'sign-in';
	const labelClass = 'space-y-2 dark:text-white';
	const onSubmit = async (e: Event) => {
		const formData = new FormData(e.target as HTMLFormElement);

		const data: Record<string, string | File> = {};
		for (const field of formData.entries()) {
			const [key, value] = field;
			data[key] = value;
		}
		if (data['password'] !== data['confirm-password']) {
			alert('Passwords do not match');
			return;
		}
		data['avatar'] = avatarUrl;

		try {
			await api.userApi.register(data);
			alert('Successfully registered');
			goto('/authentication/login');
		} catch (error: any) {
			console.log(error);
			alert('Register failed: ' + error.error);
		}
	};

	const path: string = '/authentication/sign-up';
	const description: string = 'Sign up example - Flowbite Svelte Admin Dashboard';
	const metaTitle: string = 'Flowbite Svelte Admin Dashboard - Sign up';
	const subtitle: string = 'Sign up';
</script>

<MetaTag {path} {description} title={metaTitle} {subtitle} />

<SignUp
	{title}
	{site}
	{acceptTerms}
	{haveAccount}
	{btnTitle}
	{termsLink}
	{loginLink}
	on:submit={onSubmit}
>
	<div>
		<Label class={labelClass}>
			<span>Your Username</span>
			<Input
				type="text"
				name="username"
				placeholder="Username"
				required
				class="border outline-none dark:border-gray-600 dark:bg-gray-700"
			/>
		</Label>
	</div>
	<div>
		<Label class={labelClass}>
			<span>Your password</span>
			<Input
				type="password"
				name="password"
				placeholder="••••••••"
				required
				class="border outline-none dark:border-gray-600 dark:bg-gray-700"
			/>
		</Label>
	</div>
	<div>
		<Label class={labelClass}>
			<span>Confirm password</span>
			<Input
				type="password"
				name="confirm-password"
				placeholder="••••••••"
				required
				class="border outline-none dark:border-gray-600 dark:bg-gray-700"
			/>
		</Label>
	</div>
	<div>
		<Label class={labelClass}>
			<span>First Name</span>
			<Input
				type="text"
				name="firstName"
				placeholder="Your first name"
				required
				class="border outline-none dark:border-gray-600 dark:bg-gray-700"
			/>
		</Label>
	</div>
	<div>
		<Label class={labelClass}>
			<span>Last Name</span>
			<Input
				type="text"
				name="lastName"
				placeholder="Your last name"
				required
				class="border outline-none dark:border-gray-600 dark:bg-gray-700"
			/>
		</Label>
	</div>
	<div>
		<Label class={labelClass}>
			<span>Avatar</span>
			<ImageUploader onImageUploaded={(url) => (avatarUrl = url)} {isClear} />
		</Label>
		{#if avatarUrl != ''}
			<div class="image-container">
				<div class="close" on:click={clearImage}>
					<svg
						class="h-5 w-5 text-gray-800 dark:text-white"
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
							d="M6 18 17.94 6M18 18 6.06 6"
						/>
					</svg>
				</div>
				<div class="item">
					<img src={avatarUrl} alt="test" />
				</div>
			</div>
		{/if}
	</div>
	<div>
		<Label class={labelClass}>
			<span>Your email</span>
			<Input
				type="email"
				name="email"
				placeholder="Your email"
				required
				class="border outline-none dark:border-gray-600 dark:bg-gray-700"
			/>
		</Label>
	</div>
	<div>
		<Label class={labelClass}>
			<span>Phone number</span>
			<Input
				type="text"
				name="phoneNumber"
				placeholder="Your phone number"
				required
				class="border outline-none dark:border-gray-600 dark:bg-gray-700"
			/>
		</Label>
	</div>
	<div>
		<Label class={labelClass}>
			<span>Address</span>
			<Input
				type="text"
				name="address"
				placeholder="Your address"
				required
				class="border outline-none dark:border-gray-600 dark:bg-gray-700"
			/>
		</Label>
	</div>
</SignUp>
