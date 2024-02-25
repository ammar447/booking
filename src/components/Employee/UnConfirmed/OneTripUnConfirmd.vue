<template>
  <div class="Allpage">
    <div class="container">
      <h3 class="mt-4 F2_25" style="text-align: center;"> {{ $t('reservation.tripNumberUn') }} ({{ this.$route.query.idUnConfirmd }}) </h3>
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
              <th scope="col">{{ $t("reservation.number_of_seats") }}</th>
              <th scope="col">{{ $t("reservation.total_cost") }}</th>
              
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody class="F2_16">
            <tr v-for="(Trip, index) in UnConfirmedTrip" :key="index">
              <th scope="row">{{ index + 1 }}</th>
              <td  >
                {{ Trip.user_name }}
              </td>
           <!--   <td v-if="`${$i18n.locale}` == 'en'">
                {{ Trip.user_en_name }}
              </td> -->
              <td>
                {{ Trip.user_phone }}
              </td>

              <td>{{ Trip.number_of_seats }}</td>

              <td>
                {{ Trip.total_cost }}
              </td>
              <td>
                <Button
                  @click="CallConfirm(Trip.id)"
                  :First="$t('Global.confirm')"
                  style="margin: 0 auto"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Canfirme v-if="Delete" @ConfirmClose="Close" @ConfirmYes="ConfirmYes" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Button from "@/components/Button";
import Canfirme from "./Canfirme.vue";
export default {
  components: {
    Button,
    Canfirme,
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
      Delete: false,
      IdDelete: "",
    };
  },
  methods: {
    CallConfirm(ID) {
      this.IdDelete = ID;
      this.Delete = true;
    },
    Close() {
      this.IdDelete = "";
      this.Delete = false;
    },
    ConfirmYes() {
      this.$store
        .dispatch("Employee/ReservationConfirmation", this.IdDelete)
        .then((res) => {
          res == true
            ? this.$router.push({
                name: "OneTripConfirmd",
                query: { idConfirmd: this.$route.query.idUnConfirmd },
              })
            : console.log("error");
          this.Loading = false;
        });
    },
    Save(data) {},
  },
  mounted() {
    this.$store.dispatch(
      "Employee/getUnConfirmedTrip",
      this.$route.query.idUnConfirmd
    );
  },
  computed: {
    ...mapState({
      UnConfirmedTrip: (state) => state.Employee.UnConfirmedTrip,
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
