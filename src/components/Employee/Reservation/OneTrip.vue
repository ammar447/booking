<template>
  <div class="Allpage">
    <div class="container">
      <div class="row mt-4 justify-content-center first">
        <div class="card">
          <div class="Top">
            <h3>{{ OneTrip.id }}</h3>
          </div>
          <div class="details F2_20">
            <div v-if="`${$i18n.locale}` == 'ar'">
              {{ $t("OneTrip.departure_station") }} :
              {{ OneTrip.departure_station }}
            </div>
            <div v-if="`${$i18n.locale}` == 'en'">
              {{ $t("OneTrip.departure_station") }} :
              {{ OneTrip.en_departure_station }}
            </div>
            <div v-if="`${$i18n.locale}` == 'ar'">
              {{ $t("OneTrip.arrival_station") }} :
              {{ OneTrip.arrival_station }}
            </div>
            <div v-if="`${$i18n.locale}` == 'en'">
              {{ $t("OneTrip.arrival_station") }} :
              {{ OneTrip.en_arrival_station }}
            </div>
            <div>
              {{ $t("OneTrip.departure_time") }} : {{ OneTrip.departure_date }}
              {{ OneTrip.departure_time }}
            </div>
            <div>
              {{ $t("OneTrip.departure_time") }} : {{ OneTrip.arrival_date }}
              {{ OneTrip.arrival_time }}
            </div>
            <div>
              {{ $t("OneTrip.cost") }} :
              {{ OneTrip.cost }}
            </div>
            <div>
              {{ $t("OneTrip.max_weight") }} :
              {{ OneTrip.max_weight }}
            </div>
            <div>
              {{ $t("OneTrip.Number") }} :
              {{ OneTrip.number_of_seats }}
            </div>
            <div>
              {{ $t("OneTrip.confirm_date") }} :
              {{ OneTrip.confirm_date }}
            </div>

            <div v-if="`${$i18n.locale}` == 'ar'">
              {{ $t("OneTrip.details") }} :
              {{ OneTrip.details }}
            </div>

            <div v-if="`${$i18n.locale}` == 'en'">
              {{ $t("OneTrip.details") }} :
              {{ OneTrip.en_details }}
            </div>
            <div>
              {{ $t("OneTrip.Offer") }} : {{ OneTrip.offer_percentage }} %
            </div>
          </div>
          <div class="bt mb-2" :v-if="OneTrip.number_of_seats > 0">
            <Button12 @click="Open" :First="$t('OneTrip.confirm')" />
          </div>
        </div>
      </div>
    </div>
    <AddUser v-if="Add" @CloseAdd="Close" @OPenConfirm="OPenConfirm" />
    <AddReservation
      v-if="AddCon"
      :TripId="OneTrip.id"
      :userId="userId"
      @CloseAdd="Close"
      @GoConfirm="GoConfirm"
    />
    <Addconfirm
      v-if="Confirm"
      :ConfirmData="Confirmdata"
      @ConfirmYes="ConfirmYes"
      @ConfirmClose="Close"
    />
  </div>
</template>

<script>
import Addconfirm from "./Addconfirm";
import AddUser from "./AddUser.vue";
import AddReservation from "./AddReservation";
import { mapState } from "vuex";
import Button12 from "@/components/Button";
export default {
  components: {
    Button12,
    AddUser,
    AddReservation,
    Addconfirm,
  },
  data() {
    return {
      Add: false,
      AddCon: false,
      Confirm: false,
      TripId: "",
      userId: "",
      Confirmdata: {},
    };
  },
  methods: {
    Open() {
      this.Add = true;
    },
    Close() {
      this.Add = false;
      this.AddCon = false;
      this.Confirm = false;
    },
    OPenConfirm(data) {
      this.Add = false;
      this.Confirm = false;
      this.AddCon = true;
      this.userId = data.user_id;
    },
    GoConfirm(data) {
      this.Confirmdata = data;
      this.Add = false;
      this.AddCon = false;
      this.Confirm = true;
    },
    ConfirmYes() {
      this.$store
        .dispatch(
          "Employee/ReservationConfirmation",
          this.Confirmdata.data.reservation_id
        )
        .then((res) => {
          res == true
            ? this.$router.push({
                name: "OneTripConfirmd",
                query: { idConfirmd: this.$route.query.id },
              })
            : console.log("error");
          this.Loading = false;
        });
    },
  },
  mounted() {
    this.$store.dispatch("Employee/getTrip", this.$route.query.id);
  },
  computed: {
    ...mapState({
      OneTrip: (state) => state.Employee.Trip,
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
