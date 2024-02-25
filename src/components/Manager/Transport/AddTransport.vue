<template>
  <div class="content-container" style="z-index: 9999">
    <!-- all content that should be hidden goes here -->
    <div class="center-box">
      <div class="title F2_20">
        <h3>{{ $t("Transport.AddNew") }}</h3>
        <img
          @click="Close"
          src="@/assets/Admin/close.svg"
          alt="close"
          style="width: 25px; height: 20px; cursor: pointer"
        />
      </div>
      <div class="line mb-4"></div>
      <div class="mb-2 Font1_20">{{ $t("Transport.Type") }}</div>
      <div :class="v$.Transport.transport_type_id.$error == true ? 'form-group--error' : ''">
        <div v-for="error of v$.Transport.transport_type_id.$errors" :key="error.$uid">
          <div class="error-msg Font1_16">{{ error.$message }}</div>
        </div>
        <Select
        :DataAll="TransportType"
        @GetValue="SaveTransportType"
        :ShowTitle="ShowTitle"
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
import { required, helpers  } from "@vuelidate/validators";
import Button from "@/components/Button";
import Spinner from "@/components/Spinner.vue";
import Select from "@/components/Select.vue";
import { mapState } from "vuex";
export default {
  props: ["Edit1", "dataForEdit"],
  data() {
    return {
      Transport: {
        id: "",
        transport_type_id:""
      },
      Loading: false,
      Edit: false,
      ShowTitle:""
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
      Transport: {
       
        transport_type_id: {
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
    SaveTransportType(data) {
      this.Transport.transport_type_id = data.id;
      if (this.$i18n.locale == "ar") {
        this.ShowTitle = data.name;
      } else {
        this.ShowTitle = data.en_name;
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
        this.$store.dispatch("Manager/PostTransportType", this.Transport)
        .then((res) => {
          res == true
            ? (
            (  this.$store.dispatch("Manager/getTransport")),  
            (this.Loading = false),
              ( this.Transport= {
        id: "",
        transport_type_id:""
      }),
      this.$store.dispatch("Manager/TransportType"),

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
   this.$store.dispatch("Manager/TransportType");
  },
  computed: {
    ...mapState({
      TransportType: (state) => state.Manager.TransportType,
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
