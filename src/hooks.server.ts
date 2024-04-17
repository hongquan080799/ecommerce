import { redirect, type Handle } from '@sveltejs/kit';
import {authenticateUser} from '$lib/authentication/auth'
export const handle: Handle = async ({ event, resolve }) => {
    //authen user
    const user = await authenticateUser(event)
    if (event.url.pathname.startsWith('/admin')) {	
        if(!user) {
            throw redirect(303, '/')
        }
        if (user.role.name !== 'ADMIN') {
            throw redirect(303, '/')
        }
    }
	const response = await resolve(event);	
    return response;
};