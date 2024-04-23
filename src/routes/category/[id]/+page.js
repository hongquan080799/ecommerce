import { error } from '@sveltejs/kit';
import * as api from '$api'
/** @type {import('./$types').PageLoad} */
export async function load({params}) {
    const data = await api.categoryApi.loadCategoryTreeWithChildId(Number(params.id))
  
    // Return data directly as a page property
    return {
      categoryTree: data,
      categoryId: Number(params.id),
    };
  }
  export const prerender = 'auto'