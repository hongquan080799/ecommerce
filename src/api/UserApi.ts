
import type { Role, User } from "../types/User";
import { BASE_URL } from "../utils/EcommerceConst";
const apiUrl = BASE_URL + '/user';
export async function login(request: any): Promise<any> {
    return new Promise<any>(async (resolve, reject) => {
        try {
            const response = await fetch(apiUrl +"/login", {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify(request)
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


export async function findByUserName(jwt: string, username: string): Promise<User> {
    return new Promise<User>(async (resolve, reject) => {
        try {
            const response = await fetch(apiUrl +"/info/" + username, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + jwt
                },
                method: 'GET',
            });
    
            if (response.ok) {
                const data = await response.json();
                resolve(data)
            } else {
                reject(response.status)
            }
        } catch (error) {
            reject(error)
        }
    })
}
export async function getListRole (): Promise<Role[]> {
    return new Promise<Role[]>(async (resolve, reject) => {
        try {
            const response = await fetch(apiUrl + "/role", {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'GET',
            });
    
            if (response.ok) {
                const data = await response.json();
                resolve(data)
            } else {
                reject(response.status)
            }
        } catch (error) {
            reject(error)
        }
    })
}
export async function getAllUser(jwt: string): Promise<User[]> {
    return new Promise<User[]>(async (resolve, reject) => {
        try {
            const response = await fetch(apiUrl, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + jwt
                },
                method: 'GET',
            });
    
            if (response.ok) {
                const data = await response.json();
                resolve(data)
            } else {
                reject(response.status)
            }
        } catch (error) {
            reject(error)
        }
    })
}

export async function insertUser(jwt: string, user: Partial<User>): Promise<any> {
    return new Promise<any>(async (resolve, reject) => {
        try {
            const response = await fetch(apiUrl, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + jwt
                },
                method: 'POST',
                body: JSON.stringify(user)
            });
    
            if (response.ok) {
                const data = await response.json();
                resolve(data)
            } else {
                reject(response.status)
            }
        } catch (error) {
            reject(error)
        }
    })
}

export async function register(user: Partial<User>): Promise<any> {
    return new Promise<any>(async (resolve, reject) => {
        try {
            const response = await fetch(apiUrl + "/register", {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify(user)
            });
    
            const data = await response.json();
            if (response.ok) {
                resolve(data)
            } else {
                
                reject(data)
            }
        } catch (error) {
            console.log('error2')
            reject(error)
        }
    })
}

export async function updateUser(jwt: string, user: Partial<User>): Promise<any> {
    return new Promise<any>(async (resolve, reject) => {
        try {
            const response = await fetch(apiUrl, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + jwt
                },
                method: 'PUT',
                body: JSON.stringify(user)
            });
    
            if (response.ok) {
                const data = await response.json();
                resolve(data)
            } else {
                reject(response.status)
            }
        } catch (error) {
            reject(error)
        }
    })
}
export async function deleteUser(jwt: string, username: string): Promise<any> {
    return new Promise<any>(async (resolve, reject) => {
        try {
            const response = await fetch(apiUrl + "/" + username, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + jwt
                },
                method: 'DELETE',
            });
    
            if (response.ok) {
                const data = await response.json();
                resolve(data)
            } else {
                reject(response.status)
            }
        } catch (error) {
            reject(error)
        }
    })
}
// export async function updateBrand(data: Partial<Brand>): Promise<User> {
//     return new Promise<User>(async (resolve, reject) => {
//         try {
//             const response = await fetch(apiUrl, {
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 method: 'PUT',
//                 body: JSON.stringify(data)
//             });
    
//             if (response.ok) {
//                 const data = response.json();
//                 resolve(data)
//             } else {
//                 reject(response.status)
//             }
//         } catch (error) {
//             reject(error)
//         }
//     })
// }

// export const deleteBrand = async (id: number): Promise<void> =>{
//     return new Promise<void>(async (resolve, reject) => {
//         try {
//             const response = await fetch(apiUrl + `/${id}`, {
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 method: 'DELETE',
//             });
    
//             if (response.ok) {
//                 resolve()
//             } else {
//                 reject(response.status)
//             }
//         } catch (error) {
//             reject(error)
//         }
//     })
// }

// export const loadBrands = async (): Promise<Brand[]> => {
//     return new Promise<Brand[]>(async (resolve, reject) => {
//         try {
//             const response = await fetch(apiUrl, {
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 method: 'GET',
//             });
    
//             if (response.ok) {
//                 const data = response.json();
//                 resolve(data)
//             } else {
//                 reject(response.status)
//             }
//         } catch (error) {
//             reject(error)
//         }
//     })
// }
// export const loadBrandsWithId = async (id: number): Promise<Brand> => {
//     return new Promise<Brand>(async (resolve, reject) => {
//         try {
//             const response = await fetch(apiUrl + "/" + id, {
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 method: 'GET',
//             });
    
//             if (response.ok) {
//                 const data = response.json();
//                 resolve(data)
//             } else {
//                 reject(response.status)
//             }
//         } catch (error) {
//             reject(error)
//         }
//     })
// }