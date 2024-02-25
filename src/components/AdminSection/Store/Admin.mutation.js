/* eslint-disable prettier/prettier */
export default {
  get_Statics(state,va) {
      state.Statics =va   
  },
  getOffice(state,va) {   
    state.Office =[];
    
    for(var i=0;i<va.length;i++) {
      state.Office.push(va[i])
  }
},
getEmployee(state,va) {   
  state.Employee =[];
  
  for(var i=0;i<va.length;i++) {
    state.Employee.push(va[i])
}
},
getOffer(state,va) {   
  state.Offer =[];
  
  for(var i=0;i<va.length;i++) {
    state.Offer.push(va[i])
}
},
 
   
  /** done */
 
}
 