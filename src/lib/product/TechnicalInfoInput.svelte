<script lang="ts">
	import { Button, Modal, Label, Input, Checkbox } from 'flowbite-svelte';
	let formModal = false;
	export let onHandle: (result: string) => void;
	let technicleInfo: { key: string; value: string }[] = [];
	const onAddItem = () => {
		technicleInfo = [...technicleInfo, { key: '', value: '' }];
	};
	const onSubmit = () => {
		technicleInfo = technicleInfo.filter((item) => item.key !== '' && item.value !== '');
		onHandle(JSON.stringify(technicleInfo));
		formModal = false;
	};
</script>

<Button color={'blue'} on:click={() => (formModal = true)}>Chọn</Button>

<Modal title="Thông số kỹ thuật" bind:open={formModal} size="lg" autoclose={false} class="w-full">
	<Button color="blue" on:click={onAddItem}>Thêm</Button>
	<form class="flex flex-col space-y-6">
		{#each technicleInfo as info}
			<div class="technical-info-item flex">
				<div class="key w-1/2 pr-2">
					<Input bind:value={info.key} id="default-input" size="lg" placeholder="Tiêu đề" />
				</div>
				<div class="value w-1/2 pl-2">
					<Input bind:value={info.value} id="default-input" size="lg" placeholder="Mô tả ngắn" />
				</div>
			</div>
		{/each}
	</form>
	<svelte:fragment slot="footer">
		<Button color="blue" on:click={onSubmit}>Save</Button>
	</svelte:fragment>
</Modal>
