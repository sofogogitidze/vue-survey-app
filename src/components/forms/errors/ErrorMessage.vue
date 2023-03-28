<template>
  <ErrorMessage class="text-sm text-red-500 mt-2" :name="name" />
</template>

<script>
import { ErrorMessage } from "vee-validate";
export default {
  props: ["name"],
  components: {
    ErrorMessage,
  },
};
</script>
