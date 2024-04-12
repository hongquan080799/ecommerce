import { BASE_URL } from "../utils/EcommerceConst";
import * as api from '../api'

const apiUrl = BASE_URL + "/category"
export async function load() {
    // const response = await fetch(apiUrl);
    const data = await api.productApi.loadProductsWithCat()
  
    // Return data directly as a page property
    return {
      props: {
        productWithCatList: data,
      },
    };
  }