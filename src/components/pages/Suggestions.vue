<template>
  <div class="bg-[#eaeaea]">
    <div class="p-28 h-screen">
      <the-header>4/4</the-header>
      <div class="flex w-full h-full justify-between">
        <section class="w-2/4 flex flex-col">
          <div class="w-4/5 h-full text-start overflow-auto no-scrollbar">
            <suggestions-text></suggestions-text>
            <suggestions-form></suggestions-form>
          </div>
        </section>
        <section>
          <transition appear>
            <div class="heart-shape delay"></div>
          </transition>
          <img class="w-[780px] h-full" src="@/assets/bike.png" />
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from "@/components/ui/TheHeader.vue";
import SuggestionsForm from "@/components/forms/SuggestionsForm.vue";
import SuggestionsText from "@/components/texts/SuggestionsText.vue";
import Star from "@/components/ui/Star.vue";

export default {
  components: {
    TheHeader,
    SuggestionsForm,
    SuggestionsText,
    Star,
  },
};
</script>

<style scoped>
.heart-shape {
  position: absolute;
  right: 32%;
  top: 30%;
  width: 130px;
  height: 120px;
  -webkit-transform: rotate(30deg);
  -moz-transform: rotate(30deg);
  -ms-transform: rotate(30deg);
  -o-transform: rotate(30deg);
  transform: rotate(30deg);
  background-color: rgba(243, 148, 148, 255);
  opacity: 0.7;
}
.heart-shape:before,
.heart-shape:after {
  position: absolute;
  width: 130px;
  height: 120px;
  content: "";
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -o-border-radius: 50%;
  border-radius: 50%;
  background-color: rgba(243, 148, 148, 255);
}
.heart-shape:before {
  bottom: 0px;
  left: -55px;
}
.heart-shape:after {
  top: -55px;
  right: 0px;
}

.delay {
  transition-delay: 1s;
}

.v-enter-from {
  opacity: 0.7;
  background-color: rgba(243, 148, 148, 255);
  border-radius: 50%;
  width: 180px;
  height: 180px;
  opacity: 0.7;
  position: absolute;
  top: 20%;
  right: 34%;
}

.v-enter-active {
  transition: all 0.5s ease-out;
}
</style>
