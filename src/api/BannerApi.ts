import type { Banner } from "../types/Banner";
import { BASE_URL } from "../utils/EcommerceConst";
const apiUrl = BASE_URL + '/banner';
export async function insertBanner(data: Partial<Banner>): Promise<void> {
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

export async function updateBanner(data: Partial<Banner>): Promise<void> {
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

export const deleteBanner = async (id: number): Promise<void> =>{
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

export const loadBanners = async (): Promise<Banner[]> => {
    return new Promise<Banner[]>(async (resolve, reject) => {
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
export const loadBrandsWithId = async (id: number): Promise<Banner> => {
    return new Promise<Banner>(async (resolve, reject) => {
        try {
            const response = await fetch(apiUrl + "/" + id, {
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