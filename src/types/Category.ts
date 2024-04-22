import type { Brand } from "./Brand";
import type { Product } from "./Product";

export type Category = {
    id?: number;
    name: string;
    imageUrl: string;
    parentId?: number;
    createdAt?: Date;
    updatedAt?: Date;
}
export type CatTree = {
    id: number;
    name: string;
    imageUrl: string;
    subCategory: [{id: number, name: string, image_url: string}],
    productWithCat: Product[],
    brandList: Brand[]
}