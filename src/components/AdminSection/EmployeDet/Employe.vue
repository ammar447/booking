<template>
  <div class="Allpage">
    <HeaderSection @OpenAdd="OpenAdd" />
    <div class="container">
      <div class="row mt-4 justify-content-around first">
        <table class="table table-striped  ">
          <thead class="table-primary F2_18">
            <tr>
              <th scope="col">#</th>
              <th scope="col">{{ $t("Employee.Name") }}</th>
              <th scope="col">{{ $t("Employee.Phone") }}</th>
              <th scope="col">{{ $t("Employee.Nationality") }}</th>
              <th scope="col">{{ $t("Employee.Status") }}</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody 
          class="F2_16"
           >
           <tr  v-for="(Employee,index) in Employees"
           :key="index">
              <th scope="row">{{index+1}}</th>
              <td v-if="`${$i18n.locale}` == 'ar'" >{{ Employee.name }}</td>
              <td  v-if="`${$i18n.locale}` == 'en'"  >{{ Employee.en_name }}</td>
              <td>
                {{ Employee.phone }}
                
              </td>

              <td v-if="`${$i18n.locale}` == 'ar'">{{ Employee.nationality }}</td>
              <td v-if="`${$i18n.locale}` == 'en'">{{ Employee.en_nationality }}</td>
              <td v-if="`${$i18n.locale}` == 'ar'">{{ Employee.user_type_name }}</td>
              <td v-if="`${$i18n.locale}` == 'en'">{{ Employee.user_type_enname }}</td>
              <td style="    text-align: center;">
                <img
                class="DeleteEdite"
                src="../../../assets/Admin/Delete.svg"
                alt="Delete"
                @click="Delete(Employee.id)"
              />
         <!--     <img
                class="DeleteEdite"
                src="../../../assets/Admin/Edit.svg"
                alt="Edit"
                @click.prevent="Editdata(Office)"
              /> -->
              </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
   
    <AddEmploye v-if="Add" @CloseAdd="Close" 
    :dataForEdit="dataForEdit"
    :Edit1="Edit1"
    />
     <ConfirmDelete
     v-if="Confirm"
      @ConfirmClose="Close"
      @ConfirmYes="ConfirmYes"
      />
  </div>
</template>

<script>
import HeaderSection from "@/components/HeaderSection";
import { mapState } from "vuex";
import AddEmploye from "./AddEmploye.vue";
import ConfirmDelete from "@/components/ConfirmDelete.vue";
export default {
  components: {
    HeaderSection,
    AddEmploye,
    ConfirmDelete
},
  data() {
    return {
      Add: false,
      Confirm:false,
      DeleteId:'' ,
      dataForEdit:{},
      Edit1:false
    };
  },
  methods: {
    OpenAdd() {
      this.Add = true;
    },
    Close() {
      this.Add = false;
      this.Confirm = false
      this.Edite1=false
    },
    Editdata(data) {
     this.dataForEdit=data;
     this.Edit1= true
   console.log(data);
   this.Add=true
    },
    Delete(id) {
    this.DeleteId = id
    this.Confirm = true
    },
    ConfirmYes() {
      this.$store.dispatch("Admin/DeleteEmployee", this.DeleteId);
      this.Confirm = false;
    },
  },
  mounted() {
    this.$store.dispatch("Admin/getEmployee");
  },

  computed: {
    ...mapState({
      Employees: (state) => state.Admin.Employee,
    }),
  },
};
</script>

<style></style>
