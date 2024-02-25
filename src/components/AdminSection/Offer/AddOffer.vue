<template>
  <div class="content-container" style="z-index: 9999">
    <!-- all content that should be hidden goes here -->
    <div class="center-box">
      <div class="title F2_20">
        <h3>{{ $t("Offer.AddNew") }}</h3>
        <img
          @click="Close"
          src="@/assets/Admin/close.svg"
          alt="close"
          style="width: 25px; height: 20px; cursor: pointer"
        />
      </div>
      <div class="line mb-4"></div>
      <div class="mb-2 Font1_20">{{ $t("Offer.StartAt") }}</div>
      <div :class="v$.Offer.StartAt.$error == true ? 'form-group--error' : ''">
        <div v-for="error of v$.Offer.StartAt.$errors" :key="error.$uid">
          <div class="error-msg Font1_16">{{ error.$message }}</div>
        </div>
        <input class="LoginInput mb-3" type="date" v-model="Offer.StartAt" />
      </div>
      <div class="mb-2 Font1_20">{{ $t("Offer.EndAt") }}</div>
      <div :class="v$.Offer.EndAt.$error == true ? 'form-group--error' : ''">
        <div v-for="error of v$.Offer.EndAt.$errors" :key="error.$uid">
          <div class="error-msg Font1_16">{{ error.$message }}</div>
        </div>
        <input class="LoginInput mb-3" type="date" v-model="Offer.EndAt" />
      </div>
      <div class="mb-2 Font1_20">{{ $t("Offer.percentage") }}</div>
      <div
        :class="v$.Offer.percentage.$error == true ? 'form-group--error' : ''"
      >
        <div v-for="error of v$.Offer.percentage.$errors" :key="error.$uid">
          <div class="error-msg Font1_16">{{ error.$message }}</div>
        </div>
        <input
          class="LoginInput mb-3"
          type="text"
          v-model="Offer.percentage"
          @keypress="isNumber($event)"

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
import { required, helpers, maxLength, minValue } from "@vuelidate/validators";
import Button from "@/components/Button";
import Spinner from "@/components/Spinner.vue";
import Select from "@/components/Select.vue";
import { mapState } from "vuex";
export default {
  props: ["Edit1", "dataForEdit"],
  data() {
    return {
      Offer: {
        id: "",
        StartAt: "",
        EndAt: "",
        percentage: 0,
      },
      Loading: false,
      Edit: false,
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
      Offer: {
        StartAt: {
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
        EndAt: {
          required: helpers.withMessage(
            this.$i18n.locale == "ar"
              ? "هذا الحقل مطلوب"
              : "This field is required",
            required
          ),
          minValue: helpers.withMessage(
            this.$i18n.locale == "ar"
              ? "التاريخ يجب ان يكون اكبر  من تاريخ البداية"
              : "End date must be after start day",
            (value) => {
              return new Date(value) > new Date(this.Offer.StartAt);
            }
          ),
        },
        percentage: {
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
          .dispatch("Admin/PutOffer", this.Offer)
          .then((res) => {
            res == true
              ? ((this.Loading = false),
                (this.Close()),
                (this.Offer = {
                id: "",
                StartAt: "",
                EndAt: "",
                percentage: 0,
              }) 
              
              )
              : console.log("Error");
          });
      } else {
        this.$store.dispatch("Admin/PostOffer", this.Offer).then((res) => {
          res == true
            ? ((this.Loading = false),
              (this.Offer = {
                id: "",
                StartAt: "",
                EndAt: "",
                percentage: 0,
              }),
    this.$store.dispatch("Admin/getOffer"),

              this.Close())
            : console.log("Error");
        });
      }
    },
  },
  mounted() {
    if (this.Edit1 == true) {
      this.Offer = {
        id: this.dataForEdit.id,
        StartAt: this.dataForEdit.starts_at,
        EndAt: this.dataForEdit.ends_at,
        percentage: this.dataForEdit.percentage,
      
      };
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
