import type { CommentRequest, Comment } from "../types/Comment";
import { BASE_URL } from "../utils/EcommerceConst";
const apiUrl = BASE_URL + '/comment';

export async function getAllCommentByProduct(productId: number): Promise<Comment[]> {
    return new Promise<Comment[]>(async (resolve, reject) => {
        try {
            const response = await fetch(apiUrl +"/" + productId, {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'GET',
            });
    
            const data = await response.json();
            if (response.ok) {
                
                resolve(data)
            } else {
                reject(data)
            }
        } catch (error) {
            reject(error)
        }
    })
}


export async function insertComment(data: Partial<CommentRequest>, jwt: string): Promise<void> {
    return new Promise<void>(async (resolve, reject) => {
        try {
            const response = await fetch(apiUrl, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + jwt
                },
                method: 'POST',
                body: JSON.stringify(data)
            });
    
            const result = await response.json();
            if (response.ok) {
                resolve(result)
            } else {
                reject(result)
            }
        } catch (error) {
            reject(error)
        }
    })
}