import type { Actions, PageServerLoad } from "../$types"
import * as api from '$api';
import { redirect } from "@sveltejs/kit";
export const load: PageServerLoad = async () => {

}

export const actions: Actions = {
    default: async ({cookies, request}) => {
        const data = await request.formData();
        const username = data.get('username');
        const password = data.get('password');
        const response = await api.userApi.login({username, password});
        cookies.set("jwt", response.jwtToken, {
			path: "/",
			httpOnly: true,
			sameSite: "strict",
			secure: process.env.NODE_ENV === "production",
			maxAge: 60 * 60 * 24 * 7, // 1 week
		})
        if(response.userInfo.role.name === "ADMIN") {
            redirect(303, '/admin')
        }
        return { success: true };
        
    }
} satisfies Actions;
export const prerender = false;