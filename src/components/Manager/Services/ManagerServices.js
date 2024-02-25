/* eslint-disable prettier/prettier */
import {
  getTrip ,
  getTransport,
  getStation,
  PostTrip ,
  DeleteTrip ,
  TransportType,
  PostTransportType,
  getEmployeeOffice,
  DeleteEmployeeOffice ,
  DeleteTransport,
 
 
} from "./ManagerAPI";
import { Global } from "@/Global/API";
import axios from "axios";
export default {
  getTrip() {
    return axios
      .get(
        Global + getTrip + JSON.parse(localStorage.getItem("office_id")),
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
  
   
  getTransport() {
    return axios
      .get(
        Global + getTransport + JSON.parse(localStorage.getItem("office_id")),
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
  TransportType() {
    return axios
      .get(
        Global + TransportType ,
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
   
  DeleteTransport(data) {
    return axios
      .delete(Global + DeleteTransport + data, {
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
          //"Language":  localStorage.getItem('language')
        },
      })
      .then((res) => {
        return res;
      });
  },
  getStation() {
    return axios
      .get(
        Global + getStation ,
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
    
  PostTrip(data) {
    console.log(data);
    console.log(JSON.stringify(data));
    let datasend ;
    if(data.OfferId){
      datasend = {
        name:data.NameAr,
        en_name:data.NameEn,
        transport_id:data.transport_id,
        departure_station_id:data.departure_station_id,
        arrival_station_id:data.arrival_station_id,
        departure_time:data.departure_time,
        arrival_time:data.arrival_time,
        cost:data.cost,
         offer_id:data.OfferId,
        confirm_date:data.confirm_date,
        details:data.details,
        max_weight:data.max_weight,
        en_details:data.en_details
      }
    } else {
      datasend = {
        name:data.NameAr,
        en_name:data.NameEn,
        transport_id:data.transport_id,
        departure_station_id:data.departure_station_id,
        arrival_station_id:data.arrival_station_id,
        departure_time:data.departure_time,
        arrival_time:data.arrival_time,
        cost:data.cost,
          
        confirm_date:data.confirm_date,
        details:data.details,
        max_weight:data.max_weight,
        en_details:data.en_details
      }
    }
    return axios
      .post(
        Global + PostTrip, datasend ,
        
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
   
  DeleteTrip(data) {
    return axios
      .delete(Global + DeleteTrip + data, {
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
          //"Language":  localStorage.getItem('language')
        },
      })
      .then((res) => {
        return res;
      });
  },
  PostTransportType(data) {
  
    return axios
      .post(
        Global + PostTransportType,
        {
           
          office_id: localStorage.getItem("office_id"),
          transport_type_id:data.transport_type_id
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
  getEmployeeOffice() {
    return axios
      .get(
        Global + getEmployeeOffice + JSON.parse(localStorage.getItem("office_id")),
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
   
  DeleteEmployeeOffice(data) {
    return axios
      .delete(Global + DeleteEmployeeOffice + data, {
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
   
 
};
