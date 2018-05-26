<template>
  <div class="home-detail">
    <p class="title-home-detail">
      Home Details
    </p>
    <div class="over-view">
      <div class="content-center">
        <div class="title-div">
          <h3 class="title-over-view">
            Overview
          </h3>
          <v-divider class="overview"/>
        </div>
        <ul class="list-over-view">
          <li v-for="(item, index) in items" :key="index">
            <v-icon class="icon-list-overview" size="18">{{item.icon}}</v-icon>
            {{item.name}}
          </li>
        </ul>
      </div>
    </div>
    <div class="description">
      <div class="content-center">
        <div class="title-div">
          <h3 class="title-over-view">
            Description
          </h3>
          <v-divider class="overview"/>
        </div>
        <div class="content-description">
          <div class="phone-number">
            <a href="tel:+(929) 226-6179">
              <v-icon color="primary" size="18">phone</v-icon>
              (929) 226-6179
            </a>
          </div>
          <div class="description">
            The Eugene
          </div>
        </div>
        <div class="feature">
          <div class="content-center">
            <div class="title-div">
              <h3 class="title-over-view">
                Feature
              </h3>
              <v-divider class="overview"/>
            </div>
          </div>
          <div class="content-feature">
            <div class="title-update">
              <span class="title-feature">
                Listing infomation
              </span> <br>
              <span class="update-feature">
                Update: 05/18/2018 21:58PM
              </span>
            </div>
            <div :class="{'content-feature-detail':true, 'hidden-feature': !fullFeature}">
              <ul class="list-feature-detail">
                <li class="feature-item" v-for="(item, index) in features" :key="index">
                  {{item}}
                </li>
              </ul>
              <span class="feature-description">
                Certain features are not guaranteed in every unit. Contact the property for more details.
              </span>
            </div>
            <div class="button-see">
              <a
                class="set-full-feature"
                @click="fullFeature = !fullFeature"
                v-if="fullFeature === false">See More</a>
              <a
                class="set-full-feature"
                @click="fullFeature = !fullFeature"
                v-if="fullFeature === true">See Less</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Home-Detail',
  data() {
    return {
      fullFeature: true,
      items: [
        { icon: 'fas fa-home', name: 'Apartment' },
        { icon: 'fas fa-bed', name: '0-2 beds' },
        { icon: 'fas fa-bath', name: '1-2 baths' },
        { icon: 'far fa-calendar', name: 'Built in 2016' },
        { icon: 'fas fa-paw', name: 'No pets allowed' },
        { icon: 'fas fa-clock', name: '402 days on this site' },
      ],
      features: [
        'Concierge',
        'Elevator',
        'Fitness Center',
        'Washing Machine',
        'Dryer',
        'Flooring: Hardwood',
        'Dining Alcove',
        'Granite Countertops',
        'Private Outdoor Space',
        'Stainless Steel Appliances',
        'In Unit',
        'Shared',
        'Bicycle Storage',
        'Microwave Oven',
      ],
    };
  },
};
</script>
<style lang="sass" scoped>
.home-detail
  .title-home-detail
    font-size: 24px;
    line-height: 1.4;
    margin: 5px 0;
    font-weight: 300
    font-style: nomarl
  .over-view, .description, feature
    .content-center
      .title-div
        display: flex
        margin-right: 20px
        .overview
          margin-top: 11px
          margin-left: 20px
      .list-over-view
        list-style: none
        padding-top: 20px
        padding-bottom: 20px
        .icon-list-overview
          margin-right: 10px
        li
          display: inline-block
          width: 50%
          padding-left: 125px
          margin: 4px 0px

      .content-description
        margin-left: 125px
        padding-top: 20px
        padding-bottom: 20px
        .phone-number
          margin-top: 20px
          margin-bottom: 20px
          a
            text-decoration: unset
        .description
          max-height: 7.5em
          overflow: hidden
          margin-bottom: 5px
          margin-top: 5px
          min-height: 50px

      .content-feature
        margin-left: 125px
        padding-top: 20px
        padding-bottom: 20px
        .title-update
          .title-feature
            text-transform: uppercase
            font-size: 15px
            font-weight: bold
          .update-feature
            font-size: 15px
            line-height: 1.5
            color: #869099
            margin: 5px 0
        .hidden-feature
          max-height: 115px
          overflow: hidden
        .content-feature-detail
          .list-feature-detail
            list-style-type: none
            margin-top: 10px
            .feature-item
              display: list-item
              color: #3b4144
              line-height: 1.5
          .feature-description
            color: #869099
            font-size: 13px
            line-height: 1.4
            margin-left: 5px 0
        .button-see
          text-align: right
          padding-right: 31px


</style>
