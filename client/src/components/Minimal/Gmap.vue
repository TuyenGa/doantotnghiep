<template>
  <GmapMap
    style="width:50%; height: 84vh; marign-left: 20px;"
    :zoom="setZoom"
    :center="setCenter"
    ref="map">
    <GmapMarker
      v-if="this.place"
      label="*"
      :option="{style: style}"
      :position="{
        lat: this.place.geometry.location.lat(),
        lng: this.place.geometry.location.lng()
      }"
      />
  </GmapMap>
</template>

<script>
import { eventBus } from '../../main';

export default {
  name: 'Gmap',
  data() {
    return {
      markers: [],
      place: null,
      setCenter: {lat: 0, lng: 0},
      setZoom: 8,
    };
  },
  mounted() {
    eventBus.$on('setPlace', (place) => {
      this.place = place;
    });
    console.info('place', this.place);
  },
  watch: {
    place() {
      this.setCenter.lat = this.place.geometry.location.lat();
      this.setCenter.lng = this.place.geometry.location.lng();
      this.setZoom = 16;
      return this.place;
    },
    markers(markers) {
      if (markers.length > 2) {
        const bounds = new google.maps.LatLngBounds();
        markers.map((marker) => {
          bounds.extend(marker.latLng);
        });
        this.$refs.map.fitBounds(bounds);
      }
    },
  },
};
</script>