<template>
  <div>
    <div
      class="Show Font1_20 mb-4"
      :class="Show == true ? 'hvr-bounce-in' : ''"
      @click="ShowElement"
    >
      <div class="row justify-content-between HeaderSelect">
        <span class="col-8">
          {{ ShowTitle }}
        </span>
        <span class="col-2" :dir="$i18n.locale == 'ar' ? 'ltr' : 'rtl'">
          <img
            class="ArrowDown"
            :class="Show == true ? 'RotateLeft' : 'RotateRight'"
            src="../assets/Icon/arrowdown.svg"
            alt="arrowDown"
          />
        </span>
      </div>
      <div :class="Show == true ? 'ChildrenOpetion' : ''">
        <!--
<div
					class="Opetion mt-2 Font1_18"
					:class="Show == true ? 'ShowOpetion' : ''"
					v-if="OptionSend == 1 && DataAll.length == 0"
				>
					 error
					 
				</div>
   v-else..
				  -->
        <div
          class="Opetion mt-2 Font1_18"
          :class="Show == true ? 'ShowOpetion' : ''"
          v-for="one in DataAll"
          :key="one"
          @click="Clickme(one)"
        >
        <span v-if="`${$i18n.locale}` == 'ar'">   {{ one.name }} <span v-if="Transport" >
          ({{ one.id }})
          </span> 
          </span>
        <span v-if="`${$i18n.locale}` == 'en'">   {{ one.en_name }} 
          <span v-if="Transport" >
          ({{ one.id }})
          </span> 
           </span>
        <span   >   {{ one.percentage }}  </span>

        
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["DataAll", "ShowTitle" , "Transport"],
  data() {
    return {
      Show: false,
    };
  },
  methods: {
    ShowElement() {
      this.Show = !this.Show;
    },
    Clickme(data) {
      this.$emit("GetValue", data);
    },
  },
};
</script>

<style lang="scss" scoped>
.Show {
  margin: 0px auto;
  height: 40px;
  padding: 3px 6px;
  border: 1px solid $third;
  border-radius: 8px;
  position: relative;
  z-index: 100;
}
.Opetion {
  height: 0px;
  display: none;
}
.HeaderSelect {
  position: sticky;
  top: 0;
}
.ShowOpetion {
  display: block;
  animation-name: heightShow;
  animation-timing-function: linear;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
  animation-fill-mode: both;
}
.ChildrenOpetion {
  overflow-y: scroll;
  overflow-x: hidden;
 // height: 250px;
 height: 165px;
  background-color: darkgrey;
  color: $secondary;
  padding: 0 5px;
  position: absolute;

  width: 100%;
  margin: 0 -6px;
  z-index: 10;
  border-radius: 6px;
}
.ChildrenOpetion::-webkit-scrollbar {
  width: 8px;
}
.ChildrenOpetion::-webkit-scrollbar-track {
  background-color: darkgrey;
}
.ChildrenOpetion::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
}
@keyframes heightShow {
  10% {
    height: 20px;
  }
  50% {
    height: 30px;
  }
  100% {
    height: 40px;
  }
}
@keyframes hvr-pop {
  50% {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
}
.hvr-bounce-in {
  -webkit-animation-name: hvr-pop;
  animation-name: hvr-pop;
  -webkit-animation-duration: 0.3s;
  animation-duration: 0.3s;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}

.ArrowDown {
  padding-bottom: 3px;
  width: 20px;
}
.RotateLeft {
  animation-name: RotateL;
  animation-timing-function: linear;
  animation-duration: 0.6s;
  animation-iteration-count: 1;
  animation-fill-mode: both;
}
@keyframes RotateL {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
}
.RotateRight {
  animation-name: RotateR;
  animation-timing-function: linear;
  animation-duration: 0.2s;
  animation-iteration-count: 1;
  animation-fill-mode: both;
}
@keyframes RotateR {
  from {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(0deg);
  }
}
</style>
