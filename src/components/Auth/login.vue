<template>
  <div class="login-page" :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'">
    <div class="login-form">
      <h2 class="login-form__title F2_16">{{ $t("LogIn.LogIn") }}</h2>
      <form class="form mt-4" @submit.prevent="loginUser">
        <div class="form-group">
          <label for="email" class="form-group__label F2_18">{{
            $t("LogIn.Email")
          }}</label>
          <div :class="v$.user.email.$error == true ? 'form-group--error' : ''">
            <div v-for="error of v$.user.email.$errors" :key="error.$uid">
              <div class="error-msg F2_16">{{ error.$message }}</div>
            </div>
            <input
              class="LoginInput mt-2 F2_16"
              v-model="user.email"
              type="email"
              :placeholder="$t('LogIn.Email')"
            />
          </div>
        </div>
        <div class="form-group">
          <label for="password" class="form-group__label F2_18">{{
            $t("LogIn.Password")
          }}</label>
          <div
            :class="v$.user.password.$error == true ? 'form-group--error' : ''"
          >
            <div v-for="error of v$.user.password.$errors" :key="error.$uid">
              <div class="error-msg F2_16">{{ error.$message }}</div>
            </div>
            <input
              class="LoginInput mt-2 F2_16"
              v-model="user.password"
              type="password"
              :placeholder="$t('LogIn.Password')"
            />
          </div>
        </div>
        <div class="form-group form-group__button">
          <button v-if="!Loading" type="submit" class="button">Log In</button>
          <Spinner v-else />
					<div class="alert alert-danger mt-2" role="alert" v-if="Error">{{ ErrorValue }}</div>
          
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import {
  required,
  email,
  helpers,
  minLength,
  maxLength,
} from "@vuelidate/validators";
import Spinner from "../Spinner.vue";
export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      Loading: false,
      ErrorValue:'' ,
      Error:false
    };
  },
  components: {
    Spinner,
  },
  setup() {
    return { v$: useVuelidate() };
  },
  validations() {
    return {
      user: {
        email: {
          required: helpers.withMessage(
            this.$i18n.locale == "ar"
              ? "هذا الحقل مطلوب"
              : "This field is required",
            required
          ),
          email: helpers.withMessage(
            this.$i18n.locale == "ar"
              ? " الإيميل خاطىْ"
              : "This is not an email",
            email
          ),
        }, // Matches this.contact.email
        password: {
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
      },
    };
  },
  methods: {
    validationStatus: function (validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },
    loginUser() {
      this.v$.$touch();
      if (this.v$.$pendding || this.v$.$error) {
        return;
      }
      this.Loading = true;
      this.$store.dispatch("LogIn/LoginUser", this.user).then((res) => {
        res == true
          ? (  
            (this.user.Email = ""),
            (this.user.Password = ""))
          : ((this.ErrorValue = res), (this.Error = true));
        this.Loading = false;
      });
    },
  },
};
</script>

<style lang="scss" >
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("../../assets/logIn.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.login-form {
  max-width: 400px;
  width: 90%;
  margin: auto;
  padding: 40px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-radius: 20px;

  backdrop-filter: blur(1px);
}

.login-form__title {
  margin: 0;
  font-size: 32px;
  font-weight: 600;
  color: #1d2c4b;
}

.form-group {
  margin-bottom: 20px;
}

.form-group__label {
  display: block;
  margin-bottom: 5px;
  font-size: 16px;
  color: #1d2c4b;
}

.form-group__input {
  width: 94%;
  padding: 15px;
  border-radius: 10px;
  border: none;
  font-size: 16px;
  color: #1d2c4b;
  background-color: #f5f9fd;
}

.form-group__button {
  text-align: center;
}

.button {
  background-color: #2f80ed;
  border: none;
  border-radius: 10px;
  color: #fff;
  padding: 15px 30px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #1b5fb3;
}
.error-msg {
	display: flex;
	color: $required;
}

.LoginInput {
	padding: 8px;
	outline: none;
	//	font-size: 13px;
	font-weight: 600;
	max-width: 100%;
	display: block;
	margin-bottom: 8px;
	color: #2f3239;
	border: 1px solid $third;
	transition: border 0.25s ease, color 0.25s linear, background-color 0.25s linear;
	background: #f3f3f3;
	width: 100%;
	border-radius: 5px;
}
.LoginInput:focus {
	border-color: $t_forth;
	color: $t_forth;
	background-color: $secondary;
}
.form-group--error:hov {
	animation-name: shakeError;
	animation-fill-mode: forwards;
	animation-duration: 0.6s;
	animation-timing-function: ease-in-out;
	.LoginInput {
		border-color: $required;
	}
}
@keyframes shakeError {
	0% {
		transform: translateX(0);
	}
	15% {
		transform: translateX(0.375rem);
	}
	30% {
		transform: translateX(-0.375rem);
	}
	45% {
		transform: translateX(0.375rem);
	}
	60% {
		transform: translateX(-0.375rem);
	}
	75% {
		transform: translateX(0.375rem);
	}
	90% {
		transform: translateX(-0.375rem);
	}
	100% {
		transform: translateX(0);
	}
} 
</style>
