<template>
  <header class="fixed top-0 left-0 z-[10] w-full py-[36px]">
    <div class="container">
      <div class="flex items-center justify-between">
        <Logo
          imageSrc="https://cdn.shopify.com/s/files/1/0517/8146/8354/files/logo.svg?v=1659452305"
        />

        <nav class="flex">
          <ul class="flex items-center">
            <li>
              <a
                href="#"
                class="
                  uppercase
                  inline
                  pt-[14px]
                  pb-[10px]
                  px-[14px]
                  mr-[30px]
                  font-title
                  italic
                  text-title text-[25px]
                  tracking-[1px]
                "
                >Sign in</a
              >
            </li>
            <li>
              <a
                href="#"
                class="
                  uppercase
                  inline
                  pt-[14px]
                  pb-[10px]
                  px-[26px]
                  font-title
                  italic
                  text-[25px]
                  bg-primary
                  tracking-[1px]
                  leading-[1px]
                  text-[#fff]
                "
                >Create account</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from "./microComponents/Logo.vue";
export default {
  name: "Header",
  components: { Logo },
};
</script>
