import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
export const load: LayoutServerLoad = ({ locals }) => {	
    if (!locals.user) {		
        error(401, 'not logged in');	
    }
	if (locals.user.role.name !== 'ADMIN') {		
        error(403, 'not an admin');	
    }
    return {
        user: locals.user
    }
};