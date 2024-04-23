<script>
	/**
	 * @type {any[]}
	 */
	export let infos = [];
</script>

<div class="container mx-auto mt-4 bg-white px-4 py-4">
	<table class="w-full table-auto text-left text-gray-700">
		<thead>
			<tr class="border-b border-gray-200">
				<th class="px-4 py-2 font-medium text-gray-900">Thông số kỹ thuật</th>
				<th class="px-4 py-2"></th>
			</tr>
		</thead>
		<tbody>
			{#each infos as info}
				<tr class="border-b border-gray-200">
					<td class="px-4 py-2">{info.key}</td>
					<td class="px-4 py-2">{info.value}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	tr:nth-child(even) {
		background-color: #ececec;
	}
</style>
