<template>
  <GmapMap
    class="gmap"
    :zoom="setZoom"
    :center="setCenter"
    :maxZoom="16"
    ref="map">
    <GmapMarker
      v-if="this.place"
      label="*"
      :position="{
        lat: this.place.geometry.location.lat(),
        lng: this.place.geometry.location.lng()
      }"
      />
    <GmapMarker
      v-if="items"
      v-for="(item, index) in items"
      :key="index"
      :position="item"
    ></GmapMarker>
  </GmapMap>
</template>

<script>
import { eventBus } from '@/main';

export default {
  name: 'Gmap',
  data() {
    return {
      markers: [],
      place: null,
      setCenter: {
        lat: 21.0277644,
        lng: 105.83415979999995,
      },
      setZoom: 14,
      items: [],
    };
  },
  mounted() {
    eventBus.$on('setPlace', (place) => {
      this.place = place;
    });
  },
  computed: {
    detail() {
      return this.$store.getters['detail/getListDetail'];
    },
  },
  watch: {
    detail() {
      this.items = this.detail.map(item => {
        return {
          lat: item.latitude,
          lng: item.longitude,
        };
      });
    },
    place() {
      this.setCenter.lat = this.place.geometry.location.lat();
      this.setCenter.lng = this.place.geometry.location.lng();
      this.setZoom = 10;
      return this.place;
    },
    markers(markers) {
      if (markers.length > 2) {
        const bounds = new google.maps.LatLngBounds(); //eslint-disable-line
        markers.map((marker) => { //eslint-disable-line
          return bounds.extend(marker.latLng);
        });
        this.$refs.map.fitBounds(bounds);
      }
    },
  },
};
</script>
<style lang="sass" scoped>
.gmap
  width: 50%;
  height: 84vh;
  position: fixed;
  right: 1px;
</style>
