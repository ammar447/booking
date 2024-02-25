<template>
  <div class="test123">
    <div class="example">
    <h3 id="example-5">#5 - Tags with create, search and array of objects options</h3>
  
    <Multiselect
      v-model="example5.value"
      v-bind="example5"
    ></Multiselect>
   
  </div>
  </div>
</template>

<script>
  import Multiselect from '@vueform/multiselect'

  export default {
    components: {
      Multiselect,
    },
    data() {
      return {
        example5: {
    	mode: 'tags',
      value: ['batman'],
      closeOnSelect: false,
      options: [
        { value: 'batman', label: 'Batman' },
        { value: 'robin', label: 'Robin' },
        { value: 'joker', label: 'Joker' },
      ],
      searchable: true,
      createOption: true
    },
      }
    }
  }
</script>

<style src="@vueform/multiselect/themes/default.css">
 

</style>