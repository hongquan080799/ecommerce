import { BASE_URL } from "../../../utils/EcommerceConst";
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load() {
    const apiUrl = BASE_URL + "/product"
    const response = await fetch(apiUrl);
    const data = await response.json();
    // Return data directly as a page property
    return {
      products: data
    }
    error(404, 'Not found');
  }