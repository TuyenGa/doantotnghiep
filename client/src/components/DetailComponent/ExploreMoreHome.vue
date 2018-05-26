<template>
  <v-expansion-panel>
    <v-expansion-panel-content >
      <div class="more-home" slot="header">Explore More Home</div>
      <SlideHome>
        <SlideHomeItem v-for="item in 4" :key="item"></SlideHomeItem>
      </SlideHome>
      </v-expansion-panel-content>
    </v-expansion-panel>
</template>
<script>
import SlideHome from '@/components/Minimal/SlideHome';
import SlideHomeItem from '@/components/Minimal/SlideHomeItem';

export default {
  name: 'More-Home',
  components: {
    SlideHome,
    SlideHomeItem,
  },
};
</script>
<style lang="sass" scoped>
.more-home
  font-size: 24px
  line-height: 1.4
  margin: 5px 0
  font-weight: 300
  font-style: nomarl
ul.expansion-panel
  box-shadow: none
</style>
