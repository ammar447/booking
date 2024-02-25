/* eslint-disable prettier/prettier */
export default {

  get_Type(state,va) {
  state.TypeList = [];

    va.forEach(element => {
      state.TypeList.push(element)
    });
  },
  get_Company(state,va){
   state.Company_list = [];
    for(var i=0;i<va.length;i++) {
      state.Company_list.push(va[i])
  }
 },
  /** done */
 

 
}
 