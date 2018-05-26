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
  overflow-x: hidden
  width: inherit
  height: auto
  .carousel-list
    width: auto
    will-change: transform
    transition: transform .45s ease-out
    float: none
    margin-left: 4.16667%
    flex-direction: row
    display: flex
</style>
