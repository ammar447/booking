<template>
    <div class="row" :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'">
      <SidePar class="col-2" page4="Employee" activeNumber="12" />
      <Confirmed class="col-10" />
    </div>
  </template>
  
  <script>
  import SidePar from "@/components/Sidepar/Sidepar.vue";
  import Confirmed from "@/components/Employee/Confirmed/Confirmed";
  export default {
    components: {
      SidePar,
      Confirmed,
    },
  };
  </script>
  
  <style></style>
  