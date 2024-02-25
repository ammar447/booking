<template>
  <div class="Allpage">
    <HeaderSection @OpenAdd="OpenAdd" />
    <div class="container">
      <div class="row mt-4 justify-content-around first">
        <div class="archive">
          <span>
            <input
              type="radio"
              id="Service"
              name="fav_language"
              value="1"
              v-model="arshef"
              @change="GoNewData"
            />

            <span class="archiveIN F2_16">
              {{ $t("Office.Service") }}
            </span>
          </span>

          <span>
            <input
              type="radio"
              id="archive"
              name="fav_language"
              value="0"
              v-model="arshef"
              @change="GoNewData"

            />

            <span class="archiveIN F2_16">
              {{ $t("Office.archive") }}
            </span>
          </span>
        </div>

        <table class="table table-striped">
          <thead class="table-primary F2_18">
            <tr>
              <th scope="col">#</th>
              <th scope="col">{{ $t("Office.name") }}</th>
              <th scope="col">{{ $t("Office.phone") }}</th>
              <th scope="col">{{ $t("Office.location_name") }}</th>
              <th scope="col">{{ $t("Office.OpenClose") }}</th>
              <th scope="col">{{ $t("Office.status") }}</th>

              <th scope="col"></th>
            </tr>
          </thead>
          <tbody class="F2_16">
            <tr v-for="(Office, index) in Offices" :key="index">
              <th scope="row">{{ index + 1 }}</th>
              <td v-if="`${$i18n.locale}` == 'ar'">{{ Office.name }}</td>
              <td v-if="`${$i18n.locale}` == 'en'">{{ Office.en_name }}</td>
              <td>
                {{ Office.mtn_phone }}
                <br />
                {{ Office.syriatel_phone }}
              </td>

              <td v-if="`${$i18n.locale}` == 'ar'">
                {{ Office.location_name }}
              </td>
              <td v-if="`${$i18n.locale}` == 'en'">
                {{ Office.location_enname }}
              </td>
              <td>
                {{ Office.open_at }}
                <br />
                {{ Office.close_at }}
              </td>
              <td>
                <span v-if="Office.active == 1">
                  {{ $t("Office.Service") }}
                </span>
                <span v-if="Office.active == 0">
                  {{ $t("Office.archive") }}
                </span>
              </td>
              <td style="text-align: center">
                <img
                  class="DeleteEdite"
                  src="../../../assets/Admin/Delete.svg"
                  alt="Delete"
                  @click="Delete(Office.id, Office.active)"
                />
                <img
                  class="DeleteEdite"
                  src="../../../assets/Admin/Edit.svg"
                  alt="Edit"
                  @click.prevent="Editdata(Office)"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <AddOffice
      v-if="Add"
      @CloseAdd="Close"
      :dataForEdit="dataForEdit"
      :Edit1="Edit1"
    />
    <ConfirmDelete
      v-if="Confirm"
      @ConfirmClose="Close"
      @ConfirmYes="ConfirmYes"
    />
    <ConfirmRestor 
     v-if="restor"
      @ConfirmClose="Close"
      @ConfirmYes="ConfirmYesRestor"
     />
  </div>
</template>

<script>
import HeaderSection from "@/components/HeaderSection";
import { mapState } from "vuex";
import AddOffice from "./AddOffice.vue";
import ConfirmDelete from "@/components/ConfirmDelete.vue";
import ConfirmRestor from "./ConfirmRestor";
export default {
  components: {
    HeaderSection,
    AddOffice,
    ConfirmDelete,
    ConfirmRestor
  },
  data() {
    return {
      Add: false,
      Confirm: false,
      DeleteId: "",
      dataForEdit: {},
      Edit1: false,
      active: "",
      arshef: 1,
      restor:false
    };
  },
  methods: {
    OpenAdd() {
      this.Add = true;
    },
    Close() {
      this.Add = false;
      this.Confirm = false;
      this.Edite1 = false;
      this.restor =false;
    },
    GoNewData() {
      console.log(this.arshef);
      if(this.arshef == 1) {
    this.$store.dispatch("Admin/getOffice");

      } else if (this.arshef == 0) {

    this.$store.dispatch("Admin/getOfficearshef");
      }
    },
    Editdata(data) {
      this.dataForEdit = data;

      if(this.arshef == 1) {
        this.dataForEdit = data;
      this.Edit1 = true;
      console.log(data);
      this.Add = true;

      } else if (this.arshef == 0) {
       this.restor =true
       console.log(this.dataForEdit.id);
    
      }
    
    },
    ConfirmYesRestor(){
     this.$store.dispatch("Admin/RestorOffice",  this.dataForEdit.id).then((res) =>{
      res == true ? this.Close() :console.log("error");
     });
    },
    Delete(id, active) {
      this.DeleteId = id;
      this.Confirm = true;
      this.active = active;
      console.log(this.DeleteId);
    },
    ConfirmYes() {
      console.log(this.arshef);
      if(this.arshef == 1 ) {
        this.$store.dispatch("Admin/DeleteOffice", this.DeleteId);
      } else {
        this.$store.dispatch("Admin/DeleteOfficePermanently", this.DeleteId);

      }
      //this.$store.dispatch("Admin/DeleteOffice", this.DeleteId);
      this.Confirm = false;
    },
  },
  mounted() {
    this.$store.dispatch("Admin/getOffice");
  },

  computed: {
    ...mapState({
      Offices: (state) => state.Admin.Office,
    }),
  },
};
</script>

<style>
.archive {
  margin: 5px;
  display: flex;
  justify-content: space-evenly;
}
.archiveIN {
  margin: 5px;
}
</style>
