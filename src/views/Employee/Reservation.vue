<template>
    <div  class="row" :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'">
    <SidePar class="col-2"  page4="Employee" activeNumber="10" />
    <Reservation class="col-10" />
    </div>
  </template>
  
  <script>
  import SidePar from '@/components/Sidepar/Sidepar.vue';
  import  Reservation  from '@/components/Employee/Reservation/Reservation.vue';
  export default {
  components:{
      SidePar,
      Reservation
  }
  }
  </script>
  
  <style>
  
  </style>