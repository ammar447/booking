<template>
  <div class="content-container" style="z-index: 9999">
    <!-- all content that should be hidden goes here -->
    <div class="center-box F2_20">
      <div class="title">
        <h3>{{ $t("Global.AddNew") }}</h3>
        <img
          @click="Close"
          src="../../assets/Admin/close.svg"
          alt="close"
          style="width: 25px; height: 20px; cursor: pointer"
        />
      </div>
      <div class="line mb-4"></div>
      <div  :class="v$.NewUser.OldPassword.$error == true ? 'form-group--error' : ''"
      >
        <div v-for="error of v$.NewUser.OldPassword.$errors" :key="error.$uid">
          <div class="error-msg Font1_16">{{ error.$message }}</div>
        </div>
        <input
          class="LoginInput Font1_16"
          v-model="NewUser.OldPassword"
          type="password"
          :placeholder="$t('Global.OldPassword')"
        />
      </div>
	  
       
      <div  :class="v$.NewUser.Password.$error == true ? 'form-group--error' : ''"
      >
        <div v-for="error of v$.NewUser.Password.$errors" :key="error.$uid">
          <div class="error-msg Font1_16">{{ error.$message }}</div>
        </div>
        <input
          class="LoginInput Font1_16"
          v-model="NewUser.Password"
          type="password"
          :placeholder="$t('Company.AddManager.Password')"
        />
      </div>
      <div    :class="  v$.NewUser.confirmPassword.$error == true ? 'form-group--error' : ''
        "
      >
        <div
          v-for="error of v$.NewUser.confirmPassword.$errors"
          :key="error.$uid"
        >
          <div class="error-msg Font1_16">{{ error.$message }}</div>
        </div>
        <input
          class="LoginInput Font1_16"
          v-model="NewUser.confirmPassword"
          type="password"
          :placeholder="$t('Company.AddManager.Conform')"
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
        {{ $t('') }}
      </div>
    </div>
  </div>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import Spinner from "@/components/Spinner.vue";
import Button from "../Button.vue";
import Select from "../Select.vue";
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
        
        OldPassword: "",
        Password: "",
        confirmPassword: "",
        
      },
      Company:this.$t('Header.Company'),
      Loading: false,
      Error: false,
      ErrorValue: "",
    };
  },
  components: {
    Spinner,
    Button,
    Select
  },
  setup() {
    return { v$: useVuelidate() };
  },
  validations() {
    return {
      NewUser: {
	 
		 
	 
		 
		 
        OldPassword: {
          required: helpers.withMessage(
            this.$i18n.locale == "ar"
              ? "هذا الحقل مطلوب"
              : "This field is required",
            required
          ),
          minLength: helpers.withMessage(
            this.$i18n.locale == "ar"
              ? "كلمة السر يجب ان تكون بين 8 و50"
              : "Password must be between 8 and 50",
            minLength(8)
          ),
          maxLength: helpers.withMessage(
            this.$i18n.locale == "ar"
              ? "كلمة السر يجب ان تكون بين 8 و50"
              : "Password must be between 8 and 50",
            maxLength(50)
          ),
          
        },
        Password: {
          required: helpers.withMessage(
            this.$i18n.locale == "ar"
              ? "هذا الحقل مطلوب"
              : "This field is required",
            required
          ),
          minLength: helpers.withMessage(
            this.$i18n.locale == "ar"
              ? "كلمة السر يجب ان تكون بين 8 و50"
              : "Password must be between 8 and 50",
            minLength(8)
          ),
          maxLength: helpers.withMessage(
            this.$i18n.locale == "ar"
              ? "كلمة السر يجب ان تكون بين 8 و50"
              : "Password must be between 8 and 50",
            maxLength(50)
          ),
        },
        confirmPassword: {
          required: helpers.withMessage(
            this.$i18n.locale == "ar"
              ? "هذا الحقل مطلوب"
              : "This field is required",
            required
          ),
          sameAs: helpers.withMessage(
            this.$i18n.locale == "ar"
              ? "كلمة السر يجب ان تكون مطابقة "
              : "The password must match",
            sameAs(this.NewUser.Password)
          ),
        },
        
      },

       
    };
  },
  methods: {
  
    
    Close() {
      this.$emit("Close");
    },
    AddManager() {
      this.v$.$touch();
      if (this.v$.$pendding || this.v$.$error) {
        return;
      }
      this.Loading = true;
      this.$store.dispatch("Admin/changepassword", this.NewUser).then((res) => {
        res == true
          ? 
          this.$emit('Close')
          : ((this.ErrorValue = res), (this.Error = true));
        this.Loading = false;
      });
    },
  },
  computed: {
     
  },
};
</script>

<style></style>
