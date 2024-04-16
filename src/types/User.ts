export type User = {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    phoneNumber: string;
    avatar: string;
    role: Role;
    active: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

export type Role = {
    id: number;
    name: string;
    createdAt?: Date;
    updatedAt?: Date;
}