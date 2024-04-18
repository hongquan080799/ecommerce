import * as api from '$api'
import { error } from '@sveltejs/kit';


export async function load({cookies}) {
    const jwt = cookies.get('jwt')
    const listUser = await api.userApi.getAllUser(String(jwt));
    return {
      props: {
        loadedData: listUser,
        jwt
      },
    }
    error(404, 'Not found');
  }