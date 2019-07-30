<template>
    <q-page class="flex flex-center">
    <p>{{employeeData}}</p>

    <div class="row">

        <div class="col-sm-6">
            <p>ini first name</p>
            <button class="danger" @click="getFirstNameOnly()">First Name</button>
            <div>
                <p>{{firstNameDataOnly}}</p>
            </div>
        </div>

        <div class="col-sm-6">
            <p> Ini lastname</p>
            <button class="danger" @click="getLastNameOnly()">Last Name</button>
            <div>
                <p>{{lastNameDataOnly}}</p>
            </div>
        </div>
    </div>
    </q-page>
</template>

<style>

</style>

<script>
import Vue from 'vue';
import employee from "../api/employee/index";
import VMDateRangePicker from "v-md-date-range-picker";

Vue.use(VMDateRangePicker);
export default {
    name: 'Employee' ,

    data () {
        return {
            employeeData: {},
            totalEmployee: 0,
            nameEmployee: 'sapi',
            firstDataOnly: [],
            lastNameDataOnly: [],
            param: {
                "firstname": "iqbal",
                "lastname": "Muhammad",
                "email": "tapiiqbal@gmail.com",
                "phone": "+62"
            }
        }
    },

    methods: {
        getFirstNameOnly() {
            const self = this;
            employee.getEmployee(windows).then(function (datas) {
                console.log('ini data nama depan', datas)
                for (let i=0; i < datas.length; i++){
                    self.firstDataOnly.push(datas[i].firstname)
                }
                return datas;
            }).catch(function (err){
                console.log(err)
            })
        },

        getLastNameOnly() {
            const self = this;
            employee.getEmployee(windows).then(function (datas) {
                console.log('ini data nama depan', datas)
                for (let i=0; i < datas.length; i++){
                    self.firstDataOnly.push(datas[i].lastname)
                }
                return datas;
            }).catch(function (err){
                console.log(err)
            })
        },

        createNewEmployee() {
            const self = this;
            employee.submitNewEmployee(windows, self.param).then(function (result) {
                return result;
            }).catch(function (err){
                console.log(err)
            })
        },
    },
    
    beforeCreate(){
        let self = this

        employee.getEmployee(window).then(function (datas){
            return datas
        }).then(function (res){
            console.log(res)
            self.employeeData = res
        }).catch(function(err){
            console.log(err)
        })

        console.log()
    },

    created(){

    },

    berforeMount(){

    },
}
</script>


