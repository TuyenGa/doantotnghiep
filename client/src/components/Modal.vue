<template>
  <v-layout row justify-center>
    <v-dialog
      v-model="open"
      :max-width="maxWidth"
      persistent
      content-class="dialog-icon"
    >
      <slot></slot>
    </v-dialog>
  </v-layout>
</template>

<script>
function makeRefd() {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < 10; i++) // eslint-disable-line
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return `modal-${text}`;
}

const modalActives = [];

export default {
  props: ['dialog', 'maxWidth', 'nameModal', 'close'],
  data() {
    return {
      modalRef: this.nameModal || makeRefd(),
      open: this.dialog,
    };
  },
  methods: {
    closeDialog(modalRef) {
      if (modalActives[0] === modalRef && !this.first) {
        if (modalActives && modalActives.length < 2) {
          this.$store.dispatch('updateBodyFixed', false);
        }
        this.$emit('close');
      }
    },
  },
  watch: {
    dialog(val) {
      if (val === true) modalActives.unshift(this.modalRef);
      else modalActives.shift();

      this.open = val;
    },
  },
};
</script>
<style scoped>
.overlay-animation {
  animation-name: MLfaceIn;
  animation-duration: 0.5s;
}

@keyframes MLfaceIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
