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
      <SearchList></SearchList>
      <Gmap></Gmap>
    </div>
  </div>
</template>
<script>
import Header from '@/components/UIDoAn/Header';
import SearchInput from '@/components/Minimal/SearchInput';
import Gmap from '@/components/Minimal/Gmap';
import SearchList from '@/components/SearchDetail/SearchList';

export default {
  name: 'Search',
  components: {
    Header,
    SearchInput,
    Gmap,
    SearchList,
  },
};
</script>
<style lang="sass" scoped>
.search-container
  .header-content
    display: flex
  .search-content
    padding-top: 97px
    outline: none
    display: flex
    justify-content: flex-start
</style>
