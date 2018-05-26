<template>
  <v-tabs
    centered
    slot="extension"
    class="select-tab-search"
    v-model="tabActive"
    :value="tabActive"
    hide-slider
    >
    <v-tab
      v-for="(item, index) in items"
      :key="index"
      :href="`#tab-${index}`"
      class="tabs-item-custom"
      active-class="active"
    >
      {{item.title}}
    </v-tab>
  </v-tabs>
</template>
<script>
export default {
  name: 'TabSearch',
  data: () => ({
    active: false,
    tabActive: null,
    items: [
      { title: 'Buy' },
      { title: 'Rent' },
      { title: 'Sold' },
    ],
  }),
  created() {
    this.tabActive = 'tab-0';
  },
};
</script>
<style lang="sass">
.select-tab-search
  .tabs__bar
    background: transparent
.tabs-item-custom
  min-width: 33.33%!important
  height: 44px
  > a
    text-transform: none
    color: #fff
    font-size: 18px
.active
  background: rgb(32, 192, 99)
  border: 1px solid #20c063
  opacity: 1!important
</style>

<style lang="sass" scoped>
.select-tab-search
  width: 270px
  background: rgba(0, 0, 0, 0.65)
  border-radius: 4px 4px 0 0
  overflow: hidden
  height: 44px

</style>
