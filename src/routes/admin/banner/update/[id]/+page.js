import * as api from '$api';
/** @type {import('./$types').PageLoad} */
export async function load({params}) {
    const data = await api.bannerApi.loadBrandsWithId(params.id);
  
    // Return data directly as a page property
    return data;
  }