import type { RequestEvent } from "@sveltejs/kit";
import { BASE_URL } from "../../utils/EcommerceConst";
import type { User } from "../../types/User";
const requestUrl = BASE_URL + "/user/info"

export const authenticateUser = async (event: RequestEvent) => {
    const {cookies} = event
    const jwt = cookies.get('jwt')
    if(!jwt) {
        return null
    }
    const response = await fetch(requestUrl, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${jwt}`
        },
        method: 'GET',
    });
    try {
        const data: User = await response.json()
        return data
    } catch (err) {
        return null
    }

}