<template>
  <v-footer height=auto width="100%">
    <v-card flat tile width="100%"  class="footercolor custom-card">
      <v-card-title class="footercolor white--text">
        <strong class="subheading">Get connected with us on social networks!</strong>
        <v-spacer></v-spacer>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          icon
          dark
          class="mx-3"
        >
          <v-icon size="24px" >{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text class="footercolor white--text lighten-3">
        <v-layout>
          <v-flex
            v-for="(col, i) in rows"
            :key="i"
            xs3
          >
            <span class="body-2 header-content-footer" v-text="col.title"></span>
            <div
              v-for="(child, i) in col.children"
              :key="i"
              class="child-style"
              v-text="child"
            ></div>
          </v-flex>
          <v-flex xs3 layout column>
            <span class="body-2">CONTACT</span>
            <div>
              <v-icon size="18px" color="white" class="mr-3">fas fa-home</v-icon>
              New York, NY 10012, US
            </div>
            <div>
              <v-icon size="18px" color="white" class="mr-3">fas fa-envelope</v-icon>
              info@example.com
            </div>
            <div>
              <v-icon size="18px" color="white" class="mr-3">fas fa-phone</v-icon>
              + 01 234 567 88
            </div>
            <div>
              <v-icon size="18px" color="white" class="mr-3">fas fa-print</v-icon>
              + 01 234 567 89
            </div>
          </v-flex>
        </v-layout>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions class="footercolor white--text lighten-2 justify-center">
        &copy;2018 — <strong>Vuetify</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  name: 'Footer',
  data: () => ({
    icons: ['fab fa-facebook', 'fab fa-twitter', 'fab fa-google-plus', 'fab fa-linkedin', 'fab fa-instagram'],
    rows: [
      {
        title: 'Company Name',
        children: ['Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit'],
      },
      {
        title: 'Products',
        children: ['MDBootstrap', 'MDWordPress', 'BrandFlow', 'Bootstrap Angular'],
      },
      {
        title: 'Useful Links',
        children: ['Your account', 'Become an Affiliate', 'Shipping Rates', 'Helper'],
      },
    ],
  }),
};
</script>
<style lang="sass" scoped>
.custom-card
  padding: 0 18px
  .divider
    background-color: rgba(255, 255, 255, 0.26)

.header-content-footer
  padding-bottom: 20px
  font-size: 16px !important
  font-weight: 900
.child-style
  font-size: 12px
  font-weight: 400
  line-height: 1.5
  padding-right: 20px
</style>
