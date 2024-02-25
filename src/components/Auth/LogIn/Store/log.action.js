/* eslint-disable prettier/prettier */
import axios from 'axios';
import { Global } from '@/Global/API';
import { PostLogin ,ResetPassword ,ResetUsingCode } from '../Services/LoginAPI';
import router from '@/router/index';
export default {
	LoginUser({ commit }, user) {
		return new Promise((resolve) => {
			axios
				.post( Global+ PostLogin, {
					email: user.email,
					password: user.password,
				} ,
				{
					headers: {
						 language:   localStorage.getItem('language')   
				     },
				})
				.then((response) => {
					 console.log(response.data);
					if (response.status == 200) {
					localStorage.setItem('token', JSON.stringify(response.data.access_token));
					localStorage.setItem('role',  response.data.user.user_type_id );
					localStorage.setItem('Email', JSON.stringify(response.data.user.email));
					localStorage.setItem('company_id',response.data.user.company_id)
					localStorage.setItem('office_id',response.data.user.office_id) ;
					localStorage.setItem('id_user',response.data.user.id) ;
					
               
					if(localStorage.getItem('role') == "5") {
					 router.push({
							name:'SuperAdmin'
						})
					} else if (localStorage.getItem('role') == "4") {
						 router.push({
							name:'Admin'
						})
					}else if (localStorage.getItem('role') == "3") {
						 router.push({
							name:'Trip'
						})
					}else if (localStorage.getItem('role') == "2") {
						console.log("hello iam here");
						 router.push({
							name:'Reservation'
						})
					}
					resolve(true);
				}
				})
				.catch((error) => {
					//let StatusError = error.response.data.ErrorMessage;
                  console.log(error.response.data);
					resolve(error.response.data.errors);
				});
		});
	},
	ResetPassword({ commit }, res) {
		
		return new Promise ((resolve) => {
		axios
			.post( Global + ResetPassword +"?email="+ res, {},    {
				headers: {
				  "Accept-Language":   localStorage.getItem('language')  
				   
				},
			  })
			.then((response) => {
				if (response.status == 200) {
					localStorage.setItem("Email" , JSON.stringify(res))
					resolve(true);
				}
			})
			.catch((error) => {
				let StatusError = error.response.data.ErrorMessage;
				resolve(StatusError);
			});
		})
	},
	 
	ResetUsingCode({ commit, state }, Reset) {
		return new Promise( (resolve) =>{ 
		axios
			.put( Global + ResetUsingCode +
				 "?email="+JSON.parse(localStorage.getItem('Email')) +
				 "&code="+Reset.Number +
				 "&newPassword=" +Reset.Password
				 , {} ,
				 {
					headers: {
						"Accept-Language":  localStorage.getItem('language') 	 
					},
				}
				 )
			.then((response) => {
				 
				if (response.status == 200) {
					resolve(true);
				}
			})
			.catch((error) => {
				let StatusError = error.response.data.ErrorMessage;
				resolve(StatusError);
			});
		})
		 
	},
};
