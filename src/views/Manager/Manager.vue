<template>
    <div  class="row" :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'">
    <SidePar class="col-2"  page3="Manager" activeNumber="7" />
    <Trip class="col-10" />
    </div>
  </template>
  
  <script>
  import SidePar from '@/components/Sidepar/Sidepar.vue';
  import  Trip  from '@/components/Manager/Trip/Trip.vue';
  export default {
  components:{
      SidePar,
      Trip
  }
  }
  </script>
  
  <style>
  
  </style>