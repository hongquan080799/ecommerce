<script lang="ts">
    import type { Category } from "../types/Category";
    import type { Product } from "../types/Product";
    export let titleCatogory: string;
    export let titleProduct: string;
    export let categoryList: Category[];
    export let popularProducts: Product[]; // Corrected spelling
    let formattedPrice = (price: number) => {
        return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    }
  </script>
  
  <div class="container">
    <p class="text-sm font-bold">{titleCatogory}</p>
    <ul class="category-container">
      {#each categoryList as category (category.id)}
        <li class="category-item">
            <img src={category.imageUrl} alt={category.name}/>
            <p class="text-sm">{category.name}</p>
        </li>
      {/each}
    </ul>
    <p class="text-sm font-bold mt-4">{titleProduct}</p>
    <ul class="product-container">
      {#each popularProducts as product (product.id)}
        <li class="product-item">
            <div class="flex justify-center">
                <img src={product.imageUrl} alt={product.name}/>
            </div>
            <p class="text-sm font-medium">{product.name}</p>
            <p class="text-sm mt-4 text-blue-500">{product.brand}</p>
            <p class="text-sm text-red-700 font-bold">{formattedPrice(product.price)}</p>
            <p class="text-xs text-gray-500 font-light italic line-through">{formattedPrice(product.price - product.price * product.discount)}</p>
        </li>
      {/each}
    </ul>
  </div>
<style>
    .category-container {
         display: flex;
         flex-wrap: wrap;
         margin-top: 9px;
    }
    .product-container {
         display: grid;
         grid-template-columns: repeat(5, 1fr);
         margin-top: 9px;
         gap: 0.5rem;
    }
    .category-item {
        max-width: 20%;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid #cecece;
        margin: -1px -1px 0 0;
        cursor: pointer;
    }
    .product-item {
        max-width: 14rem;
        display: flex;
        flex-direction: column;
        box-shadow: -1px 3px 7px 0px rgba(188, 188, 188, 0.75);
        padding: 5px 8px;
        cursor: pointer;
    }
    .category-item img {
        width: 40%;
    }
    .product-item img {
        width: 50%;
    }
    .container {
        background-color: #fff;
        padding: 0.5rem 0.6rem;
        margin: 5px 0 15px 0;
    }
</style>
  