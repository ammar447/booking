<template>
  <div class="Allpage">
    <HeaderSection @OpenAdd="OpenAdd" />
    <div class="container">
      <div class="row mt-4 justify-content-evenly first">
        <div
          class="col-10 col-md-4 mt-2 mb-2"
          v-for="Transport in Transports"
          :key="Transport.id"
        >
          <div>
             <div>
              <img
              class="DeleteEdite"
              src="../../../assets/Admin/Delete.svg"
              alt="Delete"
              @click="Delete(Transport.id)"
            />
            <!--    <img
                class="DeleteEdite"
                src="../../../assets/Admin/Edit.svg"
                alt="Edit"
                @click.prevent="Editdata(Transport)"
              /> -->
            <div class="card F2_22" style="width: 18rem">
              <span v-if="`${$i18n.locale}` == 'ar'">
                  {{ Transport.name }}  ( {{ Transport.id  }} )
              </span>
              <span v-if="`${$i18n.locale}` == 'en'">
                {{ Transport.en_name }}   ( {{ Transport.id  }} )
              </span>
            </div>
             </div>
          </div>
        </div>
      </div>
    </div>

    <AddTransport
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
  </div>
</template>

<script>
import HeaderSection from "@/components/HeaderSection";
import { mapState } from "vuex";
import AddTransport from "./AddTransport.vue";
import ConfirmDelete from "@/components/ConfirmDelete.vue";
export default {
  components: {
    HeaderSection,
    AddTransport,
    ConfirmDelete,
  },
  data() {
    return {
      Add: false,
      Confirm: false,
      DeleteId: "",
      dataForEdit: {},
      Edit1: false,
    };
  },
  methods: {
    OpenAdd() {
      this.Add = true;
    },
    Close() {
      this.Add = false;
      this.Confirm = false;
      this.Edit1 = false;
    },
    Editdata(data) {
      this.dataForEdit = data;
      this.Edit1 = true;

      this.Add = true;
    },
    Delete(id) {
      this.DeleteId = id;
      this.Confirm = true;
    },
    ConfirmYes() {
      this.$store
        .dispatch("Manager/DeleteTransport", this.DeleteId)
        .then((res) => {
          res == true
            ? this.$store.dispatch("Manager/getTransport")
            : console.log("error");
        });
      this.Confirm = false;
    },
  },
  mounted() {
    this.$store.dispatch("Manager/getTransport");
  },

  computed: {
    ...mapState({
      Transports: (state) => state.Manager.Transport,
    }),
  },
};
</script>

<style scoped>
.list-group {
  padding-right: 0px;
}
.card {
  background-image: url("../../../assets/black.jpg");
  height: 50px;
  text-align: center;
  color: #fff;
  font-weight: bolder;
  padding: 7px 0 !important;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  width: 100% !important;
}
</style>
