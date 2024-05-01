import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
export const load: LayoutServerLoad = ({ locals }) => {	
    
    if (!locals.user) {
        error(401, 'not logged in');	
    }
	
    return {
        user: locals.user
    }
};
 export const prerender = false
