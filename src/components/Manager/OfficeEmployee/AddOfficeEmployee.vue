<template>
  <div class="content-container" style="z-index: 9999">
    <!-- all content that should be hidden goes here -->
    <div class="center-box">
      <div class="title F2_20">
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
          <div class="error-msg F2_16">{{ error.$message }}</div>
        </div>
        <input
          class="LoginInput F2_16"
          v-model="NewUser.name"
          type="text"
          :placeholder="$t('Company.AddManager.name')"
        />
      </div>
      <div
        :class="v$.NewUser.en_name.$error == true ? 'form-group--error' : ''"
      >
        <div v-for="error of v$.NewUser.en_name.$errors" :key="error.$uid">
          <div class="error-msg F2_16">{{ error.$message }}</div>
        </div>
        <input
          class="LoginInput F2_16"
          v-model="NewUser.en_name"
          type="text"
          :placeholder="$t('Company.AddManager.en_name')"
        />
      </div>
      <div :class="v$.NewUser.Email.$error == true ? 'form-group--error' : ''">
        <div v-for="error of v$.NewUser.Email.$errors" :key="error.$uid">
          <div class="error-msg F2_16">{{ error.$message }}</div>
        </div>
        <input
          class="LoginInput F2_16"
          v-model="NewUser.Email"
          type="email"
          :placeholder="$t('Company.AddManager.Email')"
        />
      </div>
      <div
        :class="v$.NewUser.Password.$error == true ? 'form-group--error' : ''"
      >
        <div v-for="error of v$.NewUser.Password.$errors" :key="error.$uid">
          <div class="error-msg F2_16">{{ error.$message }}</div>
        </div>
        <input
          class="LoginInput F2_16"
          v-model="NewUser.Password"
          type="password"
          :placeholder="$t('Company.AddManager.Password')"
        />
      </div>
      <div
        :class="
          v$.NewUser.confirmPassword.$error == true ? 'form-group--error' : ''
        "
      >
        <div
          v-for="error of v$.NewUser.confirmPassword.$errors"
          :key="error.$uid"
        >
          <div class="error-msg F2_16">{{ error.$message }}</div>
        </div>
        <input
          class="LoginInput F2_16"
          v-model="NewUser.confirmPassword"
          type="password"
          :placeholder="$t('Company.AddManager.Conform')"
        />
      </div>
      <div
        :class="
          v$.NewUser.nationality.$error == true ? 'form-group--error' : ''
        "
      >
        <div v-for="error of v$.NewUser.nationality.$errors" :key="error.$uid">
          <div class="error-msg F2_16">{{ error.$message }}</div>
        </div>
        <input
          class="LoginInput F2_16"
          v-model="NewUser.nationality"
          type="text"
          :placeholder="$t('Company.AddManager.nationality')"
        />
      </div>
      <div
        :class="
          v$.NewUser.en_nationality.$error == true ? 'form-group--error' : ''
        "
      >
        <div
          v-for="error of v$.NewUser.en_nationality.$errors"
          :key="error.$uid"
        >
          <div class="error-msg F2_16">{{ error.$message }}</div>
        </div>
        <input
          class="LoginInput F2_16"
          v-model="NewUser.en_nationality"
          type="text"
          :placeholder="$t('Company.AddManager.en_nationality')"
        />
      </div>
      <div :class="v$.NewUser.phone.$error == true ? 'form-group--error' : ''">
        <div v-for="error of v$.NewUser.phone.$errors" :key="error.$uid">
          <div class="error-msg F2_16">{{ error.$message }}</div>
        </div>
        <input
          class="LoginInput F2_16"
          v-model="NewUser.phone"
          type="text"
          :placeholder="$t('Company.AddManager.phone')"
          @keypress="isNumber($event)"

        />
      </div>
      <Select
        :DataAll="Offices"
        @GetValue="SaveCompany_id"
        :ShowTitle="Company"
      />
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
import Select from "@/components/Select.vue";
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
        Email: "",
        Password: "",
        confirmPassword: "",
        nationality: "",
        en_nationality: "",
        phone: "",
        office_id: JSON.parse(localStorage.getItem("office_id")),
        user_type_id: 2,
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
    Select,
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
        nationality: {
          required: helpers.withMessage(
            this.$i18n.locale == "ar"
              ? "هذا الحقل مطلوب"
              : "This field is required",
            required
          ),
        },
        en_nationality: {
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
        Email: {
          required: helpers.withMessage(
            this.$i18n.locale == "ar"
              ? "هذا الحقل مطلوب"
              : "This field is required",
            required
          ),
          email: helpers.withMessage(
            this.$i18n.locale == "ar" ? "الإيميل خاطئ" : "This is not an email",
            email
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
    isNumber: function(evt) {
      evt = (evt) ? evt : window.event;
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault();;
      } else {
        return true;
      }
    } ,
    SaveCompany_id(data) {
      this.NewUser.office_id = data.id;
      this.Company = data.name;
    },
    Close() {
      this.$emit("CloseAdd");
    },
    AddManager() {
      this.v$.$touch();
      if (this.v$.$pendding || this.v$.$error) {
        return;
      }
      this.Loading = true;
      this.$store.dispatch("Admin/AddUser", this.NewUser).then((res) => {
        res == true
          ? (this.$emit("CloseAdd"),
            this.$store.dispatch("Manager/getEmployeeOffice"))
          : ((this.ErrorValue = res), (this.Error = true));
        this.Loading = false;
      });
    },
  },
  mounted() {
    // this.$store.dispatch("Company/getCompany");.
    this.$store.dispatch("Admin/getOffice");
  },
  computed: {
    ...mapState({
      Offices: (state) => state.Admin.Office,
    }),
  },
};
</script>

<style></style>
