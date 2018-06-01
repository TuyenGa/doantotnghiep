<template>
  <div class="my-room">
    <div class="title-room-for-rent">
      <div class="title-room">
        <p class="title-rent">My Rooms for Rent</p>
        <button
          @click="opendialog()"
          class="primary--text new-listing"
          >+ New Listing</button>
      </div>
      <v-divider></v-divider>
    </div>
    <div class="clearfix-my-room"></div>
    <div class="past-listing">
      <p class="past-listing-title">Past Listings</p>
      <v-divider></v-divider>
    </div>
    <DialogStepPost
      :showDialog="openModalPost"
      @closeDialog="openModalPost = false"
    ></DialogStepPost>
  </div>
</template>
<script>
import DialogStepPost from '@/components/Minimal/DialogStepPost';

export default {
  name: 'MyRoom',
  data() {
    return {
      openModalPost: false,
    };
  },
  components: {
    DialogStepPost,
  },
  methods: {
    opendialog() {
      this.openModalPost = true;
    },
  },
};
</script>
<style lang="sass" scoped>
.my-room
  display: flex;
  flex-direction: column;
  align-items:  center;
  .title-room-for-rent
    width: 70%
    .title-room
      display: flex;
      justify-content: space-between;
      padding: 20px 0 0;
      margin-top: 25px;

    .new-listing
      font-size: 15px;
      line-height: 1.5;
      margin: 5px 0;
      padding-top: 26px;
      outline: none
      &:hover
        text-decoration: underline

    p.title-rent
      margin: 0;
      font-size: 34px;
      font-weight: 500;
      line-height: 1.5;

  .clearfix-my-room
    width: 70%


  .past-listing
    padding: 20px 0;
    width: 70%;

    p.past-listing-title
      margin: 0;
      font-size: 34px;

</style>
