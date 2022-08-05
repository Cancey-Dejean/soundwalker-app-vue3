<script>
import Hero from "./components/Hero.vue";
import Highlight from "./components/Highlight.vue";
import Trending from "./components/Trending.vue";

export default {
  components: { Hero, Highlight, Trending },
};
</script>

<template>
  <main class="relative">
    <Hero
      imageSrc="https://cdn.shopify.com/s/files/1/0517/8146/8354/files/hero.jpg?v=1659452305"
      imageName="Abstract Art"
    />
    <Highlight />
    <Trending />
  </main>
</template>

