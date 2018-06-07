<template>
  <div class="carousel-content">
    <v-carousel class="carousel-item">
      <v-carousel-item v-for="(item,i) in items" :src="item.src" :key="i"></v-carousel-item>
    </v-carousel>
  </div>
</template>
<script>
export default {
  name: 'Carousel',
  data() {
    return {
      items: [
        {
          src: 'http://thumbs.trulia-cdn.com/pictures/thumbs_6/zillowstatic/ISecasimvydi6l0000000000.jpg',
        },
        {
          src: 'http://thumbs.trulia-cdn.com/pictures/thumbs_6/zillowstatic/ISyj5tc4quisak0000000000.jpg',
        },
        {
          src: 'http://thumbs.trulia-cdn.com/pictures/thumbs_6/zillowstatic/IS6yxanrbjv8nm0000000000.jpg',
        },
        {
          src: 'http://thumbs.trulia-cdn.com/pictures/thumbs_6/zillowstatic/IS668g0grq5l6l0000000000.jpg',
        },
      ],
    };
  },
};
</script>
<style lang="sass" scoped>
.carousel-item
  width: 80%
  top: 133px
  margin: 0 auto 20px
  height: 400px
  box-shadow: 0 2px 4px rgba(51,51,51,.4)
</style>
