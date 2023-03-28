<template>
  <div class="flex justify-center items-center h-screen bg-[#eaeaea]">
    <div class="h-[300px] flex w-[165px] flex-col">
      <section class="flex justify-center mb-12">
        <transition name="image" appear>
          <main-logo></main-logo>
        </transition>
      </section>
      <section>
        <transition name="text" appear>
          <p class="font-medium text-center text-3xl delay">
            <router-link to="/first-step"
              ><p class="txt">კითხვარის დაწყება</p></router-link
            >
          </p>
        </transition>
      </section>
    </div>
  </div>
</template>

<script>
import MainLogo from "@/components/icons/MainLogo.vue";
export default {
  components: { MainLogo },
};
</script>

<style scoped>
.image-enter-from {
  scale: 18;
}

.image-enter-active {
  transition: all 0.7s ease-out;
}

.image-enter-to {
  scale: 1;
}

.text-enter-from {
  opacity: 0;
  transform: translateY(-50px);
}

.text-enter-active {
  transition: all 0.5s ease-out;
}

.delay {
  transition-delay: 1.5s;
}

.text-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.txt:hover {
  text-shadow: 3px 2px rgb(255, 255, 255);
  font-weight: bold;
}
</style>
