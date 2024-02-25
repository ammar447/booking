/* eslint-disable prettier/prettier */
 
import state from './Manager.state'
import getters from  './Manager.getters'
import mutations from  './Manager.mutation'
import actions from  './Manager.action'
export default {
    namespaced : true,
    state ,
    getters,
    mutations,
    actions,
    module : {}
}
