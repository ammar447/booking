import { createStore } from "vuex";
import LogIn from "../components/Auth/LogIn/Store/index";
import Company from "../components/Company/Store/index";
import Admin from "../components/AdminSection/Store/index";
import Manager from "../components/Manager/Store/index";
import Employee from "../components/Employee/Store/index";
export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    LogIn,
    Company,
    Admin,
    Manager ,
    Employee
  },
});
