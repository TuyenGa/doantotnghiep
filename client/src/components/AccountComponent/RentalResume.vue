<template>
  <div class="rent-resume">
      <div class="title-content-account">
        <p class="title-rent-resume">Rental Resume</p>
        <span class="joined">Joined Apr 10, 2018</span>
      </div>
      <v-divider></v-divider>
      <div class="content-rent-resume">
        <div class="upload-profile-avatar">
          <p class="user-detail">Vuong Quang Tuyen</p>
          <p class="user-detail">Renter in New York, NY</p>
          <p class="user-detail">vuongquangtuyendz@gmail.com</p>

          <a @click="gotoEdit()" class="go-to-profile">Edit profile settings</a>
          <v-divider></v-divider>
        </div>
        <div class="profile-form">
          <div class="move-in-date mrRight">
              <label class="label-title"></label>
               <v-select
                :items="moveInDate"
                label="Move In Date"
                single-line
              ></v-select>
            </div>
            <div class="moving-form mrRight">
              <v-text-field
                label="Moving from"
              ></v-text-field>
            </div>
            <div class="tenants mrRight">
              <label class="label-title"></label>
                <v-select
                :items="moveInDate"
                label="Tenats"
                single-line
              ></v-select>
            </div>
            <div class="pets mrRight">
              <label class="label-title"></label>
                <v-select
                :items="moveInDate"
                label="Pets"
                single-line
              ></v-select>
            </div>
            <div class="smoking mrRight">
              <label class="label-title"></label>
                <v-select
                :items="moveInDate"
                label="Smoking"
                single-line
              ></v-select>
            </div>
            <div class="tenants mrRight">
              <label class="label-title"></label>
                <v-select
                :items="moveInDate"
                label="Income, All Tenants"
                single-line
              ></v-select>
            </div>
            <div class="credit mrRight mrBottom">
              <label class="label-title"></label>
                <v-text-field
                  label="Job Title"
                ></v-text-field>
            </div>
        </div>
      </div>
      <v-divider></v-divider>
      <div class="action-button">
        <v-btn
          class="btn-action"
          color="white"
        >Cancel</v-btn>
        <v-btn
          class="btn-action"
          color="red white--text"
        >Save Rental Resume</v-btn>
      </div>
    </div>
</template>
<script>
export default {
  name: 'RentalResume',
  data() {
    return {
      moveInDate: [
        {
          text: 'Immediately',
        },
        {
          text: 'Within the next week',
        },
        {
          text: 'Within the next month',
        },
        {
          text: 'Let\'s talk about it',
        },
        {
          text: 'Unspecified',
        },
      ],
    };
  },
  methods: {
    gotoEdit() {
      this.$router.push('/account/edit-profile');
    },
  },
};
</script>
<style lang="sass" scoped>
%label-title
  margin-bottom: 2px;
  min-height: 1px;
  display: block;
  color: #869099;
  font-size: 14px;
  text-transform: uppercase;
.mrRight
  margin-right: 20px
.mrBottom
  margin-bottom: 10px
.rent-resume
  .title-content-account
    display: flex
    justify-content: space-between
    .title-rent-resume
      font-size: 34px;
      margin: 5px 0;
      line-height: 1.4;
      font-weight: 400;
      vertical-align: middle
    .joined
      padding-top: 30px;
      font-size: 15px;
      line-height: 1.5;
      color: #869099;
  .content-rent-resume
    display: flex
    padding-top: 20px
    .upload-profile-avatar
      margin-top: 26px
      width: 33.33%
      .user-detail
        margin: 0
        font-size: 15px;
        line-height: 1.5;
        color: #3b4144;
      .go-to-profile
        margin: 20px 0
        display: inline-block
        &:hover
          text-decoration: underline
    .profile-form
      width: 66.67%
      padding-left: 20px
.action-button
  display: flex
  justify-content: flex-end
  padding: 20px 20px 20px 0
  .btn-action
    text-transform: capitalize;
    box-shadow: none;
</style>
