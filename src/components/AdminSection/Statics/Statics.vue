<template>
  <div class="Allpage">
    <div class="container">
      <div class="row mt-4 justify-content-around first">
        <div class="col-2 F2_22">
          {{ $t("Statics.Statics") }}
        </div>
        <div class="col-8 date1 F2_22">
          {{ date }}
        </div>
      </div>
      <div class="row justify-content-evenly mt-4">
        <div class="col-10 col-md-3 Statics mt-2">
          <h4 class="F2" >
            {{ $t("Statics.completed_trips") }}
          </h4>
            <p class="F2"> {{ $t("Statics.completedDetails") }} </p>
           {{Statics.completed_trips }}
        </div>
        <div class="col-10 col-md-3 Statics mt-2">
          <h4 class="F2">
            {{ $t("Statics.coming_trips") }}
          </h4>
          <p class="F2" > {{ $t("Statics.comingDetails") }} </p>
          
          {{Statics.coming_trips }}

        </div>
        <div class="col-10 col-md-3 Statics mt-2">
          <h4 class="F2">
            {{ $t("Statics.clients") }}
          </h4>
          <p class="F2"> {{ $t("Statics.completedDetails") }} </p>
         
          {{Statics.offices }}

        </div>
      </div>
      <div class="row mt-4 mb-4 justify-content-around first">
        <h3 >
            {{ $t('Statics.clients') }}
          </h3>
        <div class="col-5">
          <PieComponents :data1="Statics.reservations_confirmed"
     :data2="Statics.reservations_unconfirmed"
       />
        </div>
        <div class="col-5">
          <Line /> 
        </div>

        
        
        </div>
      
    </div>
  </div>
</template>

<script    >
import { mapState } from 'vuex';
 import PieComponents from "./Pie/Pie.vue";
import  Line  from './Line/Line.vue';
 
 
export default {
  components: { PieComponents, Line },
  data() {
    return {
      date: "",
       
    };
  },
  methods: {
    date_function: function () {
      this.date = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
    },
  },
  mounted() {
    this.date_function();
     this.$store.dispatch("Admin/getStatics");
  },
  computed : {
    ...mapState ({
      Statics : (state) => state.Admin.Statics
    })
  }
};
</script>

<style lang="scss">
.Allpage {
  background-color: $forth;
  height: 100vh;
  
  padding-bottom: 10px;
}
.Statics {
  background-color: $secondary;
  border-radius: 20px;
  height: 125px;
  padding: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}
.Statics:nth-child(odd) {
  background-color: $Sex;
  color: $t_secondary;
  border-radius: 20px;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}
.Statics p {
  color: #9f9f9f;
} 
</style>
