import * as api from '$api'
export const load = async ({locals, cookies}) => {
    const jwt = cookies.get('jwt')
    const roles = await api.userApi.getListRole()
    // Return data directly as a page property
    return {
      props: {
         jwt: jwt,
          user: locals.user,
          roles
      }
    }
}