import * as api from '$api'
// @ts-ignore
export const load = (async ({ locals, params, cookies }) => {
    const jwt = cookies.get('jwt')
    const subCatList = await api.categoryApi.findAllSubCategory()
    const product = await api.productApi.loadProductById(Number(params.id))
    return {
        subCatList,
        userInfo: locals.user,
        product,
        jwt
    };
});