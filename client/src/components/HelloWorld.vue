<template>
  <Dropzone id="dropzoneTest" :options="dropzoneOptions"></Dropzone>
</template>
<script>
import Dropzone from '@/components/Minimal/UploadDropzone';

export default {
  name: 'HelloWorld',
  components: {
    Dropzone,
  },
  data() {
    return {
      dropzoneOptions: {
        url: '',
        thumbnailWidth: 150,
        maxFilesize: 0.5,
        headers: { 'My-Awesome-Header': 'header value' },
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#dropzoneTest {
  width: 300px;
  outline: 2px dashed gray;
  outline-offset: -10px;
}
</style>
