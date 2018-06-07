<template>
  <div class="inner-carousel">
    <ul class="carousel-list">
      <slot></slot>
    </ul>
  </div>
</template>
<script>

export default {
  name: 'Slide-Home',
};
</script>
<style lang="sass" scoped>
.inner-carousel
  margin-top: 14px;
  overflow-x: hidden;
  width: 100%;
  height: auto;
  .carousel-list
    width: auto
    will-change: transform
    transition: transform .45s ease-out
    float: none
    margin-left: 4.16667%
    flex-direction: row
    display: flex
</style>
