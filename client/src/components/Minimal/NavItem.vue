<template>
  <div class="nav-menu">
    <v-menu content-class="menu-custom" offset-y bottom open-on-hover close-delay=0 >
      <v-btn flat color="white--text" class="btn-offset-menu" slot="activator" dark >{{title}}</v-btn>
      <v-list>
        <v-list-tile v-if="city !== undefined">
          <header class="custom-title-list">{{city}}</header>
        </v-list-tile>
        <v-list-tile v-for="item in items" :key="item.title" @click="goto(item.link)">
          <v-list-tile-title class="custom-title-list">{{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </div>
</template>
<script>
export default {
  name: 'NavItem',
  props: {
    items: {
      type: Array,
      default: [],
    },
    checkProfile: {
      type: Boolean,
      default: false,
    },
    city: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
  },
  methods: {
    goto(link) {
      if (this.checkProfile === false) {
        this.$store.dispatch('detail/getListDetail', 2);
        this.$router.push('/search');
      } else if (this.checkProfile === true) {
        this.$router.push(link);
      }
    },
  },
};
</script>
<style lang="sass">
.menu-custom
  top: 49px!important
  .list > div > a
    height: 34px
    text-align: left
    white-space: nowrap
    padding: 0 12px
    font-size: 14px
    line-height: 34px
    color: #5c6872
  .list
    .list__tile
      height: 34px
      padding: 0 12px
      .custom-title-list
        display: block
        white-space: nowrap
        height: inherit
        line-height: 34px
        width: 100%
        text-align: left
      header
        color: #3b4144
        font-size: 15px
</style>

<style lang="sass" scoped>
.nav-menu
  height: 48px
  text-align: center
  .btn-offset-menu
    text-transform: none
    min-width: auto
    &:hover
      background-color: #10A75F!important

</style>
