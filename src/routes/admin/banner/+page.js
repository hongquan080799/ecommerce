import { error } from '@sveltejs/kit';
import * as api from '../../../api';
export async function load() {
    const data = await api.bannerApi.loadBanners()
    // Return data directly as a page property
    return {
      props: {
        loadedData: data,
      },
    }
    error(404, 'Not found');
  }