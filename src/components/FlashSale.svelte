<script lang="ts">
	const formattedPrice = (price: number) => {
    return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}

	

</script>
<div class="container">
    <div class="header">
        <img src= "	https://meta.vn/Data/image/2021/06/11/fs-vang.png" alt="test" />
        <p class="font-bold text-white text-lg ml-2">FLASH SALE</p>
    </div>
    <div class="container-container">
        
        {#each [1,2,3,4,5] as number }
        <div class="content">
            <div class="label">
                <img src = "https://meta.vn/Data/image/2023/01/31/tag-miennam-1x.png" alt ="test"/>
            </div>
            <div class="label-right">
                <p>-24%</p>
            </div>
            <div>
                <img src="https://st.meta.vn/img/thumb.ashx/200x200x95/Data/Image/2019/12/06/tu-lanh-lg-gr-x247mc-4-n.jpg" alt = "test" />
            </div>
            <p class="text-sm font-medium">Tủ lạnh LG InstaView Door-in-Door GR-X247MC 601 lít</p>
            <p class="text-sm mt-4 text-blue-500">LG</p>
            <div class="price">
                <div>
                    <p class="text-sm  font-bold">{formattedPrice(29990000)}</p>
                    <p class="text-xs  font-light italic line-through">{formattedPrice(39330000)}</p>
                </div>
                <div class="w-15 text-right">
                    <p class="text-xs">Kết thúc sau <span>4</span> ngày còn <span>5</span></p>
                </div>
            </div>
        </div>
        {/each}
    </div>
</div>

<style>
    .container {
        background-color: #4D90E0;
        padding: 5px 9px 1rem 9px;
    }
    .header {
        display: flex;
        align-items: center;
        margin-bottom: 9px;
    }
    .container-container {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 0.5rem;
    }
    .content {
        background-color: white;
        padding: 0.4rem 0.4rem;
        border-radius: 10px;
        position: relative;
        overflow: hidden;
    }
    .price {
        background-color: #DA251C;
        color: #fff;
        border-radius: 10px;
        padding: 0.4rem 0.4rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 5rem;
    }
    .label  {
        position: absolute;
        top: 0;
        width: 50;
    }
    .label-right {
        position: absolute;
        top: 0.6rem;
        background-color: #DA251C;
        color: white;
        right: -1.3rem;
        width: 43%;
        text-align: center;
        transform: rotate(45deg);
    }
</style>