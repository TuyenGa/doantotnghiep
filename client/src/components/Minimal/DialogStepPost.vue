<template>
<Modal maxWidth="608" @close="closeDialog" :dialog="showDialog" :nameModal="nameModal">
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1"></v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="e1 > 2" step="2"></v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="e1 > 3" step="3"></v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="4"></v-stepper-step>
      <div class="close-post">
        <v-btn
          icon
          flat
          @click="closeDialog"
        >
          <v-icon color="primary" class="material-icon">clear</v-icon>
        </v-btn>
      </div>
    </v-stepper-header>
    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card
          class="card-content"
          height="250px"
        >
          <div class="detail-rent">
            <div class="address-roomate">
              <v-text-field
                label="Listing Address"
                :placeholder="addressPlaceholder"
              ></v-text-field>
            </div>
            <div class="select-time-range">
              <v-select
                label="Time Range"
                :placeholder="timeRangePlaceholder"
                :items="timeRanges"
              ></v-select>
            </div>
            <div class="rent">
              <v-text-field
                label="Rent/month"
                prefix="$"
              ></v-text-field>
            </div>
          </div>
        </v-card>
        <v-btn color="primary" @click.native="e1 = 2">Continue</v-btn>
      </v-stepper-content>
      <v-stepper-content step="2">
        <v-card
          class="card-content"
          height="250px"
        >
          <UploadFile></UploadFile>
        </v-card>
        <v-btn color="primary" flat @click.native="e1 = 1">Previous</v-btn>
        <v-btn color="primary" @click.native="e1 = 3">Continue</v-btn>
      </v-stepper-content>
      <v-stepper-content step="3">
        <v-card
          class="card-content"
          height="250px">
          <div class="bed-room">
            <v-select
              label="Bed Room"
              :items="bedRooms"
            ></v-select>
          </div>
          <div class="bath-room">
            <v-select
              label="Bath Room"
              :items="bathRooms"
            ></v-select>
          </div>
          <div class="feeding-pet">
            <v-select
              label="Pet"
              placeholder="What pets are allowed?"
              :items="pets"
            ></v-select>
          </div>
        </v-card>
        <v-btn color="primary" flat @click.native="e1 = 2">Previous</v-btn>
        <v-btn color="primary" @click.native="e1 = 4">Continue</v-btn>
      </v-stepper-content>
      <v-stepper-content step="4">
        <v-card
          class="card-content"
          height="250px"
        >
          <div class="your-name">
            <v-text-field
              label="Your Name"
              value="Vuong Quang Tuyen"
            ></v-text-field>
          </div>
          <div class="owner-age">
            <v-text-field
              label="Age"
            >
            </v-text-field>
          </div>
          <div class="gender">
            <v-select
              label="Gender"
              :items="gender"
            ></v-select>
          </div>
        </v-card>
        <v-btn color="primary"  @click="finish()">Finish</v-btn>
        <v-btn @click="closeDialog" flat>Cancel</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</Modal>
</template>
<script>
import Modal from '@/components/Modal';
import UploadFile from '@/components/Minimal/UploadFile';

export default {
  name: 'DialogStep',
  components: {
    Modal,
    UploadFile,
  },
  data() {
    return {
      e1: 0,
      e2: 0,
      addressPlaceholder: 'What is the address of this listing?',
      gender: [
        {
          text: 'Female',
        },
        {
          text: 'Male',
        },
        {
          text: 'Other',
        },
      ],
      timeRanges: [
        {
          text: 'Month to month',
          value: 1,
        },
        {
          text: '6 months',
          value: 6,
        },
        {
          text: 'At least one year',
          value: 12,
        },
      ],
      bedRooms: [
        {
          text: 'Studio',
          value: 0,
        },
        {
          text: '1 Bedroom',
          value: 1,
        },
        {
          text: '2 Bedrooms',
          value: 2,
        },
        {
          text: '3 Bedrooms',
          value: 3,
        },
        {
          text: '4 Bedrooms',
          value: 4,
        },
        {
          text: '5 Bedrooms',
          value: 5,
        },
        {
          text: '6 Bedrooms',
          value: 6,
        },
        {
          text: '6+ Bedrooms',
          value: 7,
        },
      ],
      bathRooms: [
        {
          text: '1 Bathroom',
          value: 1,
        },
        {
          text: '2 Bathrooms',
          value: 2,
        },
        {
          text: '3 Bathrooms',
          value: 3,
        },
        {
          text: '4 Bathrooms',
          value: 4,
        },
        {
          text: '5 Bathrooms',
          value: 5,
        },
        {
          text: '6 Bathrooms',
          value: 6,
        },
        {
          text: '6+ Bathrooms',
          value: 7,
        },
      ],
      pets: [
        {
          text: 'None',
        },
        {
          text: 'Dogs',
        },
        {
          text: 'Cats',
        },
        {
          text: 'Both',
        },
      ],
    };
  },
  props: ['showDialog', 'nameModal'],
  methods: {
    closeDialog() {
      this.$emit('closeDialog');
      this.e1 = 1;
    },
    finish() {
      this.closeDialog();
    },
  },
};
</script>
<style lang="sass" scoped>
.header-show
  display: flex
  justify-content: flex-end
.close-post
  padding-top: 12px;
.card-content
  padding-top: 20px
  background: url('https://static.trulia-cdn.com/images/rentals/room_for_rent/pattern_rr_no_border.svg');
  box-shadow: none;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  .detail-rent
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%
    .address-roomate, .select-time-range, .rent
      width: 60%

.bed-room, .bath-room, .feeding-pet, .your-name, .owner-age ,.gender
  width: 60%;

</style>
