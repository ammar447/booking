<template>
  <div class="Allpage">
    <div class="container">
      <div class="row mt-4 justify-content-center first">
        <table class="table border-dark">
          <thead class="table-light F2_18">
            <tr>
              <th scope="col">#</th>
              <th scope="col">
                {{ $t("reservation.Name") }}
              </th>
              <th scope="col">
                {{ $t("reservation.user_phone") }}
              </th>
              <th scope="col">{{ $t("reservation.returned_amount") }}</th>
              <th scope="col">{{ $t("reservation.number_of_seats") }}</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody class="F2_16">
            <tr v-for="(Trip, index) in deletedReservation" :key="index">
              <th scope="row">{{ index + 1 }}</th>
              <td  >
                {{ Trip.user_name }}
              </td>
            <!--  <td v-if="`${$i18n.locale}` == 'en'">
                {{ Trip.user_en_name }}
              </td> -->
              <td>
                {{ Trip.user_phone }}
              </td>
              <td>
                {{ Trip.returned_amount }}
              </td>
              <td>{{ Trip.number_of_seats }}</td>

             
              <td>
                <button
                  
                  @click="CallConfirm(Trip.id)"
                  type="button"
                  class="btn btn-danger btn1"
                >
                  {{ $t("Yes") }}
                </button>
              </td>
            </tr>
          </tbody>
        </table>

      </div>
      <ConfirmDelete
      v-if="Delete"
      @ConfirmClose="Close"
      @ConfirmYes="ConfirmYes"
    />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Button from "@/components/Button";
import Spinner from "@/components/Spinner";
import ConfirmDelete from "@/components/ConfirmDelete";
export default {
  components: {
    Button,
    Spinner,
    ConfirmDelete
  },
  data() {
    return {
      Add: false,
      AddCon: false,
      Confirm: false,
      TripId: "",
      userId: "",
      Confirmdata: {},
      Loading: false,
      Delete:false,
      IdDelete:''
    };
  },
  methods: {
    CallConfirm(ID) {
      this.IdDelete= ID
      this.Delete=true
    },
    Close() {
      this.IdDelete= ""
      this.Delete=false
    },
    ConfirmYes() {
      
      this.$store
        .dispatch("Employee/DeleteReservationConfirmation", this.IdDelete  )
        .then((res) => {
          res == true
            ? 
      this.Delete=false

            : console.log("error");
          
        });
    },
  },
  mounted() {
    this.$store.dispatch("Employee/deletedReservation");
  },
  computed: {
    ...mapState({
      deletedReservation: (state) => state.Employee.deletedReservation,
    }),
  },
};
</script>

<style>
.card {
  border: 1px solid #7c02e0;
  width: 50% !important;
  padding: 0px !important;
}
.Top {
  text-align: center;
  border-bottom: 1px solid #000000;
}
.details {
  padding: 10px;
}
.bt {
  width: 50%;
  margin: 0 auto;
}
</style>
