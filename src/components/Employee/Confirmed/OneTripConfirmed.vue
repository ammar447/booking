<template>
  <div class="Allpage">
    <div class="container">
      <h3 class="mt-4 F2_25" style="text-align: center;"> {{ $t('reservation.tripNumber') }} ({{ this.$route.query.idConfirmd }}) </h3>

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
            <tr v-for="(Trip, index) in ConfirmedTrip" :key="index">
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

              <td>{{ Trip.number_of_seats }}</td>

              <td>
                {{ Trip.total_cost }}
              </td>
              <td>
                <button
                  v-if="Trip.can_delete"
                  @click="CallConfirm(Trip.id)"
                  type="button"
                  class="btn btn-danger btn1"
                >
                  {{ $t("Yes") }}
                </button>
                <button
                  v-else
                  disabled
                  type="button"
                  class="btn btn-danger btn1"
                >
                  {{ $t("NotAllowed") }}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <ConfirmedDelete
     v-if="Confirm"
     @ConfirmYes="ConfirmYes"
     @ConfirmClose="ConfirmClose"
     />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Button from "@/components/Button";

import ConfirmedDelete from "./CanfirmedDelete.vue";
export default {
  components: {
    Button,
    ConfirmedDelete,
  },
  data() {
    return {
      Confirm: false,
   Id:'',
      Loading: false,
    };
  },
  methods: {
    CallConfirm(data) {
      this.$store.dispatch("Employee/getDetailsDelete", data);
      this.Id = data
      this.Confirm = true;
    },
    ConfirmClose() {
  this.Confirm = false
    },
    ConfirmYes() {
   //   this.Loading = true;
  this.Confirm = false
      this.$store
        .dispatch("Employee/DeleteReservation", this.Id);
        /**
         *  .then((res) => {
          res == true
            ? this.$router.push({
                name: "OneTripConfirmd",
                query: { idConfirmd: this.$route.query.idUnConfirmd },
              })
            : console.log("error");
          this.Loading = false;
        });
         * 
         */
    },
  },
  mounted() {
    this.$store.dispatch(
      "Employee/getConfirmedTrip",
      this.$route.query.idConfirmd
    );
  },
  computed: {
    ...mapState({
      ConfirmedTrip: (state) => state.Employee.ConfirmedTrip,
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

.btn1 {
  justify-content: center;
  display: flex !important;
  width: 65%;
  margin: 0 auto;
}
</style>
