<template>
  <section>
    <div class="container px-0">
      <div class="grid grid-cols-2">
        <HighlightCard
          tag="TOP ECLECTIC Sounds"
          title="Next Equinox Surfer"
          cursive="How to manage"
          imageSrc="https://cdn.shopify.com/s/files/1/0517/8146/8354/files/cd-cover-2.png?v=1659728793"
          altText="CD cover"
        />

        <HighlightCard
          tag="Top 20 on Soundwalker"
          title="Massive Attack revival"
          cursive="Future Proof"
          imageSrc="https://cdn.shopify.com/s/files/1/0517/8146/8354/files/cd-cover-1.png?v=1659452305"
          altText="CD image"
        />
      </div>
    </div>
  </section>
</template>

<script>
import HighlightCard from "./microComponents/HighlightCard.vue";
export default {
  name: "Highlight",
  components: { HighlightCard },
};
</script>
