<template>
    <div  class="row" :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'">
    <SidePar class="col-2"  page2="Admin"  activeNumber="6" @ChangePassword="ChangePassword"/>
    <Employe class="col-10" />
    <Change  v-if="Manager"  @Close="Close"/>
    </div>
  </template>
  
  <script>
  import SidePar from '@/components/Sidepar/Sidepar.vue';
  import  Employe  from '@/components/AdminSection/EmployeDet/Employe.vue';
import Change from "@/components/AdminSection/Change"

  export default {
  components:{
      SidePar,
      Employe ,
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