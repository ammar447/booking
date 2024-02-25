/* eslint-disable prettier/prettier */
 import router from '@/router/index.js';
import AdminServices from '../Services/AdminServices.js';
export default {
	getStatics({ commit }) {
		return new Promise((resolve, reject) => {
		 
			AdminServices.getStatics()
				.then((response) => {
					 console.log(response.data);
					commit('get_Statics', response.data.data);
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
	getOffice({ commit }) {
		return new Promise((resolve, reject) => {
		 
			AdminServices.getOffice()
				.then((response) => {
					 console.log(response.data);
					commit('getOffice', response.data.data);
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
	getOfficearshef({ commit }) {
		return new Promise((resolve, reject) => {
		 
			AdminServices.getOfficearshef()
				.then((response) => {
					 console.log(response.data);
					commit('getOffice', response.data.data);
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
	 
	getOffer({ commit }) {
		return new Promise((resolve, reject) => {
		 
			AdminServices.getOffer()
				.then((response) => {
					 console.log(response.data);
					commit('getOffer', response.data.data);
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
	  
	PostOffer({}, data) {
	 
		return new Promise((resolve, reject) => {
			AdminServices.PostOffer(data)
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
	PostOffice({}, data) {
		console.log("iam here");
		return new Promise((resolve, reject) => {
			AdminServices.PostOffice(data)
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
	changepassword({}, data) {
		console.log("iam here");
		return new Promise((resolve, reject) => {
			AdminServices.changepassword(data)
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
	 
	DeleteOffer({ state }, data) {
		return new Promise((resolve) => {
			AdminServices.DeleteOffer(data)
				.then((response) => {
					if (response.status == 200) {
						state.Offer.forEach((element, index) => {
							if (element.id == data) {
								state.Offer.splice(index, 1);
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
	DeleteOffice({ state }, data) {
		return new Promise((resolve) => {
			AdminServices.DeleteOffice(data)
				.then((response) => {
					if (response.status == 200) {
						state.Office.forEach((element, index) => {
							if (element.id == data) {
								state.Office.splice(index, 1);
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
	DeleteOfficePermanently({ state }, data) {
		return new Promise((resolve) => {
			AdminServices.DeleteOfficePermanently(data)
				.then((response) => {
					if (response.status == 200) {
						state.Office.forEach((element, index) => {
							if (element.id == data) {
								state.Office.splice(index, 1);
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
	 
	PutOffer({ state }, data) {
		return new Promise((resolve) => {
		 AdminServices.PutOffer(data).then((response) => {	 
			if (response.status == 200) {
				state.Offer.forEach((element, index) => {
				if (element.id == data.id) {
					state.Offer[index].id = data.id;
					state.Offer[index].starts_at = data.StartAt;
					state.Offer[index].ends_at = data.EndAt;
					state.Offer[index].percentage = data.percentage;
					resolve(true);
				}
				 });
				}
				})
				.catch((error) => {
					 console.log(error.response);
					resolve(false);
				});
		});
	},
	PutOffice({ state }, data) {
		return new Promise((resolve) => {
		 AdminServices.PutOffice(data).then((response) => {	 
			if (response.status == 200) {
				state.Office.forEach((element, index) => {
				if (element.id == data.id) {
					state.Office[index].id = data.id;
					state.Office[index].name = data.NameAr;
					state.Office[index].en_name = data.NameEn;
					state.Office[index].mtn_phone = data.Mtn_phone;
					state.Office[index].syriatel_phone = data.Syriatel_phone;

					state.Office[index].open_at = data.Open_at;
					state.Office[index].close_at = data.Close_at;
					state.Office[index].location_name = data.location_name;
					state.Office[index].location_enname = data.location_en_name;
					state.Office[index].location_lang = data.currLocation.longitude;
					state.Office[index].location_lat = data.currLocation.currLocation;
 


					resolve(true);
				}
				 });
				}
				})
				.catch((error) => {
					 console.log(error.response);
					resolve(false);
				});
		});
	},
	 
	getEmployee({ commit }) {
		return new Promise((resolve, reject) => {
		 
			AdminServices.getEmployee()
				.then((response) => {
					 
					commit('getEmployee', response.data.data);
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
			AdminServices.PostUser(data)
				.then((response) => {
					if (response.status == 200) {
						resolve(true);
					}
				})
				.catch((error) => {
					console.log(error.response);
				/*	if(error.response.status == 401) {
						localStorage.setItem('token', null);
						localStorage.setItem('Email', null);
						localStorage.setItem('refreshToken',null);
						localStorage.setItem('role', null);
						localStorage.setItem('expireDate',null);
						router.push({
                         name:'LogIn'
						})
					}*/
					resolve(false); 
				});
		});
	},
	DeleteEmployee({ state }, data) {
		return new Promise((resolve) => {
			AdminServices.DeleteEmployee(data)
				.then((response) => {
					if (response.status == 200) {
						state.Employee.forEach((element, index) => {
							if (element.id == data) {
								state.Employee.splice(index, 1);
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
	RestorOffice({ state }, data) {
		return new Promise((resolve) => {
			AdminServices.RestorOffice(data)
				.then((response) => {
					if (response.status == 200) {
						state.Office.forEach((element, index) => {
							if (element.id == data) {
								state.Office.splice(index, 1);
								resolve(true);
							}
						});
					}
				})
				.catch((error) => {
					console.log(error.response);
				 
					resolve(error);
					 
				});
		});
	}, 
	 
	/**  DONE */
	 
	 
};
