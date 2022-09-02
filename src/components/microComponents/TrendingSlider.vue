<template>
  <div>
    <h2
      class="
        text-center
        italic
        font-title
        text-[42px] text-title
        uppercase
        tracking-[4px]
        font-[200]
      "
    >
      Hear what’s trending in the Soundwalker community
    </h2>
    <div class="flex justify-between gap-[40px]">
      <div v-for="item in CardItems" :key="item.id">
        <TrendingCard
          :tag="item.tag"
          :number="item.number"
          :imageUrl="item.imageUrl"
          :altText="item.altText"
          :title="item.title"
          :desc="item.desc"
        />
      </div>
    </div>
  </div>
  <!-- <div>
    <swiper
      class="cursor-pointer"
      :modules="modules"
      :slides-per-view="3"
      :space-between="50"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="item in CardItems" :key="item.id">
        <TrendingCard
          :tag="item.tag"
          :number="item.number"
          :imageUrl="item.imageUrl"
          :altText="item.altText"
          :title="item.title"
          :desc="item.desc"
        />
      </swiper-slide>
    </swiper>

    <div class="arrows">
      <button class="swiper-button-prev">
        <svg
          width="60px"
          height="80px"
          viewBox="0 0 50 80"
          xml:space="preserve"
        >
          <polyline
            fill="none"
            stroke="#000000"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            points="
	45.63,75.8 0.375,38.087 45.63,0.375 "
          />
        </svg>
      </button>

      <button class="swiper-button-next">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="60px"
          height="80px"
          viewBox="0 0 50 80"
          xml:space="preserve"
        >
          <polyline
            fill="none"
            stroke="#000000"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            points="
	0.375,0.375 45.63,38.087 0.375,75.8 "
          />
        </svg>
      </button>
    </div>
  </div> -->
</template>

<script>
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import TrendingCard from "./TrendingCard.vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
    TrendingCard,
  },
  data() {
    return {
      CardItems: [
        {
          id: 1,
          tag: "Postermywall music records",
          number: "01",
          imageUrl:
            "https://cdn.shopify.com/s/files/1/0517/8146/8354/files/t-cover-1.png?v=1659728793",
          altText: "Trending Cover",
          title: "Electronic",
          desc: "Ken Adams Mixtape",
        },
        {
          id: 2,
          tag: "Postermywall music records",
          number: "02",
          imageUrl:
            "https://cdn.shopify.com/s/files/1/0517/8146/8354/files/t-cover-2.png?v=1659728793",
          altText: "Trending Cover",
          title: "Kid Cudi",
          desc: "Man on the Moon: The End of Day",
        },
        {
          id: 3,
          tag: "Postermywall music records",
          number: "03",
          imageUrl:
            "https://cdn.shopify.com/s/files/1/0517/8146/8354/files/t-cover-3.png?v=1659728793",
          altText: "Trending Cover",
          title: "Beach House",
          desc: "Seven",
        },
        // {
        //   id: 4,
        //   tag: "Postermywall music records",
        //   number: "04",
        //   imageUrl:
        //     "https://cdn.shopify.com/s/files/1/0517/8146/8354/files/t-cover-4.png?v=1659728793",
        //   altText: "Trending Cover",
        //   title: "Tangerine dream",
        //   desc: "Rubycon",
        // },
      ],
    };
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
