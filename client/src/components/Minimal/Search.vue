<template>
  <div class="search">
    <input
      id="input-box"
      v-model="searchValue"
      class="search-input"
      type="text"
      placeholder="Address, Neighborhood, City"
      @keypress.enter="searching()"
    />
    <v-btn
      flat
      color="background"
      @click="searching()"
      class="btn-search"
    ><v-icon large>search</v-icon></v-btn>
  </div>
</template>
<script>
export default {
  name: 'Search',
  data: () => ({
    searchValue: '',
  }),
  methods: {
    searching() {
      this.$store.dispatch('detail/getListDetail', {cateType: 2, address: this.searchValue});
      this.$router.push('/search');
    }
  },
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
