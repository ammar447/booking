<template>
  <div class="Allpage">
    <HeaderSection @OpenAdd="OpenAdd" />
    <div class="container">
      <div class="row mt-4 justify-content-around first">
        <div class="
        col-10 col-md-4
         mt-2 mb-2"
         v-for="Offer in  Offers"
         :key="Offer.id"
         >
         <img
                class="DeleteEdite"
                src="../../../assets/Admin/Delete.svg"
                alt="Delete"
                @click="Delete(Offer.id)"
              />
              <img
                class="DeleteEdite"
                src="../../../assets/Admin/Edit.svg"
                alt="Edit"
                @click.prevent="Editdata(Offer)"
              />
          <div class="card border-primary F2_20" style="    width: 90% !important;">
            <ul class="list-group list-group-flush ">
              <li class="list-group-item border-primary">{{$t('Offer.StartAt')}}
                {{ Offer.starts_at }}
              </li>
              <li class="list-group-item border-primary">{{$t('Offer.EndAt')}}

                {{Offer.ends_at   }}
              </li>
            </ul>
            <div
              class="card-footer text-bg-primary F2_20 "
              style="text-align: center"
            >
              {{Offer.percentage}}
            </div>
          </div>
        </div>
        
      </div>
    </div>

    <AddOffer v-if="Add" @CloseAdd="Close"
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
import AddOffer from "./AddOffer";
import ConfirmDelete from "@/components/ConfirmDelete.vue";
export default {
  components: {
    HeaderSection,
    AddOffer,
    ConfirmDelete,
  },
  data() {
    return {
      Add: false,
      Confirm: false,
      DeleteId: "",
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
      this.Confirm = false;
     this.Edit1= false

    },
    Editdata(data) {
     this.dataForEdit=data;
     this.Edit1= true
    
   this.Add=true
    },
    Delete(id) {
      this.DeleteId = id;
      this.Confirm = true;
    },
    ConfirmYes() {
      this.$store.dispatch("Admin/DeleteOffer", this.DeleteId);
      this.Confirm = false;
    },
  },
  mounted() {
    this.$store.dispatch("Admin/getOffer");
  },

  computed: {
    ...mapState({
      Offers: (state) => state.Admin.Offer,
    }),
  },
};
</script>

<style scoped>
.list-group {
  padding-right: 0px;
}
</style>
