<template>
  <Modal maxWidth="500" @close="closeDialog" :dialog="showDialog">
    <v-toolbar height=64 color="gray">
        <v-btn icon class="black--text" @click="closeDialog">
          <v-icon class="material-icon">clear</v-icon>
        </v-btn>
        <v-toolbar-title
          class="black--text info-title"
        >
          Sign In
        </v-toolbar-title>
      </v-toolbar>
      <v-card
        class="card-login"
      >
        <div class="login-form">
          <h1 class="title">Login</h1>
            <v-text-field
              v-model="email"
              :rules="[rules.required, rules.email]"
              label="E-mail"
            ></v-text-field>
            <v-text-field
              v-model="password"
              :append-icon="e1 ? 'visibility' : 'visibility_off'"
              :append-icon-cb="() => (e1 = !e1)"
              :type="e1 ? 'password' : 'text'"
              name="input-10-1"
              label="Enter your password"
              hint="At least 8 characters"
              min="8"
              counter
            ></v-text-field>
            <v-card-actions
              class="card-actions"
            >
              <div class="btn-action">
                <v-btn
                  class="btn-login"
                  color="primary"
                  flat
                  @click="closeDialog"
                >Cancel</v-btn>
                <v-btn
                  class="btn-login"
                  color="primary"
                  @click="finishLogin()"
                >
                  Signin
                </v-btn>
              </div>
              <a @click="register()" class="register">Register in here</a>
            </v-card-actions>
        </div>
      </v-card>
  </Modal>
</template>
<script>
import Modal from '@/components/Modal';

export default {
  name: 'logout',
  components: {
    Modal,
  },
  data() {
    return {
      e1: true,
      password: '',
      users: {
        userName: 'vuongquangtuyendz@gmail.com',
        password: 'anhtuyen9x'
      },
      email: '',
      rules: {
        required: (value) => !!value || 'Required.',
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Email is not valid.';
        },
      },
    };
  },
  props: ['showDialog'],
  methods: {
    closeDialog() {
      this.$emit('closeDialog');
    },
    finishLogin() {
      if (this.email === this.users.userName && this.password === this.users.password) {
        this.$emit('loginDone');
        this.closeDialog();
      } else {
        this.email = '';
        this.password = '';
      }
    },
    register() {
      this.$emit('register');
    },
  },
};
</script>
<style lang="sass" scoped>
.card-login
  display: flex
  flex-direction: column
  align-items: center
  .login-form
    width: 80%
    justify-content: flex-end
    .card-actions
      justify-content: space-between
      .btn-login
        text-transform: capitalize;
      .register
        &:hover
          text-decoration: underline
</style>
