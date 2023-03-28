<template>
  <div class="h-screen p-28 bg-[#eaeaea] overflow-hidden">
    <the-header>2/4</the-header>
    <div class="flex justify-between h-full">
      <section class="w-2/5">
        <second-step-form></second-step-form>
      </section>
      <section class="w-3/5">
        <transition appear>
          <div class="animated delay"></div>
        </transition>
        <img class="h-full w-full" src="@/assets/second-step.png" />
      </section>
    </div>
  </div>
</template>

<script>
import TheHeader from "@/components/ui/TheHeader.vue";
import SecondStepForm from "@/components/forms/SecondStepForm.vue";

export default {
  components: {
    TheHeader,
    SecondStepForm,
  },
};
</script>

<style scoped>
.animated {
  opacity: 0.7;
  background-color: red;
  border-radius: 50%;
  width: 180px;
  height: 180px;
  opacity: 0.7;
  position: absolute;
  top: 40%;
  right: 43%;
}

.delay {
  transition-delay: 1s;
}

.v-enter-from {
  width: 600px;
  height: 50px;
  background-color: rgb(217, 222, 61);
  position: absolute;
  top: 35%;
  right: 13%;
  opacity: 0.8;
}

.v-enter-active {
  transition: all 0.5s ease-out;
}
</style>
