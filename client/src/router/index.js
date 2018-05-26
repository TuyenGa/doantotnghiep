import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Home from '@/views/Home';
import Detail from '@/views/Detail';
import Account from '@/views/Account';
import RentalResume from '@/components/AccountComponent/RentalResume';
import EditProfile from '@/components/AccountComponent/EditProfile';
import MyRoomForRent from '@/components/AccountComponent/MyRoomForRent';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail,
    },
    {
      path: '/account',
      name: 'Account',
      children: [
        {
          path: 'edit-profile',
          name: 'edit-profile',
          component: EditProfile,
        },
        {
          path: 'rental-resume',
          name: 'rental-resume',
          component: RentalResume,
        },
        {
          path: 'room-rent',
          name: 'room-rent',
          component: MyRoomForRent,
        },
      ],
      component: Account,
    },
  ],
});
