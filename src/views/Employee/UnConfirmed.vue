<template>
  <div class="row" :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'">
    <SidePar class="col-2" page4="Employee" activeNumber="11" />
    <UnConfirmed class="col-10" />
  </div>
</template>

<script>
import SidePar from "@/components/Sidepar/Sidepar.vue";
import UnConfirmed from "@/components/Employee/UnConfirmed/UnConfirmed";
export default {
  components: {
    SidePar,
    UnConfirmed,
  },
};
</script>

<style></style>
