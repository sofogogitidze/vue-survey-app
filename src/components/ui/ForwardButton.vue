<template>
  <button class="absolute right-[45%] bottom-28" :type="mode">
    <img src="@/assets/right-vector.png" alt="not found" />
  </button>
</template>

<script>
export default {
  props: {
    mode: {
      type: Boolean,
      required: false,
      default: null,
    },
  },
};
</script>
