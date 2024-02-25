<template>
    <div class="row" :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'">
      <SidePar class="col-2" page4="Employee" :activeNumber="13" />
      <CanceledReservations class="col-10" />
    </div>
  </template>
  
  <script>
  import SidePar from "@/components/Sidepar/Sidepar.vue";
  import CanceledReservations from "@/components/Employee/CanceledReservations";
  export default {
    components: {
      SidePar,
      CanceledReservations,
    },
  };
  </script>
  
  <style></style>
  