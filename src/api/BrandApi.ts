import type { Brand } from "../types/Brand";
import { BASE_URL } from "../utils/EcommerceConst";
const apiUrl = BASE_URL + '/brand';
export async function insertBrand(data: Partial<Brand>): Promise<void> {
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

export async function updateBrand(data: Partial<Brand>): Promise<void> {
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

export const deleteBrand = async (id: number): Promise<void> =>{
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

export const loadBrands = async (): Promise<Brand[]> => {
    return new Promise<Brand[]>(async (resolve, reject) => {
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