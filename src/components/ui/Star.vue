<template>
  <div class="star"></div>
</template>

<script>
export default {
  props: ["delay"],
};
</script>

<style scoped>
.star {
  position: absolute;
  top: 23%;
  right: 27%;
  font-size: 130px;
  -o-transform-origin: 50% 55.2%;
  -ms-transform-origin: 50% 55.2%;
  -webkit-transform-origin: 50% 55.2%;
  -moz-transform-origin: 50% 55.2%;
  transform-origin: 50% 55.2%;
  -ms-transform: translate(-50%, -55.2%) rotate(25deg);
  -webkit-transform: translate(-50%, -55.2%) rotate(25deg);
  transform: translate(-50%, -55.2%) rotate(25deg);
  border-bottom: 0.4em solid #d0d488;
  border-left: 0.951em solid transparent;
  border-right: 0.988em solid transparent;
  opacity: 0.7;
}
.star:before,
.star:after {
  content: "";
  position: absolute;
  display: block;
  -o-transform-origin: 50% 55.2%;
  -ms-transform-origin: 50% 55.2%;
  -webkit-transform-origin: 50% 55.2%;
  -moz-transform-origin: 50% 55.2%;
  transform-origin: 50% 55.2%;
  border-bottom: 0.691em solid #d0d488;
  border-left: 0.951em solid transparent;
  border-right: 0.951em solid transparent;
}
.star:before {
  -ms-transform: translate(-50%, 0) rotate(-72deg);
  -webkit-transform: translate(-50%, 0) rotate(-72deg);
  transform: translate(-50%, 0) rotate(-72deg);
}
.star:after {
  -ms-transform: translate(-50%, 0) rotate(72deg);
  -webkit-transform: translate(-50%, 0) rotate(72deg);
  transform: translate(-50%, 0) rotate(72deg);
}
</style>
