<template>
    <div  class="row" :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'">
    <SidePar class="col-2"  page3="Manager" activeNumber="9" />
    <OfficeEmployee class="col-10" />
    </div>
  </template>
  
  <script>
  import SidePar from '@/components/Sidepar/Sidepar.vue';
  import  OfficeEmployee  from '@/components/Manager/OfficeEmployee/OfficeEmployee';
  export default {
  components:{
      SidePar,
      OfficeEmployee
  }
  }
  </script>
  
  <style>
  
  </style>