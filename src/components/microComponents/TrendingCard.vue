<template>
  <div
    class="
      group
      relative
      flex flex-col
      pt-[50px]
      pl-[60px]
      bg-card-hover
      bg-[length:0_100%]
      hover:bg-[length:100%_100%]
      bg-no-repeat
      transition-all
      duration-[.6s]
      overflow-hidden
      hover:shadow-[0_35px_56px_rgba(98,60,234,0.1)]
      z-[1]
    "
  >
    <div class="relative z-[2]">
      <!-- Top -->
      <div class="relative z-[2] flex gap-x-[30px] mb-[50px]">
        <div class="relative w-[50%]">
          <p
            class="
              absolute
              z-[1]
              top-[33px]
              left-0
              text-[12px]
              uppercase
              text-title
            "
          >
            {{ tag }}
          </p>
          <div
            class="
              text-[250px]
              leading-[1]
              font-title
              text-primary
              opacity-7
              font-normal
            "
          >
            {{ number }}
          </div>
        </div>

        <div class="relative overflow-hidden">
          <img
            class="w-[55%] h-full object-cover object-left ml-auto"
            :src="imageUrl"
            loading="lazy"
            :alt="altText"
          />
        </div>
      </div>

      <!-- Text -->
      <div class="relative z-[2] mb-[40px]">
        <h4
          class="
            font-title
            italic
            text-[2rem]
            leading-4
            tracking-[1px]
            text-title
            mb-5
          "
        >
          {{ title }}
        </h4>

        <p class="font-body max-w-[250px] text-title">{{ desc }}</p>
      </div>

      <!-- PlayShare -->
      <div
        class="
          relative
          z-[2]
          flex
          items-center
          justify-between
          gap-x-[30px]
          pb-[30px]
          pr-[30px]
          font-title font-[300]
          uppercase
          text-[20px]
          tracking-[2px]
          leading-4
          opacity-0
          transition-all
          duration-[.3s]
          ease-in-out
          group-hover:opacity-100 group-hover:delay-[.3s]
        "
      >
        <button
          type="button"
          class="
            flex
            items-center
            gap-x-[15px]
            max-w-[65px]
            uppercase
            tracking-[2px]
          "
        >
          <span class="pt-[5px]">Listen</span>
          <img
            class="max-w-[10px]"
            src="../../assets/images/trend-play.svg"
            alt=""
          />
        </button>

        <a href="#" class="pt-[5px]">Share</a>
      </div>
    </div>

    <div
      class="
        absolute
        bottom-0
        left-0
        z-[2]
        h-[3px]
        bg-primary
        max-w-[0]
        w-full
        opacity-0
        group-hover:opacity-100
        group-hover:max-w-[417px]
        group-hover:transition-ease-in-out
        group-hover:duration-[1s]
      "
    ></div>
  </div>
</template>

<script>
export default {
  name: "TrendingCard",
  props: {
    tag: String,
    number: String,
    imageUrl: String,
    altText: String,
    title: String,
    desc: String,
  },
};
</script>
