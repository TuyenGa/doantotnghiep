<template>
  <v-flex>
    <li class="list-home">
      <a class="tile-link" @click="goto('/detail')">
        <v-card>
          <v-card-media :src="random()" height="160px">
          </v-card-media>
          <v-card-title primary-title class="primary-detail-home">
            <div>
              <h5 class="headline mb-0 amount">${{price}}</h5>
              <div class="icon-room">
                <div class="icon-show">
                  <v-icon small>fas fa-bed</v-icon>
                  {{bed_room}}bd
                </div>
                <div class="icon-show">
                  <v-icon small>fas fa-bath</v-icon>
                  {{bath_room}}ba
                </div>
              </div>
              <p class="home-number">900 5th Ave #2B</p>
              <p class="street-number">{{address}}</p>

            </div>
          </v-card-title>
        </v-card>
      </a>
    </li>
  </v-flex>
</template>
<script>
export default {
  name: 'SlideHomeItem',
  data() {
    return {
      bed_room: 0,
      bath_room: 0,
      price: 0,
      address: 'Hà Nội',
      items: [
        'http://thumbs.trulia-cdn.com/pictures/thumbs_3/zillowstatic/ISuslkqq5odvzu1000000000.jpg',
        'http://thumbs.trulia-cdn.com/pictures/thumbs_3/zillowstatic/ISibwjr21kovsg1000000000.jpg',
        'http://thumbs.trulia-cdn.com/pictures/thumbs_3/zillowstatic/ISukvmwtwkk30j1000000000.jpg',
        'http://thumbs.trulia-cdn.com/pictures/thumbs_3/zillowstatic/ISu4j6no0sr7hh0000000000.jpg',
        'http://thumbs.trulia-cdn.com/pictures/thumbs_3/zillowstatic/IS6u63crmwfc5r0000000000.jpg',
      ],
    };
  },
  props: [
    'dataDetail',
  ],
  methods: {
    goto(link) {
      this.$router.push(link);
    },
    random() {
      const item = this.items[Math.floor(Math.random() * this.items.length)];
      return item;
    },
  },
  watch: {
    dataDetail() {
      this.bed_room = this.dataDetail.bed_room;
      this.bath_room = this.dataDetail.baths_room;
      this.price = this.dataDetail.price;
      this.address = this.dataDetail.address;
    },
  },
};
</script>
<style lang="sass" scoped>

%address-style
  overflow: hidden
  text-overflow: ellipsis
  color: #869099
  white-space: nowrap

.primary-detail-home
  padding: 5px 10px
  .amount
    font-size: 18px!important
  .icon-room
    .icon-show
      display: inline-block
      margin-right: 10px
      color: #3b4144
      font-size: 15px
      font-weight: 300
  .home-number, .street-number
    overflow: hidden
    margin: 0
    text-overflow: ellipsis
    color: #869099
    white-space: nowrap;

.list-home
  display: inline-block
  margin-left: 0
  border-radius: 4px!important
  overflow: hidden
  width: 93%
  margin-right: 18px
  .tile-link
    text-decoration: none
    color: #3b4144
    .overlay-container
      position: relative
      overflow: visible
      .carousel-photo
        min-height: 160px
        width: 100%
        background-size: cover
        background-position: center center
    .detail-show-home
      padding: 5px 10px
      margin: 0 1px 1px 1px
      border-left: 1px solid rgb(232, 233, 234)
      border-bottom: 1px solid rgb(232, 233, 234)
      border-right: 1px solid rgb(232, 233, 234)
      .amount-home
        font-size: 18px
        font-weight: 600
        overflow: hidden
        text-overflow: ellipsis
        font-style: normal
        line-height: 1.4
        font-weight: 500
      .icon-bed-bath-room
        .icon-bed, .icon-bath
          display: inline-block!important
          margin-right: 10px
</style>
