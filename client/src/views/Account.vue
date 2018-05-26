<template>
  <div class="account">
    <Header :flat="true"></Header>
    <div class="container-account">
      <NavAccount></NavAccount>
      <ContentAccount :type="type"></ContentAccount>
    </div>
  </div>
</template>
<script>
import Header from '@/components/UIDoAn/Header';
import NavAccount from '@/components/AccountComponent/NavAccount';
import ContentAccount from '@/components/AccountComponent/ContentAccount';

export default {
  name: 'Account',
  data() {
    return {
      type: '',
    };
  },
  components: {
    Header,
    NavAccount,
    ContentAccount,
  },
  beforeRouteUpdate(to, from, next) {
    this.type = to.name;
    next();
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      const vm1 = vm;
      vm1.type = to.name;
    });
  },
};
</script>
<style lang="sass" scoped>
.container-account
  display: flex
  flex-direction: row
  height: 100vh
  padding-top: 48px
</style>
