import type { Rating, RatingRequest } from "../types/Rating";
import { BASE_URL } from "../utils/EcommerceConst";
const apiUrl = BASE_URL + '/rating';

export async function getAllRatingByProduct(productId: number): Promise<Rating[]> {
    return new Promise<Rating[]>(async (resolve, reject) => {
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

export async function getRatingStatiscal(productId: number): Promise<any> {
    return new Promise<any>(async (resolve, reject) => {
        try {
            const response = await fetch(apiUrl +"/statistic/" + productId, {
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

export async function insertRating(data: Partial<RatingRequest>, jwt: string): Promise<void> {
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