<template>
  <Dropzone
    :id="id"
    :options="options"
  ></Dropzone>
</template>
<script>
import Dropzone from 'vue2-dropzone';

export default {
  name: 'dropzone',
  components: {
    Dropzone,
  },
  props: {
    id: {
      type: String,
    },
    options: {
      type: Object,
    },
  },
};
</script>
<style lang="sass" scoped>

</style>
