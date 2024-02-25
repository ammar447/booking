<template>
  <div class="content-container" style="z-index: 9999">
    <!-- all content that should be hidden goes here -->
    <div class="center-box">
      <div class="title F2_20">
        <h3>{{ $t("Trip.AddNew.AddNew") }}</h3>
        <img
          @click="Close"
          src="@/assets/Admin/close.svg"
          alt="close"
          style="width: 25px; height: 20px; cursor: pointer"
        />
      </div>
      <div class="line mb-4"></div>
      <div class="mb-2 F2_18">{{ $t("Trip.AddNew.NameAr") }}</div>
      <div :class="v$.Trip.NameAr.$error == true ? 'form-group--error' : ''">
        <div v-for="error of v$.Trip.NameAr.$errors" :key="error.$uid">
          <div class="error-msg F2_18">{{ error.$message }}</div>
        </div>
        <input
          class="LoginInput mb-3"
          type="text"
          v-model="Trip.NameAr"
          style="direction: rtl"
        />
      </div>
      <div class="mb-2 F2_18">{{ $t("Trip.AddNew.NameEn") }}</div>
      <div :class="v$.Trip.NameEn.$error == true ? 'form-group--error' : ''">
        <div v-for="error of v$.Trip.NameEn.$errors" :key="error.$uid">
          <div class="error-msg F2_18">{{ error.$message }}</div>
        </div>
        <input
          class="LoginInput mb-3"
          type="text"
          v-model="Trip.NameEn"
          style="direction: ltr"
        />
      </div>
      <div class="mb-2 F2_18">{{ $t("Trip.AddNew.Transport") }}</div>
       
      <div v-for="error of v$.Trip.transport_id.$errors" :key="error.$uid">
          <div class="error-msg F2_18">{{ error.$message }}</div>
        </div>
      <Select
        :DataAll="Transports"
        @GetValue="SaveTransport"
        :ShowTitle="ShowTitle3"
        Transport="1"
      />
      <div class="mb-2 F2_18">{{ $t("Trip.AddNew.departure_time") }}</div>
      <div
        :class="
          v$.Trip.departure_time.$error == true ? 'form-group--error' : ''
        "
      >
        <div v-for="error of v$.Trip.departure_time.$errors" :key="error.$uid">
          <div class="error-msg F2_18">{{ error.$message }}</div>
        </div>
        <input
          class="LoginInput mb-3"
          v-model="Trip.departure_time"
          type="datetime-local"
          id="birthdaytime"
          name="birthdaytime"
        />
      </div>
      <div class="mb-2 F2_18">{{ $t("Trip.AddNew.departure_station") }}</div>
      
      <div v-for="error of v$.Trip.departure_station_id.$errors" :key="error.$uid">
          <div class="error-msg F2_18">{{ error.$message }}</div>
        </div>
       
      <Select
        :DataAll="Stations"
        @GetValue="SaveDstation"
        :ShowTitle="ShowTitle1"
      />
      <div class="mb-2 F2_18">{{ $t("Trip.AddNew.arrival_time") }}</div>
      <div
        :class="v$.Trip.arrival_time.$error == true ? 'form-group--error' : ''"
      >
        <div v-for="error of v$.Trip.arrival_time.$errors" :key="error.$uid">
          <div class="error-msg F2_18">{{ error.$message }}</div>
        </div>
        <input
          class="LoginInput mb-3"
          v-model="Trip.arrival_time"
          type="datetime-local"
          id="birthdaytime"
          name="birthdaytime"
        />
      </div>
      <div class="mb-2 F2_18">{{ $t("Trip.AddNew.arrival_station") }}</div>
      <div v-for="error of v$.Trip.arrival_station_id.$errors" :key="error.$uid">
          <div class="error-msg F2_18">{{ error.$message }}</div>
        </div>
      <Select
        :DataAll="Stations"
        @GetValue="SaveAstation"
        :ShowTitle="ShowTitle2"
      />

   
      

      <div class="mb-2 F2_18">{{ $t("Trip.AddNew.cost") }}</div>
      <div :class="v$.Trip.cost.$error == true ? 'form-group--error' : ''">
        <div v-for="error of v$.Trip.cost.$errors" :key="error.$uid">
          <div class="error-msg F2_18">{{ error.$message }}</div>
        </div>
        <input class="LoginInput mb-3" type="text" v-model="Trip.cost" 
        @keypress="isNumber($event)"
        
         />
      </div>
      <div class="mb-2 F2_18">{{ $t("Trip.AddNew.max_weight") }}</div>
      <div
        :class="v$.Trip.max_weight.$error == true ? 'form-group--error' : ''"
      >
        <div v-for="error of v$.Trip.max_weight.$errors" :key="error.$uid">
          <div class="error-msg F2_18">{{ error.$message }}</div>
        </div>
        <input
          class="LoginInput mb-3"
          type="text"
          v-model="Trip.max_weight"
          @keypress="isNumber($event)"
         
        />
      </div>
      <div class="mb-2 F2_18">{{ $t("Trip.AddNew.confirm_date") }}</div>
      <div
        :class="v$.Trip.confirm_date.$error == true ? 'form-group--error' : ''"
      >
        <div v-for="error of v$.Trip.confirm_date.$errors" :key="error.$uid">
          <div class="error-msg F2_18">{{ error.$message }}</div>
        </div>
        <input
          class="LoginInput mb-3"
          type="date"
          v-model="Trip.confirm_date"
        />
      </div>
      <div class="mb-2 F2_18">{{ $t("Trip.AddNew.details") }}</div>
      <div :class="v$.Trip.details.$error == true ? 'form-group--error' : ''">
        <div v-for="error of v$.Trip.details.$errors" :key="error.$uid">
          <div class="error-msg F2_18">{{ error.$message }}</div>
        </div>
        <textarea
          class="LoginInput F2_18 mb-4"
          rows="10"
          id=""
          name="message"
          v-model="Trip.details"
        >
        </textarea>
      </div>
      <div class="mb-2 F2_18">{{ $t("Trip.AddNew.en_details") }}</div>
      <div
        :class="v$.Trip.en_details.$error == true ? 'form-group--error' : ''"
      >
        <div v-for="error of v$.Trip.en_details.$errors" :key="error.$uid">
          <div class="error-msg F2_18">{{ error.$message }}</div>
        </div>
        <textarea
          class="LoginInput F2_18 mb-4"
          rows="10"
          id=""
          name="message"
          v-model="Trip.en_details"
        >
        </textarea>
      </div>
      
      <div class="mb-2 F2_18">{{ $t("Trip.AddNew.offer") }}</div>
      <div v-for="error of v$.Trip.en_details.$errors" :key="error.$uid">
          <div class="error-msg F2_18">{{ error.$message }}</div>
        </div>
      <Select
        :DataAll="Offers"
        @GetValue="SaveOffer"
        :ShowTitle="ShowTitle4"
      />
       
      <Button
        v-if="!Loading"
        @click="Save"
        :First="$t('Global.Save')"
        style="margin: 0 auto"
      />
      <div v-else  style=" width: 100%; text-align: center;">
        <Spinner  />
      </div>
    </div>
  </div>
</template>

<script>
/**
 *
 */
import { useVuelidate } from "@vuelidate/core";
import { required, helpers, maxLength, minValue } from "@vuelidate/validators";
import Button from "@/components/Button";
import Spinner from "@/components/Spinner.vue";
import Select from "@/components/Select.vue";
import { mapState } from "vuex";
export default {
  props: ["Edit1", "dataForEdit"],
  data() {
    return {
      Trip: {
        id: "",
        NameAr: "",
        NameEn: "",
        departure_time: "",
        arrival_time: "",
        cost: "",
        confirm_date: "",
        max_weight: "",
        details: "",
        en_details: "",
        departure_station_id: "",
        arrival_station_id: "",
        transport_id: "",
        OfferId:""
      },
      Loading: false,
      ShowTitle1: "",
      ShowTitle2: "",
      ShowTitle3: "",
      ShowTitle4: ""

    };
  },
  components: {
    Button,
    Spinner,
    Select,
  },
  setup() {
    return { v$: useVuelidate() };
  },
  validations() {
    return {
      Trip: {
        NameAr: {
          required: helpers.withMessage(
            this.$i18n.locale == "ar"
              ? "هذا الحقل مطلوب"
              : "This field is required",
            required
          ),
        },
        NameEn: {
          required: helpers.withMessage(
            this.$i18n.locale == "ar"
              ? "هذا الحقل مطلوب"
              : "This field is required",
            required
          ),
        },
        cost: {
          required: helpers.withMessage(
            this.$i18n.locale == "ar"
              ? "هذا الحقل مطلوب"
              : "This field is required",
            required
          ),
          maxLength: helpers.withMessage(
            this.$i18n.locale == "ar"
              ? "أقصى حد هو 10 ارقام"
              : "the max number is 10",
            maxLength(11)
          ),
        },
        max_weight: {
          required: helpers.withMessage(
            this.$i18n.locale == "ar"
              ? "هذا الحقل مطلوب"
              : "This field is required",
            required
          ),
          maxLength: helpers.withMessage(
            this.$i18n.locale == "ar"
              ? "أقصى حد هو 10 ارقام"
              : "the max number is 10",
            maxLength(11)
          ),
        },
        details: {
          required: helpers.withMessage(
            this.$i18n.locale == "ar"
              ? "هذا الحقل مطلوب"
              : "This field is required",
            required
          ),
        },
        en_details: {
          required: helpers.withMessage(
            this.$i18n.locale == "ar"
              ? "هذا الحقل مطلوب"
              : "This field is required",
            required
          ),
        },
        departure_time: {
          required: helpers.withMessage(
            this.$i18n.locale == "ar"
              ? "هذا الحقل مطلوب"
              : "This field is required",
            required
          ),
          minValue: helpers.withMessage(
            this.$i18n.locale == "ar"
              ? "التاريخ يجب ان يكون اكبر من تاريخ اليوم"
              : "End date must be after today",
            (value) => {
              return new Date(value) > new Date();
            }
          ),
        },
        arrival_time: {
          required: helpers.withMessage(
            this.$i18n.locale == "ar"
              ? "هذا الحقل مطلوب"
              : "This field is required",
            required
          ),
          minValue: helpers.withMessage(
            this.$i18n.locale == "ar"
              ? "التاريخ يجب ان يكون اكبر من تاريخ اليوم"
              : "End date must be after today",
            (value) => {
              return new Date(value) > new Date();
            }
          ),
        },
        confirm_date: {
          required: helpers.withMessage(
            this.$i18n.locale == "ar"
              ? "هذا الحقل مطلوب"
              : "This field is required",
            required
          ),
          minValue: helpers.withMessage(
            this.$i18n.locale == "ar"
              ? "التاريخ يجب ان يكون اكبر من تاريخ اليوم"
              : "End date must be after today",
            (value) => {
              return new Date(value) > new Date();
            }
          ),
           
        },
        OfferId: {
          required: helpers.withMessage(
            this.$i18n.locale == "ar"
              ? "هذا الحقل مطلوب"
              : "This field is required",
            required
          ),
          
           
        },   
        arrival_station_id: {
          required: helpers.withMessage(
            this.$i18n.locale == "ar"
              ? "هذا الحقل مطلوب"
              : "This field is required",
            required
          ),
           
           
        },
        departure_station_id: {
          required: helpers.withMessage(
            this.$i18n.locale == "ar"
              ? "هذا الحقل مطلوب"
              : "This field is required",
            required
          ),
        },
        transport_id: {
          required: helpers.withMessage(
            this.$i18n.locale == "ar"
              ? "هذا الحقل مطلوب"
              : "This field is required",
            required
          ),
        },
         
      },
    };
  },
  methods: {
    validationStatus: function (validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },
    isNumber: function(evt) {
      evt = (evt) ? evt : window.event;
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault();;
      } else {
        return true;
      }
    } ,
    SaveDstation(data) {
      this.Trip.departure_station_id = data.id;
      if (this.$i18n.locale == "ar") {
        this.ShowTitle1 = data.name;
      } else {
        this.ShowTitle1 = data.en_name;
      }
    },
    SaveAstation(data) {
      this.Trip.arrival_station_id = data.id;
      if (this.$i18n.locale == "ar") {
        this.ShowTitle2 = data.name;
      } else {
        this.ShowTitle2 = data.en_name;
      }
    },
    SaveTransport(data) {
      this.Trip.transport_id = data.id;
      if (this.$i18n.locale == "ar") {
        this.ShowTitle3 = data.name;
      } else {
        this.ShowTitle3 = data.en_name;
      }
    },
    SaveOffer(data){
      this.Trip.OfferId = data.id;
      if (this.$i18n.locale == "ar") {
        this.ShowTitle4 = data.percentage;
      } else {
        this.ShowTitle4 = data.percentage;
      }
    },
    Close() {
      this.$emit("CloseAdd");
    },
    go() {
      console.log(this.Office.Close_at);
    },
    Save() {
      this.v$.$touch();
      if (this.v$.$pendding || this.v$.$error) {
        console.log("error");
        return;
      }
      this.Loading = true;
      if (this.Edit1) {
        this.$store.dispatch("Admin/PutOffice", this.Office).then((res) => {
          res == true
            ? ((this.Loading = false),
              (this.Office = {
                id: "",
                NameAr: "",
                NameEn: "",
                Mtn_phone: "",
                Syriatel_phone: "",
                Open_at: "",
                Close_at: "",
                currLocation: {},
              }),
              this.$emit("CloseAdd"))
            : console.log("Error");
        });
      } else {
        this.$store.dispatch("Manager/PostTrip", this.Trip).then((res) => {
          res == true
            ? ((this.Loading = false),
              this.Close(),
              this.$store.dispatch("Manager/getTrip"))
            : console.log("Error");
        });
      }
    },
  },
  mounted() {
    if (this.Edit1 == true) {
      this.Office = {
        id: this.dataForEdit.id,
        NameAr: this.dataForEdit.name,
        NameEn: this.dataForEdit.en_name,
        Mtn_phone: this.dataForEdit.mtn_phone,
        Syriatel_phone: this.dataForEdit.syriatel_phone,
        Open_at: this.dataForEdit.open_at,

        Close_at: this.dataForEdit.close_at,
        location_name: this.dataForEdit.location_name,
        location_en_name: this.dataForEdit.location_enname,
        currLocation: {
          longitude: this.dataForEdit.location_lang,
          currLocation: this.dataForEdit.location_lat,
        },
      };
    }
    this.$store.dispatch("Manager/getTransport");
    this.$store.dispatch("Manager/getStation");
    this.$store.dispatch("Admin/getOffer");
  },
  computed: {
    ...mapState({
      Transports: (state) => state.Manager.Transport,
      Stations: (state) => state.Manager.Station,
      Offers: (state) => state.Admin.Offer,


    }),
  },
};
</script>

<style lang="scss">
.content-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1001;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* add a shadow effect */
  display: flex;
  justify-content: center;
  align-items: center;
}
.center-box {
  background-color: $forth;
  z-index: 11;
  height: 400px;
  width: 50%;
  border-radius: 5px;
  padding: 25px 25px;
  overflow-y: scroll;
}

.center-box::-webkit-scrollbar {
  width: 5px;
}
.center-box::-webkit-scrollbar-track {
  background-color: darkgrey;
}
.center-box::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
}
.title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.line {
  border-bottom: 1px solid black;
}
</style>
