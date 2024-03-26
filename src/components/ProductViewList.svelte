<script lang="ts">
	import type { Category } from "../types/Category";
	import type { Product } from "../types/Product";
	import ProductView from "./ProductView.svelte";

    const categoryName = "ĐIỆN MÁY - MÁY LẠNH"
    const productName = "Điện máy nổi bât";
    const categoryList: Category [] = [
        {id: 1, name: 'Điều hòa', imageUrl: 'https://meta.vn/icons/cateico/c1018-0x0.jpg'},
        {id: 2, name: 'Tủ lạnh', imageUrl: 'https://meta.vn/icons/cateico/c1015-0x0.jpg'},
        {id: 3, name: 'Tivi', imageUrl: 'https://meta.vn/icons/cateico/c3256-0x0.jpg'},
        {id: 4, name: 'Máy giặt', imageUrl: 'https://meta.vn/icons/cateico/c1017-0x0.jpg'},
        {id: 5, name: 'Máy hút ẩm', imageUrl: 'https://meta.vn/icons/cateico/c622-0x0.jpg'},
    ]
    const productList: Product [] = [
        {id: 1, name: 'Điều hòa Casper Inverter 1 chiều 1HP TC-09IS36', brand:'Casper', price: 6900000, discount: 0.28, imageUrl: 'https://st.meta.vn/img/thumb.ashx/300x300x95/Data/image/2024/01/25/dieu-hoa-casper-tc-09is36-nho.jpg', star: 4},
        {id: 2, name: 'Tủ lạnh Aqua Inverter 189 lít AQR-T220FA(FB)', brand:'Casper', price: 6900000, discount: 0.2, imageUrl: 'https://st.meta.vn/img/thumb.ashx/300x300x95/Data/image/2024/01/25/dieu-hoa-casper-tc-09is36-nho.jpg', star: 5},
        {id: 3, name: 'Máy giặt lồng đứng Casper 7.5kg WT-75NG1', brand:'Casper', price: 6900000, discount: 0.3, imageUrl: 'https://st.meta.vn/img/thumb.ashx/300x300x95/Data/image/2024/01/25/dieu-hoa-casper-tc-09is36-nho.jpg', star: 4},
        {id: 4, name: 'Máy sấy thông hơi Electrolux 8.5kg EDV854J3WB', brand:'Casper', price: 6900000, discount: 0.5, imageUrl: 'https://st.meta.vn/img/thumb.ashx/300x300x95/Data/image/2024/01/25/dieu-hoa-casper-tc-09is36-nho.jpg', star: 4},
        {id: 5, name: 'Máy sấy thông hơi Electrolux 8.5kg EDV854J3WB', brand:'Casper', price: 6900000, discount: 0.5, imageUrl: 'https://st.meta.vn/img/thumb.ashx/300x300x95/Data/image/2024/01/25/dieu-hoa-casper-tc-09is36-nho.jpg', star: 4},
    ]
</script>
<div class="product-container">
    <ProductView titleCatogory={categoryName} titleProduct={productName} categoryList={categoryList} popularProducts={productList} />
    <ProductView titleCatogory={categoryName} titleProduct={productName} categoryList={categoryList} popularProducts={productList} />
    <ProductView titleCatogory={categoryName} titleProduct={productName} categoryList={categoryList} popularProducts={productList} />
    <ProductView titleCatogory={categoryName} titleProduct={productName} categoryList={categoryList} popularProducts={productList} />
</div>

<style>

</style>
