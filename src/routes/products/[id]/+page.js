import { BASE_URL } from '../../../utils/EcommerceConst';

export async function load({params}) {
  const apiUrl = BASE_URL + "/product/" +  params.id
    const response = await fetch(apiUrl);
    const data = await response.json();
  
    // Return data directly as a page property
    return data;
  }
export const prerender = 'auto'