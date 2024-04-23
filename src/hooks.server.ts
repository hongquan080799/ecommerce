import { redirect, type Handle } from '@sveltejs/kit';
import {authenticateUser} from '$lib/authentication/auth'
export const handle: Handle = async ({ event, resolve }) => {
    console.log('hook')
    //authen user
    const user = await authenticateUser(event)
    console.log(user)
    if(user) {
        event.locals.user = user
        console.log('1')
    }
    if (event.url.pathname.startsWith('/admin')) {	
        console.log('2')
        if(!user) {
            console.log('3')
            redirect(303, '/')
        }
        if (user.role.name !== 'ADMIN') {
            console.log('')
            redirect(303, '/')
        }
    }
	const response = await resolve(event);	
    return response;
};
