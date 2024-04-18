import * as api from '$api'
import type { PageServerLoad } from './$types'
export const load: PageServerLoad = async ({params, cookies }) => {
    const jwt = cookies.get('jwt')
    const user = await api.userApi.findByUserName(String(jwt) ,params.username)
    const roles = await api.userApi.getListRole()
    // Return data directly as a page property
    return {
      props: {
          jwt: cookies.get("jwt"),
          user,
          roles
      }
    }
  }