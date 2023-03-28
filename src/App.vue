<template>
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<script></script>

<style>
@font-face {
  font-family: bpgArial;
  src: url("@/fonts/bpg_arial_2009.ttf");
}

* {
  font-family: bpgArial;
}

.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.route-leave-active {
  transition: all 0.3s ease-in;
}
</style>
