<template>
  <div class="slide-home">
    <div class="header-slide-home">
      Homes you looked at
    </div>
    <div class="temp-slide"></div>
    <div class="carousel-container">
      <SlideHome>
        <SlideHomeItem v-for="i in 4" :key="i" :dataDetail="dataDetail" />
      </SlideHome>
    </div>
    <div class="temp-slide"></div>
  </div>
</template>
<script>
import SlideHome from '@/components/Minimal/SlideHome';
import SlideHomeItem from '@/components/Minimal/SlideHomeItem';

export default {
  name: 'ContentHome',
  data() {
    return {
      dataDetail: null,
    };
  },
  components: {
    SlideHome,
    SlideHomeItem,
  },
  created() {
    this.$store.dispatch('detail/getListDetail', {cateType: 1});
  },
  watch: {
    detail() {
      this.detail.map(item => {
        this.dataDetail = item;
      });
    },
  },
  computed: {
    detail() {
      return this.$store.getters['detail/getListDetail'];
    },
  },
};
</script>
<style lang="sass" scoped>
.slide-home
  .header-slide-home
    font-size: 20px
    font-weight: 500
    color: rgb(71, 78, 82)
    margin-left: 4.16667%
  .temp-slide
    font-size: 15px
    color: rgb(134, 144, 153)
    padding-bottom: 20px
    margin-left: 4.16667%
  .carousel-container
    width: 100%
    min-height: 265px
</style>
