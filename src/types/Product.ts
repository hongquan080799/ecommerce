import type { Brand } from "./Brand";

export type Product = {
    id: number;
    name: string;
    description: string;
    technicalInfo: string;
    productInfo: string;
    price: number;
    categoryId: number;
    brandId: number;
    images: string[];
    status: string;
    quantity: number;
    discount: number;
    createdAt: Date;
    createdBy: string;
    updatedAt: Date;
    updatedBy: string;
    categoryName?: string;
    brandName?: string
}

export enum ProductStatus {
    Active = 'Active',
    Inactive = 'Inactive',
    
}

export type PopularProductWithCat =  {
    id: number;
    name: string;
    imageUrl: string;
    subCategories : SubCategory[]
}


export type SubCategory = {
    id: number;
    name: string;
    imageUrl: string;
    parentId: number;
    products : ProductWithCat []
}
 export type ProductWithCat = {
    id: number;
    name: string;
    images : string[];
    price: number;
    discount: number;
    brand: Partial<Brand>
 }