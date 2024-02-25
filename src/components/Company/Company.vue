<template>
  <div class="Company">
    <div class="container">
      <div class="row mt-4 justify-content-around first">
        <div class="col-2">
          <Button @click="OpenAddCompany" :First="$t('Company.Add')" />
        </div>
        <div class="col-8 date1">
          {{ date }}
        </div>
      </div>
      <div class="row mt-4 justify-content-around first">
        <div class="col-12 col-md-5">
          <div
            v-for="Element in Company"
            :key="Element.id"
            class="elemetCompany mt-4 mb-4 F2_20"
          >
            <div v-if="`${$i18n.locale}` == 'ar'">
              <h2>{{ Element.name }}</h2>
              <p>{{ Element.details }}</p>
            </div>
            <div v-if="`${$i18n.locale}` == 'en'">
              <h2>{{ Element.en_name }}</h2>
              <p>{{ Element.en_details }}</p>
            </div>
            <div>
              <img
                class="DeleteEdite"
                src="../../assets/Admin/Delete.svg"
                alt="Delete"
                @click="Delete(Element.id)"
              />
              <img
                class="DeleteEdite"
                src="../../assets/Admin/Edit.svg"
                alt="Edit"
                @click.prevent="Edit(Element)"
              />
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <Vue3Lottie :animationData="World" :height="500" :width="370" />
        </div>
      </div>
      <AddCompany v-if="OpenCompany" :dataforEdite="dataforEdite"
        :Edit12="Edit12"  @CloseAdd="CloseAdd" />
    </div>
    <ConfirmDelete
      v-if="Confirm"
      @ConfirmClose="Close"
      @ConfirmYes="ConfirmYes"
    />
  </div>
</template>

<script>
import Button from "../Button.vue";
import AddCompany from "./AddCompany.vue";
import ConfirmDelete from "../ConfirmDelete.vue";
import { Vue3Lottie } from "vue3-lottie";
import "vue3-lottie/dist/style.css";
import World from "../../assets/jsonFile/world.json";
import { mapState } from "vuex";
export default {
  components: {
    Button,
    AddCompany,
    Vue3Lottie,
    ConfirmDelete,
  },
  data() {
    return {
      date: "",
      World,
      Confirm: false,
      OpenCompany: false,
      IdDelete: 0,
      Edit12:false,
      dataforEdite:{}
    };
  },
  methods: {
    date_function: function () {
      this.date = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
    },
    Delete(id) {
      this.IdDelete = id;
      this.Confirm = true;
    },
    Edit(data) {
      this.OpenCompany = true;
      this.Edit12 = true;
      console.log("data is :" + data.name);
      this.dataforEdite = data;
      //this.$refs.childComponentRef.childMethod(11);
    
    },
    OpenAddCompany() {
      this.OpenCompany = true;
    },
    Close() {
      this.OpenCompany = false;
      this.Confirm = false;
    },
    CloseAdd() {
      this.Edit12= false;
      this.OpenCompany = false;
    },
    ConfirmYes() {
      this.$store.dispatch("Company/DeleteCompany", this.IdDelete);
      this.Confirm = false;
    },
  },
  computed: {
    ...mapState({
      Company: (state) => state.Company.Company_list,
    }),
  },
  mounted() {
    this.date_function();
    this.$store.dispatch("Company/getCompany");
  },
};
</script>

<style lang="scss" >
.Company {
  background-color: $forth;
}
.first {
  background-color: $secondary;
  height: auto;
  border-radius: 5px;
  width: 100%;
  padding: 3px;
}
.date1 {
  align-items: center;
  display: flex;
  justify-content: end;
}
.elemetCompany {
  display: flex;
  justify-content: space-between;
  padding: 8px;
  background-color: $forth;
  border-radius: 8px;
  box-shadow: 0px 10px 31px -21px rgba(0, 0, 0, 0.33);
}
.DeleteEdite {
  width: 20px;
  height: 20px;
  margin: 5px;
  cursor: pointer;
}
</style>
