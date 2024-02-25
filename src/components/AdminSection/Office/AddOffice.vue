<template>
  <div class="content-container" style="z-index: 9999">
    <!-- all content that should be hidden goes here -->
    <div class="center-box">
      <div class="title F2_18">
        <h3 >{{ $t("Office.AddNew.AddNew") }}</h3>
        <img
          @click="Close"
          src="@/assets/Admin/close.svg"
          alt="close"
          style="width: 25px; height: 20px; cursor: pointer"
        />
      </div>
      <div class="line mb-4"></div>
      <div class="mb-2 F2_18">{{ $t("Office.AddNew.NameAr") }}</div>
      <div :class="v$.Office.NameAr.$error == true ? 'form-group--error' : ''">
        <div v-for="error of v$.Office.NameAr.$errors" :key="error.$uid">
          <div class="error-msg Font1_16">{{ error.$message }}</div>
        </div>
        <input
          class="LoginInput mb-3"
          type="text"
          v-model="Office.NameAr"
          style="direction: rtl"
        />
      </div>
      <div class="mb-2 F2_18">{{ $t("Office.AddNew.NameEn") }}</div>
      <div :class="v$.Office.NameEn.$error == true ? 'form-group--error' : ''">
        <div v-for="error of v$.Office.NameEn.$errors" :key="error.$uid">
          <div class="error-msg Font1_16">{{ error.$message }}</div>
        </div>
        <input
          class="LoginInput mb-3"
          type="text"
          v-model="Office.NameEn"
          style="direction: ltr"
        />
      </div>
      <div class="mb-2 F2_18">{{ $t("Office.AddNew.Mtn_phone") }}</div>
      <div
        :class="v$.Office.Mtn_phone.$error == true ? 'form-group--error' : ''"
      >
        <div v-for="error of v$.Office.Mtn_phone.$errors" :key="error.$uid">
          <div class="error-msg F2_18">{{ error.$message }}</div>
        </div>
        <input
          class="LoginInput mb-3"
          type="text"
          v-model="Office.Mtn_phone"
          @keypress="isNumber($event)"

        />
      </div>
      <div class="mb-2 F2_18">{{ $t("Office.AddNew.Syriatel_phone") }}</div>
      <div
        :class="
          v$.Office.Syriatel_phone.$error == true ? 'form-group--error' : ''
        "
      >
        <div
          v-for="error of v$.Office.Syriatel_phone.$errors"
          :key="error.$uid"
        >
          <div class="error-msg F2_18">{{ error.$message }}</div>
        </div>
        <input
          class="LoginInput mb-3"
          type="text"
          v-model="Office.Syriatel_phone"
          @keypress="isNumber($event)"

        />
      </div>
      <div class="mb-2 F2_18">{{ $t("Office.AddNew.location_name") }}</div>
      <div
        :class="
          v$.Office.location_name.$error == true ? 'form-group--error' : ''
        "
      >
        <div v-for="error of v$.Office.location_name.$errors" :key="error.$uid">
          <div class="error-msg F2_18">{{ error.$message }}</div>
        </div>
        <input
          class="LoginInput mb-3"
          type="text"
          v-model="Office.location_name"
        />
      </div>
      <div class="mb-2 F2_18">
        {{ $t("Office.AddNew.location_en_name") }}
      </div>
      <div
        :class="
          v$.Office.location_en_name.$error == true ? 'form-group--error' : ''
        "
      >
        <div
          v-for="error of v$.Office.location_en_name.$errors"
          :key="error.$uid"
        >
          <div class="error-msg F2_18">{{ error.$message }}</div>
        </div>
        <input
          class="LoginInput mb-3"
          type="text"
          v-model="Office.location_en_name"
        />
      </div>
      <div class="mb-2 F2_18">{{ $t("Office.AddNew.Open_at") }}</div>
      <div :class="v$.Office.Open_at.$error == true ? 'form-group--error' : ''">
        <div v-for="error of v$.Office.Open_at.$errors" :key="error.$uid">
          <div class="error-msg Font1_16">{{ error.$message }}</div>
        </div>
        <input class="LoginInput mb-3" type="time" v-model="Office.Open_at" />
      </div>
      <div class="mb-2 F2_18">{{ $t("Office.AddNew.Close_at") }}</div>
      <div
        :class="v$.Office.Close_at.$error == true ? 'form-group--error' : ''"
      >
        <div v-for="error of v$.Office.Close_at.$errors" :key="error.$uid">
          <div class="error-msg F2_18">{{ error.$message }}</div>
        </div>
        <input
          class="LoginInput mb-3"
          type="time"
          v-model="Office.Close_at"
          @change="go"
        />
      </div>
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
import { required, helpers, maxLength } from "@vuelidate/validators";
import Button from "@/components/Button";
import Spinner from "@/components/Spinner.vue";
import Select from "@/components/Select.vue";
import { mapState } from "vuex";
export default {
  props: ["Edit1", "dataForEdit"],
  data() {
    return {
      Office: {
        id: "",
        NameAr: "",
        NameEn: "",
        Mtn_phone: "",
        Syriatel_phone: "",
        Open_at: "",
        Close_at: "",
        location_name: "",
        location_en_name: "",
        currLocation: {
          latitude: "",
          longitude: "",
        },
      },
      Loading: false,
     
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
      Office: {
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
        Mtn_phone: {
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
        Syriatel_phone: {
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
        Open_at: {
          required: helpers.withMessage(
            this.$i18n.locale == "ar"
              ? "هذا الحقل مطلوب"
              : "This field is required",
            required
          ),
        },
        Close_at: {
          required: helpers.withMessage(
            this.$i18n.locale == "ar"
              ? "هذا الحقل مطلوب"
              : "This field is required",
            required
          ),
        },
        location_en_name: {
          required: helpers.withMessage(
            this.$i18n.locale == "ar"
              ? "هذا الحقل مطلوب"
              : "This field is required",
            required
          ),
        },
        location_name: {
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
        this.$store
          .dispatch("Admin/PutOffice", this.Office)
          .then((res) => {
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
                this.$emit('CloseAdd')
                
                )
              : console.log("Error");
          });
      } else {
        this.$store.dispatch("Admin/PostOffice", this.Office).then((res) => {
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
              this.Close() ,
    this.$store.dispatch("Admin/getOffice")
              
              )
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
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((currentPosition) => {
        this.Office.currLocation = {
          latitude: currentPosition.coords.latitude,
          longitude: currentPosition.coords.longitude,
        };
        console.log("hello" + currentPosition.coords.latitude);
      });
    } else {
      alert("Geolocation is not supported in this browser");
    }
  },
  computed: {
    ...mapState({
      TypeList: (state) => state.Company.TypeList,
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
