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
          src: 'https://vuetifyjs.com/static/doc-images/carousel/squirrel.jpg',
        },
        {
          src: 'https://vuetifyjs.com/static/doc-images/carousel/sky.jpg',
        },
        {
          src: 'https://vuetifyjs.com/static/doc-images/carousel/bird.jpg',
        },
        {
          src: 'https://vuetifyjs.com/static/doc-images/carousel/planet.jpg',
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
