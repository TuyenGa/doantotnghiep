<template>
  <form enctype="multipart/form-data" novalidate>
    <div :class="{'dropbox': true, classes}">
      <input
        type="file"
        multiple
        :name="uploadFieldName"
        @change="filesChange($event.target.files); fileCount = $event.target.files.length" accept="image/*"
        class="input-file"
      >
      <p>
        Drag & drop <br>
        your picture
      </p>
      <a>Choose a File...</a>
    </div>
  </form>
</template>
<script>
export default {
  name: 'Upload',
  data() {
    return {
      uploadFieldName: '',
      fileCount: 0,
    };
  },
  props: {
    classes: {
      type: String,
    },
  },
  methods: {
    filesChange(files) {
      
    },
  }
};
</script>
<style lang="sass" scoped>
  .dropbox
    outline: 2px dashed grey
    outline-offset: -10px
    padding: 10px 10px
    min-height: 126px
    position: relative
    flex-direction: column
    display: flex
    width: 126px
    justify-content: space-around
    cursor: pointer
    p
      font-size: 13px
      text-align: center
      line-height: 1.4
      margin: 5px 0
    a
      font-size: 13px
      margin: 0
      text-align: center
      vertical-align: baseline
  .input-file
    position: absolute
    opacity: 0
    width: 100%
    height: 126px
    cursor: pointer
</style>
