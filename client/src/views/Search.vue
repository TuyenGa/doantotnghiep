<template>
  <div class="search-container">
    <div class="header-content">
      <Header
        :flat="true"
        :position="true"
      ></Header>
      <SearchInput></SearchInput>
    </div>
    <div class="search-content">
      <Gmap></Gmap>
    </div>
  </div>
</template>
<script>
import Header from '@/components/UIDoAn/Header';
import SearchInput from '@/components/Minimal/SearchInput';
import Gmap from '@/components/Minimal/Gmap';

export default {
  name: 'Search',
  components: {
    Header,
    SearchInput,
    Gmap,
  },
};
</script>
<style lang="sass" scoped>
.search-container
  .header-content
    display: flex
  .search-content
    padding-top: 48px
    outline: none
</style>
