import { BASE_URL } from "../../../utils/EcommerceConst";
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load() {
  const apiUrl = BASE_URL + "/brand"
    const response = await fetch(apiUrl);
    const data = await response.json();
    // Return data directly as a page property
    return {
      props: {
        loadedData: data,
      },
    }
    error(404, 'Not found');
  }