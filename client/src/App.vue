<template>
  <v-app class="app-wrap">
    <router-view/>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>
<style>
.app-wrap {
  overflow: auto;
  width: 100%!important
}
@font-face {
  font-family: 'PostGrotesk';
  src:  url('./assets/fonts/PostGrotesk-Book.woff') format('woff'),
        url('./assets/fonts/PostGrotesk-Bold.woff') format('woff'),
        url('./assets/fonts/PostGrotesk-Light.woff') format('woff'),
        url('./assets/fonts/PostGrotesk-Medium.woff') format('woff');
}
</style>
