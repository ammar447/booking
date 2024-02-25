<template>
    <div class="row" :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'">
      <SidePar class="col-2" page4="Employee" />
      <OneTripConfirmd class="col-10" />
    </div>
  </template>
  
  <script>
  import SidePar from "@/components/Sidepar/Sidepar.vue";
  import OneTripConfirmd from "@/components/Employee/Confirmed/OneTripConfirmed";
  export default {
    components: {
      SidePar,
      OneTripConfirmd,
    },
  };
  </script>
  
  <style></style>
  