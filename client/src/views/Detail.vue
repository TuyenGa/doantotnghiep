<template>
  <div>
    <div class="header-detail">
      <Header :flat="true" :position="true"></Header>
      <div class="property-summary">
        <div class="center-horizontal">
          <div class="clearfix"></div>
          <div class="summary-detail">
            <div class="price-detail">
              <span class="name-price">For Rent · PET FRIENDLY</span>
              <span class="price">$3,850 - $10,800</span>
            </div>
            <div class="address-detail">
              <span class="title">
                Le Triomphe
              </span>
              <ul class="apartment-detail">
                <li class="bed-room">1-3 beds</li>
                <li class="area">600-1,254 m2</li>
                <li class="type-apartment">Apartment</li>
              </ul>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </div>
    <div class="content-detail">
      <div class="info-carousel">
        <div class="content-apartment">
          <Carousel></Carousel>
        </div>
        <ContactInfo :scroll="scrollInfo" />
      </div>
      <div class="container-detail">
        <ContetnDetail></ContetnDetail>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from '@/components/UIDoAn/Header';
import Footer from '@/components/UIDoAn/Footer';
import ContactInfo from '@/components/Minimal/ContactInfo';
import Carousel from '@/components/Minimal/Carousel';
import ContetnDetail from '@/components/DetailComponent/ContentDetail';

export default {
  name: 'Detail',
  data() {
    return {
      scrollInfo: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  components: {
    Header,
    Footer,
    ContactInfo,
    Carousel,
    ContetnDetail,
  },
  methods: {
    handleScroll() {
      const scrollTop = (document.body.scrollTop || document.documentElement.scrollTop);
      if (scrollTop >= 700) {
        this.scrollInfo = true;
      } else {
        this.scrollInfo = false;
      }
    },
  },
};
</script>
<style lang="sass" scoped>

.property-summary
    height: 85px
    background-color: #FFFFFF
    width: 100%
    display: flex
    position: fixed
    top: 48px
    z-index: 100
    justify-content: center
    -webkit-box-shadow: 0 10px 6px -6px #777
    -moz-box-shadow: 0 10px 6px -6px #777
    box-shadow: 0 2px 2px 0 rgba(0,0,0,.2)

    .center-horizontal
      width: 80%

      .clearfix
        height: 10px

      .summary-detail

        .price-detail
          display: inline-block
          width: 40%

          .name-price
            display: block
            font-weight: bold
            color: #869099
            font-size: 15px
            text-transform: uppercase
            line-height: 1.5
          .price
            font-size: 24px
            font-weight: bold
            line-height: 1.4
            margin: 5px 0
            font-style: normal

      .address-detail
        display: inline-block
        width: 59%

        .title
          font-size: 28px !important
          box-sizing: border-box

        .apartment-detail
          padding-top: 3px
          li
            display: inline
            color: #3b4144
            font-size: 15px
            line-height: 1.5

          .area,
          .type-apartment
            &:before
              content: "\2022"
              margin-right: 5px

.content-detail
  display: flex
  flex-direction: column

  .info-carousel
    width: 100%
    .content-apartment
      width: 64.66667%
      height: 622px
      display: inline-block
  .container-detail
    width: 100%
    background-color: #fff
</style>
