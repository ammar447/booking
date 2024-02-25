<template>
    <div  class="row" :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'">
    <SidePar class="col-2"  page3="Manager" activeNumber="8" />
    <Transport class="col-10" />
    </div>
  </template>
  
  <script>
  import SidePar from '@/components/Sidepar/Sidepar.vue';
  import  Transport  from '@/components/Manager/Transport/Transport.vue';
  export default {
  components:{
      SidePar,
      Transport
  }
  }
  </script>
  
  <style>
  
  </style>