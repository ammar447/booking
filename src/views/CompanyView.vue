<template>
  <div class="row" :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'">
   <Sidebar />
  </div>
</template>

<script>
import Sidebar from "../components/Sidepar/Sidepar.vue"
export default {
  components :{
    Sidebar
  }
}
</script>

<style>

</style>