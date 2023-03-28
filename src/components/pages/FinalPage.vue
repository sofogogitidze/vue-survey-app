<template>
  <div class="">
    <transition name="bg" appear>
      <div
        class="h-screen flex flex-col justify-center items-center bg-[#232323]"
      >
        <transition name="upper_star" appear>
          <upper-star></upper-star>
        </transition>
        <transition name="text" appear>
          <p class="text-white text-6xl font-bold text-delay">მ ა დ ლ ო ბ ა</p>
        </transition>
        <transition name="lower_star" appear>
          <lower-star></lower-star>
        </transition>
      </div>
    </transition>
  </div>
</template>

<script>
import LowerStar from "@/components/icons/LowerStar.vue";
import UpperStar from "@/components/icons/UpperStar.vue";

export default {
  mounted() {
    localStorage.clear();
  },
  components: { LowerStar, UpperStar },
};
</script>

<style scoped>
.bg-enter-from {
  scale: 0.1;
}

.bg-enter-active {
  transition: all 0.7s ease-out;
}

.bg-enter-to {
  scale: 1;
}

.text-enter-from {
  opacity: 0;
}

.text-enter-active {
  transition: all 0.3s ease-out;
}

.text-enter-to {
  opacity: 1;
}

.text-delay {
  transition-delay: 1s;
}

.upper_star-enter-from {
  opacity: 0;
  transform: translate(15px, 70px);
}

.upper_star-enter-active {
  transition: all 0.5s ease-out;
}

.upper_star-delay {
  transition-delay: 1.5s;
}

.lower_star-enter-from {
  opacity: 0;
  transform: translate(15px, -70px);
}

.lower_star-enter-active {
  transition: all 0.5s ease-out;
}

.lower_star-delay {
  transition-delay: 1.5s;
}
</style>
