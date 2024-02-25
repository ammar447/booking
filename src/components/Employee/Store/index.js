/* eslint-disable prettier/prettier */
 
import state from './Employee.state'
import getters from  './Employee.getters'
import mutations from  './Employee.mutation'
import actions from  './Employee.action'
export default {
    namespaced : true,
    state ,
    getters,
    mutations,
    actions,
    module : {}
}
