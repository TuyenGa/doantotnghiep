<template>
  <div :class="{'new-navbar': true, 'detail-new-navbar': position}">
    <header class="global-nav">
      <nav class="nav-global-header">
        <div :class="{'clearfix': true,  'nav-content': true, 'detail-nav': flat}">
          <div class="list-menu-drop-down" >
            <v-btn
              @click="goto('/home')"
              flat
              class="white--text"
            >
              Home
            </v-btn>
            <nav-item city="Hà Nội" title="Buy" :items="buyDatas" />
            <nav-item city="Hà Nội" title="Rent" :items="rentDatas" />
            <nav-item city="Hà Nội" title="Local Scoop" :items="localScoop"/>
          </div>
          <div class="user-detail">
            <div class="avatar-detail">
              <v-btn
                v-if="isLogin"
                class="btn-login"
                @click="openDialog()"
              >
                Signin
              </v-btn>
              <nav-item
                v-else-if="!isLogin"
                :items="profile"
                title="Quang Tuyên"
              />
            </div>
          </div>
        </div>
        <Login
          :showDialog="showDialog"
          @closeDialog="showDialog = false"
          @loginDone="isLogin = false"
          @register="isRegister = true"
        />
      </nav>
    </header>
  </div>
</template>
<script>
import NavItem from '@/components/Minimal/NavItem';
import Login from '@/components/Authentication/Login';

export default {
  name: 'Header',
  components: {
    'nav-item': NavItem,
    Login,
  },
  data: () => ({
    isLogin: false,
    isRegister: false,
    showDialog: false,
    buyDatas: [
      { title: 'Home for sale', link: '/detail' },
      { title: 'Open Houses', link: '/detail' },
      { title: 'New Home', link: '/detail' },
    ],
    rentDatas: [
      { title: 'All Rentals', link: '/detail' },
      { title: 'Apartment for Rent', link: '/detail' },
      { title: 'Room for Rent', link: '/detail' },
    ],
    localScoop: [
      { title: 'Real Estate Overview', link: '/detail' },
      { title: 'Market Trends', link: '/detail' },
      { title: 'School', link: '/detail' },
    ],
    profile: [
      { title: 'Profile', link: '/account/edit-profile' },
      { title: 'Rental Resume', link: '/account/rental-resume' },
      { title: 'My Room for Rent', link: '/account/room-rent' },
    ],
  }),
  props: {
    flat: {
      type: Boolean,
    },
    position: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    goto(link) {
      this.$router.push(link);
    },
    openDialog() {
      this.showDialog = true;
    },
  },
};
</script>
<style lang="sass" scoped>
.detail-new-navbar
  position: fixed!important
  z-index: 100
.new-navbar
  position: absolute
  width: 100%
  .detail-nav
    background-color: #20c063
  .nav-content
    display: flex
    justify-content: space-between
    height: 48px
    .list-menu-drop-down
      display: flex
    .user-detail
      .avatar-detail
        height: 48px
        text-align: center
.btn-login
  text-transform: capitalize;
</style>
