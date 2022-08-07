<template>
  <section class="relative py-[300px] overflow-hidden">
    <img
      class="absolute w-[200%] top-[50%] right-0 transform -translate-y-[50%]"
      src="https://cdn.shopify.com/s/files/1/0517/8146/8354/files/trend-spiral.svg?v=1659728793"
      alt=""
    />

    <div class="container px-0">
      <TrendingSlider />
      <div class="flex"></div>
    </div>
  </section>
</template>

<script>
import TrendingCard from "./microComponents/TrendingCard.vue";
import TrendingSlider from "./microComponents/TrendingSlider.vue";

export default {
  name: "Trending",
  components: { TrendingCard, TrendingSlider },
};
</script>

