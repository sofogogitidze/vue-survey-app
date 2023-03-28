<template>
  <section class="bg-[#eaeaea]">
    <section class="p-28 h-screen">
      <the-header>1/4</the-header>
      <section class="flex h-full justify-between">
        <section class="h-2/3 w-1/2 flex flex-col">
          <first-step-form></first-step-form>
          <div class="mt-16 border-t-2 border-gray-300 w-1/3">
            <p class="mt-4 text-gray-400 font-normal">
              *-ით მონიშნული ველების შევსება სავალდებულოა
            </p>
          </div>
        </section>
        <section>
          <transition appear>
            <div class="animated delay"></div>
          </transition>
          <img class="w-full h-full mt-[-60px]" src="@/assets/first-img.png" />
        </section>
      </section>
    </section>
  </section>
</template>

<script>
import TheHeader from "@/components/ui/TheHeader.vue";
import FirstStepForm from "@/components/forms/FirstStepForm.vue";

export default {
  components: {
    TheHeader,
    FirstStepForm,
  },
};
</script>

<style scoped>
.animated {
  width: 600px;
  height: 50px;
  background-color: rgb(217, 222, 61);
  position: absolute;
  top: 35%;
  right: 13%;
  opacity: 0.8;
}

.delay {
  transition-delay: 1s;
}

.v-enter-from {
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

.v-enter-active {
  transition: all 0.5s ease-out;
}
</style>
