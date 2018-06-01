<template>
  <div class="edit-profile">
      <div class="title-content-account">
        <p class="title-edit-profile">Edit Profile</p>
        <span class="joined">Joined Apr 10, 2018</span>
      </div>
      <v-divider></v-divider>
      <div class="content-account-detail">
        <div class="upload-profile-avatar">
          <div class="avatar-profile">
            <a @click="changeAvatar = !changeAvatar" v-if="!changeAvatar">
              <img src="https://randomuser.me/api/portraits/men/85.jpg" alt="">
            </a>
          </div>
          <UploadFile classes="custom-upload-file" v-if="false"></UploadFile>
          <div class="description-profile">
            <p class="title-profile">
              Who can see my profile?
            </p>
            <p class="detail">
              Your profile is private.
              If you have a <a @click="gotoResume()" class="rent-resume">Rental Resume</a>,
                use its share setting to send it with rental inquiries.
                No one else will see it.
            </p>
          </div>
        </div>
        <div class="profile-form">
          <div class="email-password" v-if="emailEdit === true">
            <v-text-field
              label="Email"
              v-model="emailAddress"
            ></v-text-field>
            <v-text-field
              label="Password"
              type="password"
            ></v-text-field>

          </div>
          <div class="email-password-false" v-if="emailEdit === false">
            <label for="email" class="email-label">Email</label>
            <p class="email-address">
              {{emailAddress}}
            </p>
            <span @click="emailEdit = !emailEdit" class="edit-email-address">
              Edit
            </span>
            <label for="email" class="email-label">Password</label>
            <p class="email-address">
              ******
            </p>
            <span class="edit-email-address">
              Edit
            </span>
          </div>
          <div class="full-name-input">
            <v-text-field
              name="name"
              label="Your Full Name"
              v-model="yourName"
            ></v-text-field>
          </div>
          <div class="phone-number">
            <v-text-field
              name="phoneNumber"
              label="Phone"
              v-model="phoneNumber"
            ></v-text-field>
          </div>
          <div class="home-buyer">
            <v-select
              :items="userTypes"
              label="User type"
              v-model="userTypeItem"
            ></v-select>
          </div>
          <div class="location">
            <v-text-field
              name="Location"
              label="Location"
              v-model="address"
            ></v-text-field>
          </div>
          <div class="public-resume">
            <v-switch class="select-public-resume" color="primary" v-model="publicResume"></v-switch>
            <div class="label-public-resume">
              <p class="label-resume">
                  Send Rental inquires with 1-Click
              </p>
              <div class="description-resume">
                  When checked, we'll automatically resend the same info from your last inquiry
              </div>
            </div>
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
          @click="changeProfile()"
        >Save Profile</v-btn>
      </div>
    </div>
</template>
<script>
import UploadFile from '@/components/Minimal/UploadFile';

export default {
  name: 'EditProfile',
  methods: {
    changeProfile() {
      this.emailEdit = false;
    },
    gotoResume() {
      this.$router.push('/account/rental-resume');
    },
  },
  data() {
    return {
      profile: {
        emailAddress: '',
        yourName: '',
        phoneNumber: '',
        userTypesItem: null,
        address: '',
        publicResume: false,
      },
    };
  },
  props: {
    userTypes: {
      type: Array,
    },
    publicResume: {
      type: Boolean,
    },
    emailEdit: {
      type: Boolean,
    },
    changeAvatar: {
      type: Boolean,
    },
    emailAddress: {
      type: String,
    },
  },
  components: {
    UploadFile,
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

.edit-profile
  .title-content-account
    display: flex
    justify-content: space-between
    .title-edit-profile
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
  .content-account-detail
    display: flex
    padding-top: 20px
    .upload-profile-avatar
      width: 33.33%
      .avatar-profile
        padding-left: 20px
        img
          border-radius: 50%

      .description-profile
        .title-profile
          padding: 0 20px;
          margin-top: 12px;
          font-weight: 700;
        .detail
          padding: 0 20px 20px 20px
          .rent-resume
            text-decoration: unset
            &:hover
              text-decoration: underline

    .profile-form
      width: 66.67%
      .email-password-false
        .email-address
          display: inline-block
        .email-label
          @extend %label-title
        .edit-email-address
          color: #228959;
          font-size: 15px;
          line-height: 1.5;
          margin: 5px 10px;
          cursor: pointer;
      .public-resume
        display: flex;
        margin-top: 20px
        margin-bottom: 20px

        p.label-resume
          font-weight: 700;
          margin: 0;
          display: table-cell;

        .description-resume
          color: #869099;
          font-size: 14px;
.action-button
  display: flex
  justify-content: flex-end
  padding: 20px 20px 20px 0
  .btn-action
    text-transform: capitalize;
    box-shadow: none;
.custom-upload-file
  margin-left: 20px
</style>
