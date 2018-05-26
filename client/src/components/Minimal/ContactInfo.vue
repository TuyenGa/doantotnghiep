<template>
  <div :class="{'contact-info': true, 'absolute-contact': scroll}">
    <div class="contact-property">
      <h5 class="type">Contact this property</h5>
      <div class="contact-detail-container">
        <img src="https://static.trulia-cdn.com/userimg/user_m_00_m.gif" alt="" class="thumb-img">
        <div class="sale-detail">
          <span class="sale-name">{{saleName}}</span>
          <span class="sale-phone-number">(917) 809-5786</span>
        </div>
      </div>
      <span>
        <div class="madlibsBody">
          <div>Hi, {{saleName}}</div>
          <div class="name-person">
            <div class="name-sentence">My name is</div>
            <v-text-field
              class="name-text"
              color="primary"
              label="Your Name"
              :value="yourName"
              v-model="yourName"
            ></v-text-field>
          </div>
          <div class="property-sentence">
            and I am writing to find out more about <br>
            {{address}}
          </div>
          <div class="email-sentence">
            <div class="email-sentence-text">
              I can be contacted by email at
            </div>
            <v-text-field
              label="Your Email Address"
              color="primary"
              class="email-text"
              :value="emailAddress"
              v-model="emailAddress"
            ></v-text-field>
          </div>
          <div class="phone-sentence">
            <div class="phone-sentence-text">or by phone at</div>
            <v-text-field
              class="phone-text"
              label="Your Phone Number"
              color="primary"
              v-model="phoneNumber"
            ></v-text-field>
          </div>
        </div>
      </span>
      <div class="action-viewer">
        <v-btn
          :class="{'btn-request': true, 'isClick': isClick}"
          @click="isClick = !isClick"
          color="red white--text"
        >
          Request Viewing
        </v-btn>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Contact-info',
  data() {
    return {
      isClick: true,
      saleName: 'The Eugene Leasing Team',
      yourName: 'Vuong Quang Tuyen',
      address: '250 W 50th St, New York, NY.',
      emailAddress: 'vuongquangtuyendz@gmail.com',
      phoneNumber: '',
    };
  },
  props: {
    scroll: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="sass" scoped>
.name-text, .email-text, .phone-text
  font-size: 15px
  color: #3b4144!important
.absolute-contact
  position: absolute!important
  top: 750px!important
  transform: translate(height, 0.2s)
  overflow: hidden
.contact-info
  z-index: 4
  display: inline-block
  height: auto
  min-height: 100vh
  width: 27.33%
  position: fixed
  top: 133px

  .contact-property
    padding: 15px
    padding-top: 5px
    width: 100%
    background-color: #fff
    border-bottom: 1px solid #999
    border-right: 1px solid #999
    border-left: 1px solid #999

    .type
      font-size: 20px
      margin-bottom: 12px

    .contact-detail-container
      display: flex
      vertical-align: middle
      line-height: 48px
      margin-bottom: 20px

      .thumb-img
        height: 48px
        margin-right: 21px
        width: 48px

      .sale-name
        display: block;
        line-height: 24px;
        font-size: 13px;
        font-weight: bold;

      .sale-phone-number
        display: block;
        line-height: 24px;
        font-size: 13px;

    .madlibsBody
      font-size: 15px
      line-height: 1.5
      color: #3b4144

      .name-person
        display: flex
        vertical-align: middle
        line-height: 70px

        .name-sentence
          margin-right: 20px

          .name-text
            width: 20px!important

      .phone-sentence
        display: flex
        vertical-align: middle
        line-height: 68px

      .phone-sentence-text
        margin-right: 20px
    .action-viewer
      display: flex
      justify-content: center

      .btn-request
        text-transform: capitalize
        width: 50%

</style>
