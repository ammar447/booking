<template>
      <div class="container">
      <div class="row mt-4 justify-content-around first">
        <div class="col-2 F2_22">
         {{ HeaderTitle }}
         <Button @click="OpenAdd" :First="$t('Company.Add')" />

        </div>
        <div class="col-8 date1 F2_22">
          {{ date }}
        </div>
      </div>
      </div>
</template>

<script>
import Button from './Button.vue';
export default {
    props:['HeaderTitle'],
    components :{
      Button
    },
    data() {
    return {
      date: "",
       
    };
  },
  methods: {
    date_function: function () {
      this.date = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
    },
    OpenAdd() {
      this.$emit('OpenAdd');
    }
  },
  mounted() {
    this.date_function();
      
  },
}
</script>

<style>

</style>