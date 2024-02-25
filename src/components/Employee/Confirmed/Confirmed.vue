<template>
    <div class="Allpage">
      <div class="container">
        <div class="row mt-4 justify-content-around first">
          <table class="table border-dark">
            <thead class="table-light F2_18">
              <tr>
                <th scope="col">#</th>
                <th scope="col">
                  {{ $t("Trip.departure_station") }} &&{{
                    $t("Trip.Arrival_station")
                  }}
                </th>
                <th scope="col">
                  {{ $t("Trip.departure_time") }} && {{ $t("Trip.arrival_time") }}
                </th>
                <th scope="col">{{ $t("Trip.number_of_seats") }}</th>
                <th scope="col">{{ $t("Trip.cost") }}</th>
                <th scope="col">{{ $t("Trip.confirm_date") }}</th>
              </tr>
            </thead>
            <tbody class="F2_16">
              <tr
                v-for="(Trip, index) in Trips"
                :key="index"
                @click="OpenTrip(Trip)"
              >
                <th scope="row">{{ index + 1 }}</th>
                <td v-if="`${$i18n.locale}` == 'ar'">
                  {{ Trip.departure_station }}
                  <br />
                  {{ Trip.arrival_station }}
                </td>
                <td v-if="`${$i18n.locale}` == 'en'">
                  {{ Trip.en_departure_station }}
                  <br />
                  {{ Trip.en_arrival_station }}
                </td>
                <td>
                  {{ Trip.departure_time }} _ {{ Trip.departure_date }}
                  <br />
                  {{ Trip.arrival_time }} _ {{ Trip.arrival_date }}
                </td>
  
                <td>{{ Trip.number_of_seats }}</td>
  
                <td>
                  {{ Trip.cost }}
                </td>
                <td>
                  {{ Trip.confirm_date }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { mapState } from "vuex";
  
  export default {
    components: {},
    data() {
      return {
        Add: false,
        Confirm: false,
        DeleteId: "",
        dataForEdit: {},
        Edit1: false,
      };
    },
    methods: {
      OpenTrip(data) {
        this.$router.push({
                name: "OneTripConfirmd",
                query: { idConfirmd: data.id },
              })
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
  