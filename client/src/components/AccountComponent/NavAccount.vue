<template>
<div class="nav-account">
  <v-navigation-drawer height="100%" width="100%" v-model="drawer" permanent>
    <v-toolbar flat class="transparent">
      <v-list class="pa-0">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg" >
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Quang Tuyên Vương</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-list class="pt-0" dense>
      <v-divider></v-divider>
      <v-list-tile
        v-for="item in items"
        :key="item.title"
        @click="gotolink(item.link)"
        :class="{'custom-item': true, 'active-nav-item': item.active}"
        >
        <v-list-tile-content class="custom-action">
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</div>
</template>
<script>
export default {
  name: 'NavAccount',
  data() {
    return {
      drawer: true,
      items: [
        {
          title: 'Edit Profile',
          link: '/account/edit-profile',
          active: false,
        },
        {
          title: 'Rental Resume',
          link: '/account/rental-resume',
          active: false,
        },
        {
          title: 'My Roomes for Rent',
          link: '/account/room-rent',
          active: false,
        },
      ],
      right: null,
    };
  },
  created() {
    this.gotolink(this.$route.path);
  },
  methods: {
    gotolink(link) {
      let data = this.items;
      data = data.map(item => {
        item.active = item.link === link;
        return item;
      });

      this.items = data;
      if (link !== this.$route.path) {
        this.$router.push(link);
      }
    },
  },
};
</script>
<style lang="sass">
.custom-item
  a
    height: 56px!important
    margin-bottom: 8px
  .custom-action
    color: rgba(0,0,0,0.56)
    font-size: 16px
.active-nav-item
  a
    background-color: rgba(37,140,148,0.08)
    .custom-action
      color: rgba(32, 192, 99, 1)
</style>

<style lang="sass" scoped>
.nav-account
  min-width: 16.667%
  min-height: 700px

</style>
