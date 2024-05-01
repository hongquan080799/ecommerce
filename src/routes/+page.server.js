import { BASE_URL } from "../utils/EcommerceConst";
import * as api from '../api'

const apiUrl = BASE_URL + "/category"
// @ts-ignore
export async function load({locals}) {
    // const response = await fetch(apiUrl);
    const data = await api.productApi.loadProductsWithCat()
    const brands = await api.brandApi.loadBrands()
    const banners = await api.bannerApi.loadBanners()
  
    // Return data directly as a page property
    return {
      props: {
        productWithCatList: data,
        brands: brands,
        banners,
        userInfo: locals.user
      },
    };
  }