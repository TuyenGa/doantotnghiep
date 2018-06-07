<template>
  <div class="list-detail-view">
    <SlideHome v-for="i in 6" :key="i">
      <SlideHomeItem v-for="i in 2" :key="i" :dataDetail="dataDetail"></SlideHomeItem>
    </SlideHome>
    <Footer></Footer>
  </div>
</template>
<script>
import SlideHome from '@/components/Minimal/SlideHome';
import SlideHomeItem from '@/components/Minimal/SlideHomeItem';
import Footer from '@/components/UIDoAn/Footer';

export default {
  name: '',
  data() {
    return {
      dataDetail: null,
    };
  },
  components: {
    SlideHome,
    SlideHomeItem,
    Footer,
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
.list-detail-view
  width: 50%

</style>
