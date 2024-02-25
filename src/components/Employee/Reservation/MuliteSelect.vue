<template>
    <div class="test123">
      <div class="example">
    
        <Multiselect
        @click="hi"
  v-model="value"
  mode="tags"
  :close-on-select="true"
  :searchable="true"
  :create-option="true"
  :options= "options" 
/>
     
    </div>
    </div>
  </template>
  
  <script>
    import Multiselect from '@vueform/multiselect'
import { mapState } from 'vuex'
  
    export default {
      components: {
        Multiselect,
      },
      data() {
        return {
          value: []
        }
      } ,
      methods: {
        hi() {
           console.log( this.value)
         }
      },
      mounted() {
        
      },
      computed :{
        ...mapState({
            options : (state) => state.Employee.options
            
        })
        
      }
    }
  </script>
  
  <style src="@vueform/multiselect/themes/default.css">
   
  
  </style>