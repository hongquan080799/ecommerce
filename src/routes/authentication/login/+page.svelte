<script lang="ts">
	import { Label, Input } from 'flowbite-svelte';
	import { SignIn } from '$lib';
	import MetaTag from '../../utils/MetaTag.svelte';
	import * as api from '$api';
	import { goto } from '$app/navigation';
	let title = 'Đăng nhập';
	let site = {
		name: 'YOURNEED',
		img: '/images/flowbite-svelte-icon-logo.svg',
		link: '/',
		imgAlt: 'YOUNEED Logo'
	};
	let rememberMe = true;
	let lostPassword = true;
	let createAccount = true;
	let lostPasswordLink = 'forgot-password';
	let loginTitle = 'Đăng nhập vào tài khoản';
	let registerLink = 'sign-up';
	let createAccountTitle = 'Tạo tài khoản';

	// const onSubmit = async (e: Event) => {
	// 	const formData = new FormData(e.target as HTMLFormElement);

	// 	const data: Record<string, string | File> = {};
	// 	for (const field of formData.entries()) {
	// 		const [key, value] = field;
	// 		data[key] = value;
	// 	}
	// 	try {
	// 		const result = await api.userApi.login(data);
	// 		sessionStorage.setItem('userInfo', JSON.stringify(result.userInfo));
	// 		sessionStorage.setItem('jwt', result.jwtToken);
	// 		goto('/admin');
	// 	} catch (error) {
	// 		console.log(error);
	// 		window.alert('Đăng nhập thất bại');
	// 	}
	// };

	const path: string = '/authentication/sign-in';
	const description: string = 'Sign in example - Flowbite Svelte Admin Dashboard';
	const metaTitle: string = 'Flowbite Svelte Admin Dashboard - Sign in';
	const subtitle: string = 'Sign in';
</script>

<MetaTag {path} {description} title={metaTitle} {subtitle} />

<SignIn
	{title}
	{site}
	{rememberMe}
	{lostPassword}
	{createAccount}
	{lostPasswordLink}
	{loginTitle}
	{registerLink}
	{createAccountTitle}
>
	<!-- on:submit={onSubmit} -->
	<div>
		<Label for="email" class="mb-2 dark:text-white">Tên đăng nhập</Label>
		<Input
			type="text"
			name="username"
			id="username"
			placeholder="Nhập tài khoản"
			required
			class="border outline-none dark:border-gray-600 dark:bg-gray-700"
		/>
	</div>
	<div>
		<Label for="password" class="mb-2 dark:text-white">Mật khẩu</Label>
		<Input
			type="password"
			name="password"
			id="password"
			placeholder="Nhập mật khẩu"
			required
			class="border outline-none dark:border-gray-600 dark:bg-gray-700"
		/>
	</div>
</SignIn>
