<!-- <template>
  <div>
    <h1>Hello</h1>
  </div>
  <Splide ref="trend" :options="options">
    <SplideSlide>
      <img
        src="https://cdn.shopify.com/s/files/1/0517/8146/8354/files/robotos.png?v=1658075257"
        alt="Sample 1"
      />
    </SplideSlide>

    <SplideSlide>
      <img
        src="https://cdn.shopify.com/s/files/1/0517/8146/8354/files/robotos.png?v=1658075257"
        alt="Sample 1"
      />
    </SplideSlide>

    <SplideSlide>
      <img
        src="https://cdn.shopify.com/s/files/1/0517/8146/8354/files/robotos.png?v=1658075257"
        alt="Sample 1"
      />
    </SplideSlide>
  </Splide>
</template> -->

<!-- <template>
  <swiper ref="slideSwiper" :options="swiperOptions">
    <swiper-slide
      ><img
        src="https://cdn.shopify.com/s/files/1/0517/8146/8354/files/robotos.png?v=1658075257"
        alt="Sample 1"
    /></swiper-slide>
    <swiper-slide
      ><img
        src="https://cdn.shopify.com/s/files/1/0517/8146/8354/files/robotos.png?v=1658075257"
        alt="Sample 1"
    /></swiper-slide>
    <swiper-slide
      ><img
        src="https://cdn.shopify.com/s/files/1/0517/8146/8354/files/robotos.png?v=1658075257"
        alt="Sample 1"
    /></swiper-slide>

    <button class="swiper-button-prev">Perv</button>
    <button class="swiper-button-next">Next</button>
  </swiper>
</template> -->

<template>
  <div>
    <swiper
      :modules="modules"
      :slides-per-view="2"
      :space-between="50"
      :loop="true"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
    </swiper>

    <div class="arrows">
      <button class="swiper-button-prev">Prev</button>
      <button class="swiper-button-next">Next</button>
    </div>
  </div>
</template>

<script>
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation, Pagination],
    };
  },
};
</script>

<style>
.swiper-button-next:after,
.swiper-rtl .swiper-button-prev:after,
.swiper-button-prev:after,
.swiper-rtl .swiper-button-next:after {
  content: "";
}
</style>
