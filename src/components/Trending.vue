<template>
  <section class="relative py-[150px]">
    <img
      class="
        w-[1000px]
        h-[1000px]
        absolute
        right-[81px]
        transform
        -translate-y-[450px]
        -z-[1]
      "
      src="../assets/images/trend-bg.png"
      alt=""
    />
    <img
      class="absolute w-[200%] top-[50%] right-0 transform -translate-y-[50%]"
      src="https://cdn.shopify.com/s/files/1/0517/8146/8354/files/trend-spiral.svg?v=1659728793"
      alt=""
    />

    <div class="container">
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

