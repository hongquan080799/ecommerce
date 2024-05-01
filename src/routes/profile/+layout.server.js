import * as api from '$api'
export const load = (async ({ locals }) => {
    const subCatList = await api.categoryApi.findAllSubCategory()
    return {
        subCatList,
        userInfo: locals.user
    };
});