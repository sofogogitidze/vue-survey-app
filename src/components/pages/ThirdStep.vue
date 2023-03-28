<template>
  <div class="h-screen p-28 bg-[#eaeaea]">
    <the-header>3/4</the-header>
    <div class="flex justify-between h-full">
      <section class="w-2/4">
        <third-step-form></third-step-form>
      </section>
      <section class="w-2/4">
        <transition appear>
          <star></star>
        </transition>
        <img class="h-full w-full" src="@/assets/doctor2.png" alt="not found" />
      </section>
    </div>
  </div>
</template>

<script>
import TheHeader from "@/components/ui/TheHeader.vue";
import ThirdStepForm from "@/components/forms/ThirdStepForm.vue";
import Star from "@/components/ui/Star.vue";

export default {
  components: {
    TheHeader,
    ThirdStepForm,
    Star,
  },
};
</script>

<style scoped>
.v-enter-from {
  opacity: 0.7;
  background-color: transparent;
  border-radius: 50%;
  width: 180px;
  height: 180px;
  opacity: 0.7;
  position: absolute;
  top: 40%;
  right: 43%;
}

.v-enter-active {
  transition: all 0.5s ease-out;
}
</style>
