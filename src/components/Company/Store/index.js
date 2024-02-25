/* eslint-disable prettier/prettier */
 
import state from './Company.state'
import getters from  './Company.getters'
import mutations from  './Company.mutation'
import actions from  './Company.action'
export default {
    namespaced : true,
    state ,
    getters,
    mutations,
    actions,
    module : {}
}
