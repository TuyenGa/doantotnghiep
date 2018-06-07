<template>
  <div class="search-system">
    <div class="search-input">
      <GmapAutocomplete
        class="input-auto-complete"
        ref="autoComplete"
        @place_changed="setPlace"
        placeholder="Find your place"
        :selectFirstOnEnter="true"
      >
      </GmapAutocomplete>
    </div>
    <div class="filter-price">
      <v-menu
        :close-on-content-click="false"
        offset-y
      >
        <v-btn
          slot="activator"
          flat
          class="black--text btn-search-input"
          dark
        >{{btnPrice}}</v-btn>
        <v-card
          width="215px"
          class="price-card">
          <v-select
            label="Price Min"
            class="price-min"
            v-model="priceMin"
            :items="priceMinItems"
          ></v-select>
          <v-select
            label="Price Max"
            class="price-max"
            :items="priceMaxItems"
            v-model="priceMax"
          ></v-select>
        </v-card>
      </v-menu>
    </div>
    <div class="filter-mode">
      <v-menu
        :close-on-content-click="false"
        offset-y
      >
        <v-btn
          slot="activator"
          flat
          class="black--text btn-search-input"
          dark
        >{{homeType}}</v-btn>
        <v-card
          width="215px"
          class="price-card">
          <v-radio-group v-model="radios" :mandatory="false">
            <v-radio label="Scoop" :value="1"></v-radio>
            <v-radio label="Public" :value="2"></v-radio>
          </v-radio-group>
        </v-card>
      </v-menu>
    </div>
  </div>
</template>
<script>
import { eventBus } from '@/main';

export default {
  name: 'SearchInput',
  data() {
    return {
      priceMin: null,
      priceMax: null,
      priceMinItems: [
        {
          text: '$100',
          value: 100,
        },
        {
          text: '$1000',
          value: 1000,
        },
      ],
      priceMaxItems: [
        {
          text: '$100',
          value: 100,
        },
        {
          text: '$1000',
          value: 1000,
        },
      ],
      radios: null,
    };
  },
  methods: {
    setPlace(place) {
      eventBus.$emit('setPlace', place);
    },
  },
  computed: {
    btnPrice() {
      if (this.priceMin === null && this.priceMax !== null) {
        return `$0 - $${this.priceMax}`;
      } else if (this.priceMin !== null && this.priceMax === null) {
        return `$${this.priceMin}+`;
      } else if (this.priceMin === this.priceMax && this.priceMin !== null) {
        return `$${this.priceMin}`;
      } else if (this.priceMin === null && this.priceMax === null) {
        return 'Any price';
      } else if (this.priceMin > this.priceMax) {
        const temp = this.priceMin;
        this.priceMin = this.priceMax;
        this.priceMax = temp;
        return `$${this.priceMin} - $${this.priceMax}`;
      } else if (this.priceMin < this.priceMax) {
        return `$${this.priceMin} - $${this.priceMax}`;
      }
      return 'Any price';
    },
    homeType() {
      if (this.radios === null) {
        return 'All Home Type';
      } else if (this.radios === 1) {
        return 'Scoop';
      } else if (this.radios === 2) {
        return 'Public';
      }
      return 'All Home Type';
    },
  },
};
</script>
<style lang="sass">
.search-system
  .input-group__input
    border: 1px solid
    border-radius: 5px
    input
      border-right: 1px solid #20c063
  .input-group__details
    display: none
</style>

<style lang="sass" scoped>
.search-system
  display: flex
  padding-left: 20px
  top: 48px
  z-index: 100
  background-color: #fff
  vertical-align: middle
  line-height: 46px
  width: 100%
  position: fixed
  padding-left: 20px
  top: 48px
  z-index: 100
  background-color: #fff
  vertical-align: middle
  line-height: 46px
  width: 100%
  box-shadow: rgba(0,0,0,.2) 0 2px 2px 0;
.input-auto-complete
  border: 1px solid #20c063;
  height: 31px;
  font-size: 15px;
  border-radius: 5px;
  outline: none;
.menu__content
  .price-card
    display: flex
    padding: 5px
    width: 215px
    .price-min
      margin-right: 10px
.btn-search-input
  text-transform: capitalize

</style>
