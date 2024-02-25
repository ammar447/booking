<template>
  <div class="content-container" style="z-index: 9999">
    <!-- all content that should be hidden goes here -->
    <div class="center-box">
      <div class="title F2_20">
        <h3>{{ $t("Company.AddNew.AddNew") }}</h3>
        <img
          @click="Close"
          src="../../assets/Admin/close.svg"
          alt="close"
          style="width: 25px; height: 20px; cursor: pointer"
        />
      </div>
      <div class="line mb-4"></div>
      <div class="mb-2 Font1_20">{{ $t("Company.AddNew.NameAr") }}</div>
      <div :class="v$.Company.NameAr.$error == true ? 'form-group--error' : ''">
        <div v-for="error of v$.Company.NameAr.$errors" :key="error.$uid">
          <div class="error-msg Font1_16">{{ error.$message }}</div>
        </div>
        <input
          class="LoginInput mb-3"
          type="text"
          v-model="Company.NameAr"
          style="direction: rtl"
        />
      </div>
      <div class="mb-2 Font1_20">{{ $t("Company.AddNew.NameEn") }}</div>
      <div :class="v$.Company.NameEn.$error == true ? 'form-group--error' : ''">
        <div v-for="error of v$.Company.NameEn.$errors" :key="error.$uid">
          <div class="error-msg Font1_16">{{ error.$message }}</div>
        </div>
        <input
          class="LoginInput mb-3"
          type="text"
          v-model="Company.NameEn"
          style="direction: ltr"
        />
      </div>
      <div class="mb-2 Font1_20">{{ $t("Company.AddNew.Type") }}</div>
      <Select :DataAll="TypeList" @GetValue="SaveType" :ShowTitle="ShowTitle" />
      <div class="mb-2 Font1_20">{{ $t("Company.AddNew.DescriptionAr") }}</div>
      <div
        :class="
          v$.Company.descriptionAr.$error == true ? 'form-group--error' : ''
        "
      >
        <div
          v-for="error of v$.Company.descriptionAr.$errors"
          :key="error.$uid"
        >
          <div class="error-msg Font1_16">{{ error.$message }}</div>
        </div>
        <textarea
          class="LoginInput Font1_16"
          rows="5"
          name="Text"
          id="descriptionAr"
          v-model="Company.descriptionAr"
          style="direction: rtl"
        >
        </textarea>
      </div>
      <div class="mb-2 Font1_20">{{ $t("Company.AddNew.DescriptionEn") }}</div>
      <div
        :class="
          v$.Company.descriptionEn.$error == true ? 'form-group--error' : ''
        "
      >
        <div
          v-for="error of v$.Company.descriptionEn.$errors"
          :key="error.$uid"
        >
          <div class="error-msg Font1_16">{{ error.$message }}</div>
        </div>
        <textarea
          class="LoginInput Font1_16 mb-4"
          rows="5"
          name="Text"
          id="descriptionEn"
          v-model="Company.descriptionEn"
          style="direction: ltr"
        >
        </textarea>
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
import Button from "../Button.vue";
import Spinner from "../Spinner.vue";
import Select from "../Select.vue";
import { mapState } from "vuex";
export default {
  props: ["Edit12", "dataforEdite"],
  data() {
    return {
      Company: {
        id: "",
        NameAr: "",
        NameEn: "",
        descriptionAr: "",
        descriptionEn: "",

        idType: "",
      },
      ShowTitle: "",
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
      Company: {
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
        descriptionAr: {
          required: helpers.withMessage(
            this.$i18n.locale == "ar"
              ? "هذا الحقل مطلوب"
              : "This field is required",
            required
          ),
          /*	maxLength: helpers.withMessage(
						this.$i18n.locale == 'ar'
							? 'الشرح يجب ان لا يتجاوز ال 250 محرف'
							: 'The description must not exceed 250	 characters',
						maxLength(250)
					),*/
        },
        descriptionEn: {
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

    SaveType(data) {
      this.ShowTitle = data.name;
      this.Company.idType = data.id;
    },
    Close() {
      this.$emit("CloseAdd");
    },
    Save() {
      this.v$.$touch();
      if (this.v$.$pendding || this.v$.$error) {
        console.log("error");
        return;
      }
      this.Loading = true;
      if (this.Edit12) {
        this.$store.dispatch("Company/PutCompany", this.Company).then((res) => {
          res == true
            ? ((this.Loading = false),
              (this.Company = {
                id: "",
                NameAr: "",
                NameEn: "",
                descriptionAr: "",
                descriptionEn: "",

                idType: "",
              }),
              this.$emit("CloseAdd"))
            : console.log("Error");
        });
      } else {
        this.$store
          .dispatch("Company/PostCompany", this.Company)
          .then((res) => {
            res == true
              ? ((this.Loading = false),
                
                (this.Company = {
                  id: "",
                  NameAr: "",
                  NameEn: "",
                  descriptionAr: "",
                  descriptionEn: "",

                  idType: "",
                }),
              (  this.$store.dispatch("Company/getCompany")),
                this.$emit("CloseAdd"))
              : console.log("Error");
          });
      }
    },
  },
  mounted() {
    if (this.Edit12 == true) {
      console.log("yes its here" + JSON.stringify(this.dataforEdite));
      this.Company = {
        id: this.dataforEdite.id,
        NameAr: this.dataforEdite.name,
        NameEn: this.dataforEdite.en_name,
        descriptionAr: this.dataforEdite.details,
        descriptionEn: this.dataforEdite.en_details,

        idType: this.dataforEdite.company_type_id,
       
      };
       
    }
    this.$store.dispatch("Company/getType");
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
