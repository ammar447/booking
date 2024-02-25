<template>
  <div>
    <button @click="ClickHim"> click me now</button>
    <testCom ref="childComponentRef"  />
  </div>
</template>

<script>
import testCom from "@/components/testCom.vue";

export default {
    components:{
        testCom
    },
 methods:{
    ClickHim(){
        console.log('yea iam click');
        this.$refs.childComponentRef.childMethod(11);
    }
 }
}
</script>

<style>

</style>