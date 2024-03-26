<script>
    import { Carousel } from 'flowbite-svelte';
	import Advertise from './Advertise.svelte';
	import ZoneMarket from './ZoneMarket.svelte';
    export const images = [
    {
      alt: 'page1',
      src: 'https://st.meta.vn/img/thumb.ashx/Data/2024/Thang03/dieu-hoa/Banner-may-lanh-720x445.png',
      title: 'page1'
    },
    {
      alt: 'page2',
      src: 'https://st.meta.vn/img/thumb.ashx/Data/2024/Thang03/banner-t30-pro-omni-720x445.jpg',
      title: 'page2'
    },
    {
      alt: 'page3',
      src: 'https://st.meta.vn/img/thumb.ashx/Data/2024/Thang01/Banner-kosmen-720x445.jpg',
      title: 'page3'
    },
    
  ];
  </script>
  
  <div class="slider-container">
    <Carousel {images} duration={2000} />
    <ZoneMarket />
  </div>
  <style>
    .slider-container {
        width: 100%;
    }
  </style>