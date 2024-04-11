import type { Product } from "../types/Product";
import { BASE_URL } from "../utils/EcommerceConst";
const apiUrl = BASE_URL + '/product';
export async function insertProduct(data: Partial<Product>): Promise<void> {
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
                console.log(response)
                resolve()
            } else {
                reject(response.status)
            }
        } catch (error) {
            reject(error)
        }
    })
}

export async function updateProduct(data: Partial<Product>): Promise<void> {
    return new Promise<void>(async (resolve, reject) => {
        try {
            const response = await fetch(apiUrl, {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'PUT',
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

export const deleteProduct = async (id: number): Promise<void> =>{
    return new Promise<void>(async (resolve, reject) => {
        try {
            const response = await fetch(apiUrl + `/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'DELETE',
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

export const loadProducts = async (): Promise<Product[]> => {
    return new Promise<Product[]>(async (resolve, reject) => {
        try {
            const response = await fetch(apiUrl, {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'GET',
            });
    
            if (response.ok) {
                const data = response.json();
                resolve(data)
            } else {
                reject(response.status)
            }
        } catch (error) {
            reject(error)
        }
    })
}