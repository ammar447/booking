<template>
  <div class="content-container" style="z-index: 9999">
    <!-- all content that should be hidden goes here -->
    <div class="center-box">
      <div class="title">
        <h3>{{ $t("Company.AddManager.AddManager") }}</h3>
        <img
          @click="Close"
          src="../../../assets/Admin/close.svg"
          alt="close"
          style="width: 25px; height: 20px; cursor: pointer"
        />
      </div>
      <div class="line mb-4"></div>
      <div :class="v$.NewUser.name.$error == true ? 'form-group--error' : ''">
        <div v-for="error of v$.NewUser.name.$errors" :key="error.$uid">
          <div class="error-msg Font1_16">{{ error.$message }}</div>
        </div>
        <input
          class="LoginInput Font1_16"
          v-model="NewUser.name"
          type="text"
          :placeholder="$t('Company.AddManager.name')"
        />
      </div>
      <div
        :class="v$.NewUser.en_name.$error == true ? 'form-group--error' : ''"
      >
        <div v-for="error of v$.NewUser.en_name.$errors" :key="error.$uid">
          <div class="error-msg Font1_16">{{ error.$message }}</div>
        </div>
        <input
          class="LoginInput Font1_16"
          v-model="NewUser.en_name"
          type="text"
          :placeholder="$t('Company.AddManager.en_name')"
        />
      </div>
      <div :class="v$.NewUser.phone.$error == true ? 'form-group--error' : ''">
        <div v-for="error of v$.NewUser.phone.$errors" :key="error.$uid">
          <div class="error-msg Font1_16">{{ error.$message }}</div>
        </div>
        <input
          class="LoginInput Font1_16"
          v-model="NewUser.phone"
          type="text"
          :placeholder="$t('Company.AddManager.phone')"
        />
      </div>

      <Button
        v-if="!Loading"
        @click.prevent="AddManager"
        :First="$t('Global.Save')"
        style="margin: 0 auto"
      />
      <div v-else  style=" width: 100%; text-align: center;">
        <Spinner  />
      </div>
      <div class="alert alert-danger" role="alert" v-if="Error">
        {{ ErrorValue }}
      </div>
    </div>
  </div>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import Spinner from "@/components/Spinner.vue";
import Button from "@/components/Button.vue";

import { mapState } from "vuex";

import {
  required,
  email,
  helpers,
  minLength,
  maxLength,
  sameAs,
} from "@vuelidate/validators";
export default {
  data() {
    return {
      NewUser: {
        name: "",
        en_name: "",
        phone: "",
      },
      Company: this.$t("Header.Company"),
      Loading: false,
      Error: false,
      ErrorValue: "",
    };
  },
  components: {
    Spinner,
    Button,
  },
  setup() {
    return { v$: useVuelidate() };
  },
  validations() {
    return {
      NewUser: {
        name: {
          required: helpers.withMessage(
            this.$i18n.locale == "ar"
              ? "هذا الحقل مطلوب"
              : "This field is required",
            required
          ),
        },
        en_name: {
          required: helpers.withMessage(
            this.$i18n.locale == "ar"
              ? "هذا الحقل مطلوب"
              : "This field is required",
            required
          ),
        },
       
        phone: {
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
   
    Close() {
      this.$emit("CloseAdd");
    },
    AddManager() {
      this.v$.$touch();
      if (this.v$.$pendding || this.v$.$error) {
        return;
      }
      this.Loading = true;
      this.$store.dispatch("Employee/AddUser", this.NewUser).then((res) => {
        res != false
        
          ? (this.$emit("OPenConfirm", res))

          : 
          ((this.ErrorValue = res), (this.Error = true));
        this.Loading = false;
      });
    },
  },
  mounted() {
    // this.$store.dispatch("Company/getCompany");.
   // this.$store.dispatch("Admin/getOffice");
  },
  computed: {
   
  },
};
</script>

<style></style>
