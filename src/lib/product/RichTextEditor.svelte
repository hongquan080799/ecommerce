<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import { BASE_URL } from '../../utils/EcommerceConst';
	let editorElement;
	/**
	 * @type {import("@ckeditor/ckeditor5-editor-classic").ClassicEditor}
	 */
	let editorInstance;
	const apiUrl = BASE_URL + '/file/upload';

	// Define the ImageUploadAdapter class
	class ImageUploadAdapter {
		/**
		 * @param {any} loader
		 */
		constructor(loader) {
			this.loader = loader;
		}

		upload() {
			return this.loader.file.then(
				(/** @type {string | Blob} */ file) =>
					new Promise((resolve, reject) => {
						const formData = new FormData();
						formData.append('file', file);

						fetch(apiUrl, {
							method: 'POST',
							body: formData
						})
							.then((response) => response.json())
							.then((data) => {
								resolve({ default: data.fileUrl });
							})
							.catch((error) => {
								reject(error);
							});
					})
			);
		}
	}

	onMount(async () => {
		try {
			// Dynamically import CKEditor classic build
			const ClassicEditor = (await import('@ckeditor/ckeditor5-build-classic')).default;

			// Verify if the DOM element exists
			editorElement = document.querySelector('#editor');
			if (!editorElement) {
				throw new Error('Editor element not found');
			}

			// Create CKEditor instance with ImageUploadAdapter
			editorInstance = await ClassicEditor.create(editorElement);
			editorInstance.plugins.get('FileRepository').createUploadAdapter = (loader) => {
				return new ImageUploadAdapter(loader);
			};
		} catch (error) {
			console.error('Error initializing CKEditor:', error);
		}
	});

	function getValueFromEditor() {
		if (editorInstance) {
			console.log(editorInstance.getData());
		}
	}
</script>

<div id="editor"></div>
<button on:click={getValueFromEditor}>Get Value</button>
