/* eslint-disable prettier/prettier */
 import router from '@/router/index.js';
import EmployeeServices from '../Services/EmployeeServices.js';
export default {
	getTrip({ commit } ,data) {
		return new Promise((resolve, reject) => {
		 
			EmployeeServices.getTrip(data)
				.then((response) => {
					 console.log(response.data);
					commit('getTrip', response.data.data);
					if (response.status == 200) {
						 
						resolve(true);
					}
				})
				.catch((error) => {
					console.log(error.response);
					resolve(false);
				});
		});
	}, 
	AddUser({}, data) {
		return new Promise((resolve, reject) => {
			EmployeeServices.PostUser(data)
				.then((response) => {
					console.log(response.data);
					if (response.status == 200) {
						resolve(response.data);
					}
				})
				.catch((error) => {
					console.log(error.response);
			 
					resolve(false); 
				});
		});
	},
	Alluser({ commit }) {
		return new Promise((resolve, reject) => {
		 
			EmployeeServices.Alluser()
				.then((response) => {
					 console.log(response.data);
					commit('Alluser', response.data.data);
					if (response.status == 200) {
						 
						resolve(true);
					}
				})
				.catch((error) => {
					console.log(error.response);
					resolve(false);
				});
		});
	}, 
	SeateAvalibale({ commit } ,data) {
		return new Promise((resolve, reject) => {
		 console.log(data);
			EmployeeServices.SeateAvalibale(data)
				.then((response) => {
					 console.log(response.data);
					commit('SeateAvalibale', response.data.data);
					if (response.status == 200) {
						 
						resolve(true);
					}
				})
				.catch((error) => {
					console.log(error.response);
					resolve(false);
				});
		});
	}, 
	 
	PostReservation({}, data) {
		 console.log("iam hehe");
		return new Promise((resolve, reject) => {
			EmployeeServices.PostReservation(data)
				.then((response) => {
					console.log(response.data);
					if (response.status == 200) {
						resolve(response.data);
					}
				})
				.catch((error) => {
					console.log(error.response);
				 
					resolve(false); 
				});
		});
	},
	ReservationConfirmation({}, data) {
		 
	   return new Promise((resolve, reject) => {
		   EmployeeServices.ReservationConfirmation(data)
			   .then((response) => {
				   console.log(response.data);
				   if (response.status == 200) {
					   resolve(true);
				   }
			   })
			   .catch((error) => {
				   console.log(error.response);
				
				   resolve(false); 
			   });
	   });
   },
   getUnConfirmedTrip({ commit } ,data) {
	return new Promise((resolve, reject) => {
	  
		EmployeeServices.getUnConfirmedTrip(data)
			.then((response) => {
				 console.log(response.data);
				commit('getUnConfirmedTrip', response.data.data);
				if (response.status == 200) {
					 
					resolve(true);
				}
			})
			.catch((error) => {
				console.log(error.response);
				resolve(false);
			});
	});
},
getConfirmedTrip({ commit } ,data) {
	return new Promise((resolve, reject) => {
	  
		EmployeeServices.getConfirmedTrip(data)
			.then((response) => {
				 console.log(response.data);
				commit('getConfirmedTrip', response.data.data);
				if (response.status == 200) {
					 
					resolve(true);
				}
			})
			.catch((error) => {
				console.log(error.response);
				resolve(false);
			});
	});
},
getDetailsDelete({ commit } ,data) {
	return new Promise((resolve, reject) => {
	  
		EmployeeServices.getDetailsDelete(data)
			.then((response) => {
				 console.log(response.data);
				commit('getDetailsDelete', response.data.data);
				if (response.status == 200) {
					 
					resolve(true);
				}
			})
			.catch((error) => {
				console.log(error.response);
				resolve(false);
			});
	});
},
 
DeleteReservation({ state }, data) {
	return new Promise((resolve) => {
		EmployeeServices.DeleteReservation(data)
			.then((response) => {
				if (response.status == 200) {
					state.ConfirmedTrip.forEach((element, index) => {
						if (element.id == data) {
							state.ConfirmedTrip.splice(index, 1);
							resolve(true);
						}
					});
				}
			})
			.catch((error) => {
				console.log(error.response);
			 
				resolve(err);
				 
			});
	});
}, 
 
deletedReservation({ commit } , ) {
	return new Promise((resolve, reject) => {
	  
		EmployeeServices.deletedReservation( )
			.then((response) => {
				 console.log(response.data);
				commit('deletedReservation', response.data.data);
				if (response.status == 200) {
					 
					resolve(true);
				}
			})
			.catch((error) => {
				console.log(error.response);
				resolve(false);
			});
	});
},
DeleteReservationConfirmation({ state } , data) {
	return new Promise((resolve, reject) => {
	  
		EmployeeServices.DeleteReservationConfirmation(data)
			.then((response) => {
				 console.log(response.data);
				 
				if (response.status == 200) {
					state.deletedReservation.forEach((element, index) => {
						if (element.id == data) {
							state.deletedReservation.splice(index, 1);
							resolve(true);
						}
					});
					resolve(true);
				}
			})
			.catch((error) => {
				console.log(error.response);
				resolve(false);
			});
	});
},
  
	/** done */
 
	  
	 
};
