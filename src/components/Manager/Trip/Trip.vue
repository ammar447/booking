<template>
  <div class="Allpage">
    <HeaderSection @OpenAdd="OpenAdd" />
    <div class="container">
      <div class="row mt-4 justify-content-around first">
        <table class="table  border-dark  ">
          <thead class=" table-light F2_18">
            <tr>
              <th scope="col">#</th>
              <th scope="col">{{ $t("Trip.departure_station") }} &&{{ $t("Trip.Arrival_station") }}</th>
              <th scope="col">{{ $t("Trip.departure_time") }} && {{ $t("Trip.arrival_time") }} </th>
              <th scope="col">{{ $t("Trip.number_of_seats") }}</th>
              <th scope="col">{{ $t("Trip.cost") }}</th>
              <th scope="col">{{ $t("Trip.confirm_date") }}</th>

              <th scope="col"></th>

            </tr>
          </thead>
          <tbody 
           class="F2_16"
           >
           <tr  v-for="(Trip,index) in Trips"
           :key="index">
              <th scope="row">{{index+1}}</th>
              <td v-if="`${$i18n.locale}` == 'ar'" >
                {{ Trip.departure_station}}
                        <br />
                {{Trip.arrival_station}}
              </td>
              <td  v-if="`${$i18n.locale}` == 'en'"  > 
                 {{ Trip.en_departure_station }}
                <br/>
                   {{ Trip.en_arrival_station }}
              </td>
              <td>
                {{ Trip.departure_time }} _ {{ Trip.departure_date }}
                <br />
                {{ Trip.arrival_time }} _ {{ Trip.arrival_date }}
              </td>

              <td >{{ Trip.number_of_seats }}</td>
              
              <td>
                {{ Trip.cost }}
               
              </td>
              <td>
                {{ Trip.confirm_date }}
               
              </td>
              <td style="text-align: center;">
                <img
                class="DeleteEdite"
                src="../../../assets/Admin/Delete.svg"
                alt="Delete"
                @click="Delete(Trip.id)"
              />
            <!--  <img
                class="DeleteEdite"
                src="../../../assets/Admin/Edit.svg"
                alt="Edit"
                @click.prevent="Editdata(Trip)"
              /> -->
              </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
   
    <AddOffice v-if="Add" @CloseAdd="Close" 
    :dataForEdit="dataForEdit"
    :Edit1="Edit1"
    />
     <ConfirmDelete
     v-if="Confirm"
      @ConfirmClose="Close"
      @ConfirmYes="ConfirmYes"
      />
  </div>
</template>

<script>
import HeaderSection from "@/components/HeaderSection";
import { mapState } from "vuex";
import AddOffice from "./AddTrip.vue";
import ConfirmDelete from "@/components/ConfirmDelete.vue";
export default {
  components: {
    HeaderSection,
    AddOffice,
    ConfirmDelete
},
  data() {
    return {
      Add: false,
      Confirm:false,
      DeleteId:'' ,
      dataForEdit:{},
      Edit1:false
    };
  },
  methods: {
    OpenAdd() {
      this.Add = true;
    },
    Close() {
      this.Add = false;
    this.Confirm = false
this.Edite1=false
    },
    Editdata(data) {
     this.dataForEdit=data;
     this.Edit1= true
   console.log(data);
   this.Add=true
    },
    Delete(id) {
    this.DeleteId = id
    this.Confirm = true
    },
    ConfirmYes() {
      this.$store.dispatch("Manager/DeleteTrip", this.DeleteId);
      this.Confirm = false;
    },
  },
  mounted() {
    this.$store.dispatch("Manager/getTrip");
  },

  computed: {
    ...mapState({
      Trips: (state) => state.Manager.Trip,
    }),
  },
};
</script>

<style></style>
