/* eslint-disable prettier/prettier */
import {
  getStatics,
  getOffice,
  PostOffice,
  DeleteOffice,
  getOffer,
  PostOffer,
  DeleteOffer,
  PutOffice ,
  PutOffer ,
  getEmployee ,
  PostUser ,
  DeleteEmployee ,
  getOfficearshef ,
  DeleteOfficePermanently ,
  changepassword ,
  RestorOffice
} from "./AdminAPI";
import { Global } from "@/Global/API";
import axios from "axios";
export default {
  getStatics() {
    return axios
      .get(
        Global + getStatics + JSON.parse(localStorage.getItem("company_id")),
        {
          headers: {
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("token")),
            //	"language":  localStorage.getItem('language')
          },
        }
      )
      .then((res) => {
        return res;
      });
  },

  getOffice() {
    return axios
      .get(
        Global + getOffice + JSON.parse(localStorage.getItem("company_id")),
        {
          headers: {
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("token")),
            //	"language":  localStorage.getItem('language')
          },
        }
      )
      .then((res) => {
        return res;
      });
  },
  getOfficearshef() {
    return axios
      .get(
        Global + getOfficearshef + JSON.parse(localStorage.getItem("company_id")),
        {
          headers: {
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("token")),
            //	"language":  localStorage.getItem('language')
          },
        }
      )
      .then((res) => {
        return res;
      });
  },
   
  getOffer() {
    return axios
      .get(Global + getOffer + JSON.parse(localStorage.getItem("company_id")), {
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
          //	"language":  localStorage.getItem('language')
        },
      })
      .then((res) => {
        return res;
      });
  },

  PostOffer(data) {
    return axios
      .post(
        Global + PostOffer,
        {
          company_id: localStorage.getItem("company_id"),
          starts_at: data.StartAt,
          ends_at: data.EndAt,
          percentage: data.percentage,
        },
        {
          headers: {
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("token")),
            //"Accept-Language":  localStorage.getItem('language')
          },
        }
      )
      .then((res) => {
        return res;
      });
  },
  PostOffice(data) {
    console.log(JSON.stringify(data.currLocation.longitude));
    console.log(data.currLocation.longitude);
    console.log("mtn +" + data.Mtn_phone);
    return axios
      .post(
        Global + PostOffice,
        {
          location_lat: data.currLocation.latitude,
          location_lang: data.currLocation.longitude,
          location_name: data.location_name,
          location_en_name: data.location_en_name,
          company_id: localStorage.getItem("company_id"),
          name: data.NameAr,
          en_name: data.NameEn,
          mtn_phone: JSON.stringify(data.Mtn_phone),
          syriatel_phone: JSON.stringify(data.Syriatel_phone),
          open_at: data.Open_at,
          close_at: data.Close_at,
        },
        {
          headers: {
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("token")),
            //"Accept-Language":  localStorage.getItem('language')
          },
        }
      )
      .then((res) => {
        return res;
      });
  },
  changepassword(data) {
    
    return axios
      .post(
        Global + changepassword +localStorage.getItem("id_user"),
        {
          current_password:data.OldPassword,
          password:data.Password,
          password_confirmation:data.confirmPassword
        },
        {
          headers: {
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("token")),
            //"Accept-Language":  localStorage.getItem('language')
          },
        }
      )
      .then((res) => {
        return res;
      });
  },
   
  PutOffer(data) {
    return axios
      .post(
        Global + PutOffer +data.id,
        {
         
          starts_at: data.StartAt,
          ends_at: data.EndAt,
          percentage: data.percentage,
          
        },
        {
          headers: {
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("token")),
          },
        }
      )
      .then((res) => {
        return res;
      });
  },
  PutOffice(data) {
    return axios
      .post(
        Global + PutOffice + data.id,
        { 
          location_name: data.location_name,
          location_enname: data.location_en_name,
          location_lat: data.currLocation.latitude,
          location_lang: data.currLocation.longitude,
          company_id: localStorage.getItem("company_id"),
          name: data.NameAr,
          en_name: data.NameEn,
          mtn_phone: JSON.stringify(data.Mtn_phone),
          syriatel_phone: JSON.stringify(data.Syriatel_phone),
          open_at: data.Open_at,
          close_at: data.Close_at,
        },
        {
          headers: {
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("token")),
          },
        }
      )
      .then((res) => {
        return res;
      });
  },
  DeleteOffer(data) {
    return axios
      .delete(Global + DeleteOffer + data, {
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
          //"Language":  localStorage.getItem('language')
        },
      })
      .then((res) => {
        return res;
      });
  },
  DeleteOffice(data) {
    return axios
      .delete(Global + DeleteOffice + data, {
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
          //"Language":  localStorage.getItem('language')
        },
      })
      .then((res) => {
        return res;
      });
  },
  DeleteOfficePermanently(data) {
    return axios
      .get(Global + DeleteOfficePermanently + data, {
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
          //"Language":  localStorage.getItem('language')
        },
      })
      .then((res) => {
        return res;
      });
  },
   
  getEmployee() {
    return axios
      .get(Global + getEmployee + JSON.parse(localStorage.getItem("company_id")), {
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
          //	"language":  localStorage.getItem('language')
        },
      })
      .then((res) => {
        return res;
      });
  },
  PostUser(data) {
		console.log(data);  
		return axios
		 .post(Global + PostUser , {
			name :data.name ,
			en_name :data.en_name,
			email:data.Email,
			password:data.Password,
			password_confirmation:data.confirmPassword,
			nationality:data.nationality,
			en_nationality:data.en_nationality,
			phone:data.phone,
			office_id:data.office_id,
			user_type_id: data.user_type_id
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
   
  DeleteEmployee(data) {
    return axios
      .delete(Global + DeleteEmployee + data, {
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
          //"Language":  localStorage.getItem('language')
        },
      })
      .then((res) => {
        return res;
      });
  },
  RestorOffice(data) {
    return axios
      .get(Global + RestorOffice + data, {
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
          //"Language":  localStorage.getItem('language')
        },
      })
      .then((res) => {
        return res;
      });
  },
   
  /** Done  */

  getType() {
    return axios
      .get(Global + getType, {
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
          language: localStorage.getItem("language"),
        },
      })
      .then((res) => {
        return res;
      });
  },
  getCompany() {
    return axios
      .get(Global + getCompany, {
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
          language: localStorage.getItem("language"),
        },
      })
      .then((res) => {
        return res;
      });
  },

  PostSuperUser(data) {
    console.log(data);
    return axios
      .post(
        Global + postSuperUser,
        {
          company_type_id: data.idType,
          name: data.NameAr,
          en_name: data.NameEn,
          details: data.descriptionAr,
          en_details: data.descriptionEn,
        },
        {
          headers: {
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("token")),
            //"Accept-Language":  localStorage.getItem('language')
          },
        }
      )
      .then((res) => {
        return res;
      });
  },

  GetAll(data) {
    return axios
      .get(
        Global +
          getAllSpecializationWithTranslate +
          data.PageSize +
          "&pageNum=" +
          data.PageNum,
        {
          headers: {
            Authorization: JSON.parse(localStorage.getItem("token")),
            "Accept-Language": localStorage.getItem("language"),
          },
        }
      )
      .then((res) => {
        return res;
      });
  },
  getSpecializationWithTranslate(data) {
    return axios
      .get(Global + getSpecializationWithTranslate + "&pageNum=" + data, {
        headers: {
          Authorization: JSON.parse(localStorage.getItem("token")),
        },
      })
      .then((res) => {
        return res;
      });
  },
};
