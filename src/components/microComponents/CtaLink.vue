<template>
  <a
    href="#"
    class="
      inline-block
      font-title
      text-[32px]
      italic
      tracking-[1px]
      uppercase
      text-title
    "
    >{{ text }}</a
  >
</template>

<script>
export default {
  name: "Cta",
  props: {
    href: String,
    text: String,
  },
};
</script>
