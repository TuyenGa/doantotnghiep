<template>
  <div>
    <Header :flat="false"></Header>
    <div class="content">
      <div class="header-content">
        <h1 class="discover-header">
          <div>Discover a place</div>
          <div>you'll love to live</div>
        </h1>
        <div class="search-section">
          <div class="row">
            <TabSearch />
            <search></search>
          </div>
        </div>
      </div>
      <div class="container-content">
        <Content v-for="i in 3" :key="i" />
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from '@/components/UIDoAn/Header';
import Search from '@/components/Minimal/Search';
import TabSearch from '@/components/Minimal/TabSearch';
import Content from '@/components/HomeComponent/Content';
import Footer from '@/components/UIDoAn/Footer';

export default {
  name: 'Home',
  components: {
    Header,
    Search,
    TabSearch,
    Content,
    Footer,
  },
};
</script>
<style lang="sass" scoped>
.content
  flex-direction: column
  .header-content
    margin: 0 auto !important
    height: 524px
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0) 10%) 0% 0% / cover, url(https://static.trulia-cdn.com/images/homepage/header_background_v3_hd.jpg) center center no-repeat
    width: 100%
    padding: 112px 0 0 0
    background-size: cover
    &:before
      content: ""
      display: table
    .discover-header
      display: flex
      color: #FFFFFF
      font-size: 44px
      font-weight: bold
      text-shadow: rgba(0, 0, 0, 0.2) 0px 2px 2px
      margin: 12px 0 0
      flex-direction: column
      > div
        text-align: center
    .search-section
      display: flex
      align-items: center
      justify-content: center
      flex-direction: column
      .row
        display: inherit
        width: 80vw
        flex-direction: column
        align-items: center
  .container-content
    min-height: 400px
    padding: 20px 0 0 0

</style>
