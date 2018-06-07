<template>
  <div class="content-account">
    <EditProfile
      v-if="type === 'edit-profile'"
      :publicResume="publicResume"
      :userTypes="userTypes"
      :getInfo="getInfo"
      :emailEdit="emailEdit"
      :changeAvatar="changeAvatar"
      :emailAddress="emailAddress"
    ></EditProfile>
    <RentalResume
      v-else-if="type === 'rental-resume'"
    ></RentalResume>
    <MyRoomForRent
      v-else-if="type === 'room-rent'"
    ></MyRoomForRent>
  </div>
</template>
<script>
import EditProfile from '@/components/AccountComponent/EditProfile';
import RentalResume from '@/components/AccountComponent/RentalResume';
import MyRoomForRent from '@/components/AccountComponent/MyRoomForRent';

export default {
  name: 'ContentAccount',
  data() {
    return {
      publicResume: true,
      emailEdit: false,
      changeAvatar: false,
      emailAddress: 'Vuongquangtuyendz@gmail.com',

    };
  },
  props: {
    type: {
      type: String,
    },
  },
  computed: {
    getInfo() {
      return this.$store.getters['account/getInfo'];
    },
  },
  components: {
    EditProfile,
    RentalResume,
    MyRoomForRent,
  },
};
</script>
<style lang="sass" scoped>
.content-account
  width: 83.33333333%
  padding-top: 8px
  padding-left: 30px
  padding-right: 30px
  background-color: #efefef
  min-height: 700px
</style>

