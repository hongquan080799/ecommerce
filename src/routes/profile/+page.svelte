<script lang="ts">
	import { goto } from '$app/navigation';
	import * as api from '$api';
	import { Select } from 'flowbite-svelte';
	import ImageUploader from '../../components/product/ImageUploader.svelte';
	export let data;
	const { user, jwt, roles } = data.props;
	let seletedRole = user.role.name;
	let imagesPath = user.avatar;
	let isClear = false;
	const clearImage = () => {
		imagesPath = '';
		isClear = true;
	};

	const updateUser = async () => {
		if (imagesPath !== '') {
			user.avatar = imagesPath;
		}
		user.role = roles.filter((role) => role.name === seletedRole)[0];
		try {
			await api.userApi.updateUser(String(jwt), user);
			alert('Sửa tài khoản thành công');
			goto('/admin/user');
		} catch (error) {
			console.log(error);
			alert('Sửa tài khoản thất bại');
		}
	};
</script>

<p class="mb-10 text-xl font-bold">Thông tin người dùng</p>

<form class="form-container" on:submit={updateUser}>
	<div class="form-group">
		<label for="email" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
			>Tên đăng nhập</label
		>
		<input
			bind:value={user.username}
			type="text"
			id="username"
			class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light dark:focus:border-blue-500 dark:focus:ring-blue-500"
		/>
	</div>
	<div class="form-group">
		<label for="email" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
			>Mật khẩu</label
		>
		<input
			bind:value={user.password}
			type="password"
			id="password"
			class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light dark:focus:border-blue-500 dark:focus:ring-blue-500"
		/>
	</div>
	<div class="form-group">
		<label for="email" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
			>Họ</label
		>
		<input
			bind:value={user.lastName}
			type="text"
			id="lastName"
			class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light dark:focus:border-blue-500 dark:focus:ring-blue-500"
		/>
	</div>

	<div class="form-group">
		<label for="email" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
			>Tên</label
		>
		<input
			bind:value={user.firstName}
			type="text"
			id="firstName"
			class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light dark:focus:border-blue-500 dark:focus:ring-blue-500"
		/>
	</div>
	<div class="form-group">
		<label for="email" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
			>Email</label
		>
		<input
			bind:value={user.email}
			type="email"
			id="email"
			class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light dark:focus:border-blue-500 dark:focus:ring-blue-500"
		/>
	</div>
	<div class="form-group">
		<label for="email" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
			>Số điện thoại</label
		>
		<input
			bind:value={user.phoneNumber}
			type="text"
			id="phoneNumber"
			class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light dark:focus:border-blue-500 dark:focus:ring-blue-500"
		/>
	</div>
	<div class="form-group">
		<label for="email" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
			>Địa chỉ</label
		>
		<input
			bind:value={user.address}
			type="text"
			id="address"
			class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light dark:focus:border-blue-500 dark:focus:ring-blue-500"
		/>
	</div>
	<div class="form-group">
		<label for="email" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
			>Loại tài khoản</label
		>
		<Select
			class="mt-2"
			items={roles.map((item) => ({ name: item.name, value: item.name }))}
			bind:value={seletedRole}
		/>
	</div>
	<div class="form-group">
		<label for="email" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
			>Avatar</label
		>
		<div class="relative block w-full">
			<ImageUploader onImageUploaded={(imageUrl) => (imagesPath = imageUrl)} {isClear} />
			{#if imagesPath != ''}
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
						<img src={imagesPath} alt="test" />
					</div>
				</div>
			{/if}
		</div>
	</div>
	<button
		type="submit"
		class="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
		>Save</button
	>
</form>

<style>
	.form-group {
		display: flex;
		margin-bottom: 20px;
		align-items: center;
	}

	.form-group label {
		width: 140px; /* Adjust the width as needed */
		margin-right: 10px;
	}
	.form-container {
		width: 40%;
	}
	.image-container {
		position: absolute;
		left: 0;
		margin-top: 20px;
	}
	.image-container .close {
		position: absolute;
		right: 0;
		top: 0;
		transform: translate(100%, -50%);
		cursor: pointer;
	}
</style>
