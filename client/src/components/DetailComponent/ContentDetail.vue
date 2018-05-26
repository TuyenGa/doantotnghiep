<template>
  <div class="container-content-detail">
    <HomeDetail></HomeDetail>
    <div class="divider-inline">
      <v-divider></v-divider>
    </div>
    <ExploreMoreHome></ExploreMoreHome>
    <div class="divider-inline">
      <v-divider></v-divider>
    </div>
  </div>
</template>
<script>
import HomeDetail from '@/components/DetailComponent/HomeDetail';
import ExploreMoreHome from '@/components/DetailComponent/ExploreMoreHome';

export default {
  name: 'Content-Detail',
  components: {
    HomeDetail,
    ExploreMoreHome,
  },
};
</script>
<style lang="sass" scoped>
  .container-content-detail
    width: 60%
    margin-left: 60px
    padding-left: 20px
    padding-top: 10px
    .divider-inline
      margin-left: 20px
      margin-right: 20px
      margin-bottom: 20px
</style>
