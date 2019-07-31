import VueResource from 'vue-resource'
import Vue from 'vue'
import {getApiNoAuth} from '../utils'

Vue.use(VueResource)

export default {

    getAllProject (window) {
        return getApiNoAuth().get('Projects')
        .then(function (response){
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    },

    onSubmit (window) {
        return getApiNoAuth().get('Projects')
        .then(function (response){
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    }
}