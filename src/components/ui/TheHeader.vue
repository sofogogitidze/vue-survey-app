<template>
  <section class="flex justify-between border-b border-[#232323] pb-4 mb-8">
    <redberry-logo></redberry-logo>
    <p class="text-3xl leading-5 font-anonymous text-center">
      <slot></slot>
    </p>
  </section>
</template>

<script>
import RedberryLogo from "@/components/icons/RedberryLogo.vue";
export default {
  components: { RedberryLogo },
};
</script>
