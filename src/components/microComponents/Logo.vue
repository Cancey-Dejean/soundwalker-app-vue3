<template>
  <img class="image" :src="imageSrc" :alt="`${imageName} picture`" />
</template>

<script>
export default {
  name: "Logo",
  props: {
    imageSrc: String,
    imageName: String,
  },
};
</script>
