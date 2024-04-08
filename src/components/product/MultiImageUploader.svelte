<script lang="ts">
	import { BASE_URL } from '../../utils/EcommerceConst';

	let files: string[] | Blob[] | undefined;
	let imagesPath: string[] = [];
	const apiUrl = BASE_URL + '/file/upload';
	export let onImageUploaded: (images: string[]) => void;
	export let isClear = false;

	$: if (isClear) {
		files = undefined;
		isClear = false;
	}

	async function handleFileUpload(event: any) {
		files = Array.from(event.target.files) as any;
		if (!files) return;
		files.forEach(async (file) => {
			const formData = new FormData();
			formData.append('file', file);

			try {
				const response = await fetch(apiUrl, {
					method: 'POST',
					body: formData
				});

				if (response.ok) {
					console.log('Image uploaded successfully');
					const responseData = await response.json();
					const imageUrl = responseData.fileUrl; // Assuming the API response contains the image URL
					imagesPath = [...imagesPath, imageUrl];
					onImageUploaded(imagesPath);
				} else {
					console.error('Failed to upload image:', response.statusText);
					// Handle error response if needed
				}
			} catch (error) {
				console.error('Error uploading image:', error);
			}
		});
	}
</script>

<div>
	<input
		on:change={handleFileUpload}
		class=" block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400"
		aria-describedby="user_avatar_help"
		id="user_avatar"
		type="file"
		bind:value={files}
		multiple
	/>
</div>
