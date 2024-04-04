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

export async function updateCategory(data: Partial<Category>): Promise<void> {
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

export const deleteCategory = async (id: number): Promise<void> =>{
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

export const loadCategories = async (): Promise<Category[]> => {
    return new Promise<Category[]>(async (resolve, reject) => {
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
export const loadCategoriesWithParentId = async (parentId: number): Promise<Category[]> => {
    return new Promise<Category[]>(async (resolve, reject) => {
        try {
            const response = await fetch(apiUrl+ "?parentId=" + parentId , {
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