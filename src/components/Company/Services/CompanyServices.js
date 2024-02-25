/* eslint-disable prettier/prettier */
import {
	getCompany,
	DeleteSpeciality,
	PostCompany,
	getType,
	 postSuperUser ,
	 PutCompany
} from './CompanyAPI';
import { Global } from '@/Global/API';
import axios from 'axios';
export default {
	PostCompany(data) {
		console.log("data");
		return axios
			.post(Global + PostCompany , {
			company_type_id: data.idType ,
			name :data.NameAr ,
			en_name :data.NameEn,
			details :data.descriptionAr,
			en_details :data.descriptionEn
			}, {
				headers: {
					Authorization: 'Bearer ' +  JSON.parse(localStorage.getItem('token')),
					//"Accept-Language":  localStorage.getItem('language') 	 
				},
			})
			.then((res) => {
				return res;
			});
	},
	getType() {
		return axios.get(Global + getType,
			{
				headers: {
					Authorization:'Bearer ' + JSON.parse(localStorage.getItem('token')),
					"language":  localStorage.getItem('language') 	 
				     	 
				},
			}
			).then((res) => {
			return res;
		})
	},
	getCompany() {
		 
		return axios.get(Global + getCompany ,
		{ headers :{
			Authorization: 'Bearer ' +  JSON.parse(localStorage.getItem('token')),
			//"language":  localStorage.getItem('language')
		 }
		}
		).then((res) => {
			return res;
		}); 
	}, 
	DeleteCompany(data) {
		return axios
			.delete( Global + DeleteSpeciality + data, {
				headers: {
					Authorization:'Bearer ' +    JSON.parse(localStorage.getItem('token')),
					//"Language":  localStorage.getItem('language') 	 
				},
			})
			.then((res) => {
				return res;
			});
	},
	PostSuperUser(data) {
		console.log(data);  
		return axios
		 .post(Global + postSuperUser , {
			name :data.name ,
			en_name :data.en_name,
			email:data.Email,
			password:data.Password,
			password_confirmation:data.confirmPassword,
			nationality:data.nationality,
			en_nationality:data.en_nationality,
			phone:data.phone,
			company_id:data.company_id,
			user_type_id: 4 
		 }, {
			 headers: {
				 Authorization: 'Bearer ' +  JSON.parse(localStorage.getItem('token')),
				 //"Accept-Language":  localStorage.getItem('language') 	 
			 },
		 })
		 .then((res) => {
			 return res;
		 });
	},
	 
	PutCompany(data) {
		return axios
			.post(
				Global + PutCompany ,
				{
					id:data.id,
					company_type_id:data.idType,
					name:data.NameAr,
					en_name:data.NameEn,
					details: data.descriptionAr,
					en_details:data.descriptionEn
				},
				{
					headers: {
				 Authorization: 'Bearer ' +  JSON.parse(localStorage.getItem('token')),
					 
					},
				}
			)
			.then((res) => {
				return res;
			});
	},
	/**done */
	 
 
  
 
	 
};
 
