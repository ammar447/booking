<template>
  <div class="row" :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'">
    <Sidebar class="col-2"  page1="company" activeNumber="1" @AddManager="AddManager" />
    <Company class="col-10" /> 
    <AddManager v-if="Manager" @Close="Close" />
  </div>
</template>

<script>
import Sidebar from '../components/Sidepar/Sidepar.vue'
import Company from '../components/Company/Company.vue'
import AddManager from "../components/Company/AddManager.vue"
export default {
components :{
  Sidebar,
  Company,
  AddManager
},
data( ) {
  return {
    Manager: false
  }
},
methods: {
  AddManager() {
    
    this.Manager = true;
  },
  Close() {
    this.Manager = false;
  }
 
}
}
</script>

<style>

</style>