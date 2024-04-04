import { error } from '@sveltejs/kit';
import { BASE_URL } from '../../../../../utils/EcommerceConst';

/** @type {import('./$types').PageLoad} */
export async function load({params}) {
  const apiUrl = BASE_URL + "/category/" +  params.id
    const response = await fetch(apiUrl);
    const data = await response.json();
  
    // Return data directly as a page property
    return data;
  }