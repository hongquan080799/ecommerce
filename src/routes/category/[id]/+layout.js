import * as api from '$api'
/** @type {import('./$types').LayoutLoad} */
export const load = (async () => {
    const subCatList = await api.categoryApi.findAllSubCategory()
    return {subCatList};
});