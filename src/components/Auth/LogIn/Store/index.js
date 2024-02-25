/* eslint-disable prettier/prettier */
import state from './log.state'
import getters from './log.getters'
import mutations from './log.mutation'
import actions from './log.action'


export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
    modules:{}
}