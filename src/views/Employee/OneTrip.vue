<template>
    <div  class="row" :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'">
    <SidePar class="col-2"  page4="Employee" />
    <OneTrip class="col-10" />
    </div>
  </template>
  
  <script>
  import SidePar from '@/components/Sidepar/Sidepar.vue';
  import  OneTrip  from '@/components/Employee/Reservation/OneTrip.vue';
  export default {
  components:{
      SidePar,
      OneTrip
  }
  }
  </script>
  
  <style>
  
  </style>