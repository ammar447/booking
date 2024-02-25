/* eslint-disable prettier/prettier */
import {
  getTrip ,
  PostUser ,
  SeateAvalibale ,
  PostReservation ,
  ReservationConfirmation ,
  getUnConfirmedTrip ,
  getConfirmedTrip ,
  getDetailsDelete ,
  DeleteReservation ,
  deletedReservation,
  DeleteReservationConfirmation
} from "./EmployeeAPI";
import { Global } from "@/Global/API";
import axios from "axios";
export default {
  getTrip(data) {
    return axios
      .get(
        Global + getTrip + data,
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
  SeateAvalibale(data) {
    return axios
      .get(
        Global + SeateAvalibale + data,
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
   
  PostUser(data) {
		 
		return axios
		 .post(Global + PostUser , {
			name :data.name ,
			en_name :data.en_name,
			 
			phone:data.phone,
		 
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
   
  PostReservation(data) {
  console.log("value :"+data.value);
  console.log("userId :"+data.userId);
  console.log("TripId :"+data.TripId);

   
    return axios
      .post(
        Global + PostReservation,  {
          trip_id : data.TripId,
          user_id   :data.userId ,
          seats_id :data.value
        } ,
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
  ReservationConfirmation(data) {
    
  
     
      return axios
        .get(
          Global + ReservationConfirmation +data ,
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
    getUnConfirmedTrip(data) {
      return axios
        .get(
          Global + getUnConfirmedTrip + data,
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
    getConfirmedTrip(data) {
      return axios
        .get(
          Global + getConfirmedTrip + data,
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
    getDetailsDelete(data) {
      return axios
        .get(
          Global + getDetailsDelete + data,
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
     
    DeleteReservation(data) {
      return axios
        .delete(Global + DeleteReservation + data, {
          headers: {
            Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
            //"Language":  localStorage.getItem('language')
          },
        })
        .then((res) => {
          return res;
        });
    },
    deletedReservation( ) {
      return axios
        .get(
          Global + deletedReservation + JSON.parse(localStorage.getItem("company_id")),
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
    DeleteReservationConfirmation(data ) {
      return axios
        .get(
          Global + DeleteReservationConfirmation +  data,
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
     
  /** done hrere */
}