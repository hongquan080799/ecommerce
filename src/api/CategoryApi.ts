import type { Category } from "../types/Category";
import { BASE_URL } from "../utils/EcommerceConst";
const apiUrl = BASE_URL + '/category';
export async function insertCategory(data: Partial<Category>): Promise<void> {
    return new Promise<void>(async (resolve, reject) => {
        try {
            const response = await fetch(apiUrl, {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify(data)
            });
    
            if (response.ok) {
                resolve()
            } else {
                reject(response.status)
            }
        } catch (error) {
            reject(error)
        }
    })
}