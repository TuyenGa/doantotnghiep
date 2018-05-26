<template>
  <v-flex xs3 sm3>
    <li class="list-home">
      <a class="tile-link" @click="goto('/detail')">
        <v-card>
          <v-card-media src="http://thumbs.trulia-cdn.com/pictures/thumbs_3/zillowstatic/ISuslkqq5odvzu1000000000.jpg" height="160px">
          </v-card-media>
          <v-card-title primary-title class="primary-detail-home">
            <div>
              <h5 class="headline mb-0 amount">$4,300,000</h5>
              <div class="icon-room">
                <div class="icon-show">
                  <v-icon small>fas fa-bed</v-icon>
                  4bd
                </div>
                <div class="icon-show">
                  <v-icon small>fas fa-bath</v-icon>
                  4ba
                </div>
              </div>
              <p class="home-number">900 5th Ave #2B</p>
              <p class="street-number">Upper East Side, New York, NY</p>

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
  methods: {
    goto(link) {
      this.$router.push(link);
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
