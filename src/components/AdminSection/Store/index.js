/* eslint-disable prettier/prettier */
 
import state from './Admin.state'
import getters from  './Admin.getters'
import mutations from  './Admin.mutation'
import actions from  './Admin.action'
export default {
    namespaced : true,
    state ,
    getters,
    mutations,
    actions,
    module : {}
}
