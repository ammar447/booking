/* eslint-disable prettier/prettier */
 import router from '@/router/index.js';
import ManagerServices from '../Services/ManagerServices.js';
export default {
	getTrip({ commit }) {
		return new Promise((resolve, reject) => {
		 
			ManagerServices.getTrip()
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
	 
	  
	getTransport({ commit }) {
		return new Promise((resolve, reject) => {
		 
			ManagerServices.getTransport()
				.then((response) => {
					 console.log(response.data);
					commit('getTransport', response.data.data);
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
	TransportType({ commit }) {
		return new Promise((resolve, reject) => {
		 
			ManagerServices.TransportType()
				.then((response) => {
					 console.log(response.data);
					commit('TransportType', response.data.data);
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
	 
	DeleteTransport({ state }, data) {
		return new Promise((resolve) => {
			ManagerServices.DeleteTransport(data)
				.then((response) => {
					if (response.status == 200) {
						state.Transport.forEach((element, index) => {
							if (element.id == data) {
								state.Transport.splice(index, 1);
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
	getStation({ commit }) {
		return new Promise((resolve, reject) => {
		 
			ManagerServices.getStation()
				.then((response) => {
					 console.log(response.data);
					commit('getStation', response.data.data);
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
	 
	PostTrip({}, data) {
		console.log("iam here");
		return new Promise((resolve, reject) => {
			ManagerServices.PostTrip(data)
				.then((response) => {
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
	 
	DeleteTrip({ state }, data) {
		return new Promise((resolve) => {
			ManagerServices.DeleteTrip(data)
				.then((response) => {
					if (response.status == 200) {
						state.Trip.forEach((element, index) => {
							if (element.id == data) {
								state.Trip.splice(index, 1);
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
	PostTransportType({}, data) {
	 
		return new Promise((resolve, reject) => {
			ManagerServices.PostTransportType(data)
				.then((response) => {
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
	 
	getEmployeeOffice({ commit }) {
		return new Promise((resolve, reject) => {
		 
			ManagerServices.getEmployeeOffice()
				.then((response) => {
					 console.log(response.data);
					commit('getEmployeeOffice', response.data.data);
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
	DeleteEmployeeOffice({ state }, data) {
		return new Promise((resolve) => {
			ManagerServices.DeleteEmployeeOffice(data)
				.then((response) => {
					if (response.status == 200) {
						state.EmployeeOffice.forEach((element, index) => {
							if (element.id == data) {
								state.EmployeeOffice.splice(index, 1);
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
	/** done */
	 
	  
	 
};
