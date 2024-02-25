<template>
  <div  class="row" :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'">
  <SidePar class="col-2"  page2="Admin" activeNumber="4" @ChangePassword="ChangePassword" />
  <Office class="col-10" />
  <Change  v-if="Manager"  @Close="Close"/>

  </div>
</template>

<script>
import SidePar from '@/components/Sidepar/Sidepar.vue';
import  Office  from '@/components/AdminSection/Office/Office.vue';
import Change from "@/components/AdminSection/Change"

export default {
components:{
    SidePar,
    Office ,
    Change
} ,

data( ) {
  return {
    Manager: false
  }
},
methods :{
  ChangePassword() {
    
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