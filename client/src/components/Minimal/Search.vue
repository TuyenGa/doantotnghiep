<template>
  <div class="search">
    <input id="input-box" v-model="searchValue" class="search-input" type="text" placeholder="Address, Neighborhood, City, ZIP">
    <v-btn flat color="background" class="btn-search"><v-icon large>search</v-icon></v-btn>
  </div>
</template>
<script>
export default {
  name: 'Search',
  data: () => ({
    searchValue: '',
  }),
};
</script>
<style lang="sass" scoped>
.search
  height: 60px
  position: relative
  background-color: #fff
  width: 606px
  padding-left: 12px
  border-radius: 4px
  .search-input
    background-color: #fff
    height: 60px
    width: 530px
    outline: none
    text-overflow: ellipsis
    font-size: 18px
  .btn-search
    height: 49px
    position: absolute
    right: 0
    min-width: 20px

</style>
