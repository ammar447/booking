<template>
      <div class="row justify-content-center mt-4 F2">
         
        <div class="col-5 CircleProgress mt-4">
          
            <Pie :data="data" :options="options" />
        </div>
      </div>
   
  </template>
  
  <script >
  import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
  import { Pie } from 'vue-chartjs'
  
  
  
  ChartJS.register(ArcElement, Tooltip, Legend)
  
  export default {
    name: 'App',
    props:['data1','data2'],
    components: {
      Pie
    },
    data() {
      return {
        data : {
    labels: ['Clients',  'notnot'],
    datasets: [
      {
        backgroundColor: ['#005bb9d4' , '#DD1B16'],
        
        data: ['80',  '20']
      
      }
    ]
  },
  options : {
    responsive: true,
    maintainAspectRatio: false
  }
      }
    }
  }
  </script>
<style lang="scss">
  // data: [this.data1,   this.data2]
.CircleProgress {
  background-color: $secondary;
  height: 300px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    width: 100% !important;
}  
  </style>
  