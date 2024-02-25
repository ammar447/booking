/* eslint-disable prettier/prettier */
export default {
  getTrip(state,va) {   
    state.Trip = va;
},
SeateAvalibale(state,va) {   
  state.SeateAvalibale =[];
  state.options =[];

  
  for(var i=0;i<va.length;i++) {
    state.SeateAvalibale.push(va[i])
}
 var obj ={ value : '' , label :''}
for(var i=0;i<va.length;i++) {
  obj.value = va[i].id;
  obj.label = va[i].position
  state.options.push(obj)
  obj ={ value : '' , label :''}
}
 
},
getUnConfirmedTrip(state,va) {
  state.UnConfirmedTrip =[];

  for(var i=0;i<va.length;i++) {
    state.UnConfirmedTrip.push(va[i])
}
},
getConfirmedTrip(state,va) {
  state.ConfirmedTrip =[];

  for(var i=0;i<va.length;i++) {
    state.ConfirmedTrip.push(va[i])
}
},
getDetailsDelete(state, va) {
  state.DetailsDelete = va;
},
deletedReservation(state,va) {
  state.deletedReservation =[];

  for(var i=0;i<va.length;i++) {
    state.deletedReservation.push(va[i])
}
},
 
/** done */
  
}
 