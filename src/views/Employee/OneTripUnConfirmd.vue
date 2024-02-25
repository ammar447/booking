<template>
  <div class="row" :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'">
    <SidePar class="col-2" page4="Employee" />
    <OneTripUnConfirmd class="col-10" />
  </div>
</template>

<script>
import SidePar from "@/components/Sidepar/Sidepar.vue";
import OneTripUnConfirmd from "@/components/Employee/UnConfirmed/OneTripUnConfirmd";
export default {
  components: {
    SidePar,
    OneTripUnConfirmd,
  },
};
</script>

<style></style>
