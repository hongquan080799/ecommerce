import { BASE_URL } from "../../../utils/EcommerceConst";

const apiUrl = BASE_URL + "/category"
export async function load() {
    const response = await fetch(apiUrl);
    const data = await response.json();
  
    // Return data directly as a page property
    return {
      props: {
        loadedData: data,
      },
    };
  }