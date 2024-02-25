/* eslint-disable prettier/prettier */
 import router from '@/router/index.js';
import CompanyServices from '../Services/CompanyServices.js';
export default {
	PostCompany({}, data) {
		return new Promise((resolve, reject) => {
			CompanyServices.PostCompany(data)
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
	getType({ commit }) {
		return new Promise((resolve, reject) => {
		 
			CompanyServices.getType()
				.then((response) => {
					console.log(response.data);
					commit('get_Type', response.data.data);
					if (response.status == 200) {		 
						resolve(true);
					}
				})
				.catch((error) => {
				 console.log("error");
				 console.log(error.response);
				 resolve(false);
					 
				});
		});
	},
	getCompany({ commit }) {
		return new Promise((resolve, reject) => {
		 
			CompanyServices.getCompany()
				.then((response) => {
					 console.log(response.data);
					commit('get_Company', response.data.data);
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
	DeleteCompany({ state }, data) {
		return new Promise((resolve) => {
			CompanyServices.DeleteCompany(data)
				.then((response) => {
					if (response.status == 200) {
						state.Company_list.forEach((element, index) => {
							if (element.id == data) {
								state.Company_list.splice(index, 1);
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
	AddSuperUser({}, data) {
		return new Promise((resolve, reject) => {
			CompanyServices.PostSuperUser(data)
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
	 
	PutCompany({ state }, data) {
		return new Promise((resolve) => {
		 CompanyServices.PutCompany(data).then((response) => {	 
			if (response.status == 200) {
				state.Company_list.forEach((element, index) => {
				if (element.id == data.id) {
					state.Company_list[index].id = data.id;
					state.Company_list[index].company_type_id = data.idType;
					state.Company_list[index].details = data.descriptionAr;
					state.Company_list[index].en_details = data.descriptionEn;
					state.Company_list[index].en_name = data.NameEn;
					state.Company_list[index].name = data.NameAr;
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
	/**done */
	 
 
};
