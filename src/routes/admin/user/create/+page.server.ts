import * as api from '$api'
import type { PageServerLoad } from '../$types'
export const load: PageServerLoad = async ({ cookies }) => {
    const response = await api.userApi.getListRole()
    return {
        props: {
            roles: response,
            jwt: cookies.get("jwt")
        }
    }
}
