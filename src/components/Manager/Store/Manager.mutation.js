/* eslint-disable prettier/prettier */
export default {
  getTrip(state,va) {   
    state.Trip =[];
    
    for(var i=0;i<va.length;i++) {
      state.Trip.push(va[i])
  }
},
getTransport(state,va) {   
  state.Transport =[];
  
  for(var i=0;i<va.length;i++) {
    state.Transport.push(va[i])
}
},
TransportType(state,va) {   
  state.TransportType =[];
  
  for(var i=0;i<va.length;i++) {
    state.TransportType.push(va[i])
}
},
 
getStation(state,va) {   
  state.Station =[];
  
  for(var i=0;i<va.length;i++) {
    state.Station.push(va[i])
}
},
 
getEmployeeOffice(state,va) {   
  state.EmployeeOffice =[];
  
  for(var i=0;i<va.length;i++) {
    state.EmployeeOffice.push(va[i])
}
},
 
 
  /** done */
 
}
 