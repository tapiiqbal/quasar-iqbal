<template>
<div>
  <div class="q-pa-md" style="max-width: 300px">

    <q-form
      class="q-gutter-md">
      <q-input
        filled
        type="firstName"
        v-model="firstName"
        label="First Name"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type your username']"
      />

      <q-input
        filled
        type="lastName"
        v-model="lastName"
        label="Last Name"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please type your Last Name',
          val => val > 0 && val < 100 || 'Please type again your Last Name'
        ]"
      />

      <q-input
        filled
        type="email"
        v-model="email"
        label="Email"
        lazy-rules
      />

      <q-input
        filled
        type="phone"
        v-model="phone"
        label="Phone"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please type your Phone Number',
          val => val > 0 && val < 100 || 'Please type again your Phone Number'
        ]"
      />
      <q-select
        filled
        v-model="datas.projectName"
        :options="options"
        label="Single"
        style="width: 250px"
      />
      <label>Project Name</label>
       <select>
        <option v-for="project in datas" v-bind:value="project.projectId" 
        v-bind:key="project.projectName">
          {{ project.projectName }}
        </option>
      </select>
      <!-- <q-btn-dropdown label="Project Name">
        <q-list v-for="project in datas" :key="project">
          <q-item clickable>
          <q-item-section >
            <q-item-label >{{project.projectName}}</q-item-label>
          </q-item-section>
        </q-item>
        </q-list>
        </q-btn-dropdown> -->

      <!-- <q-toggle v-model="accept" label="I accept the license and terms" /> -->

      <div>
        <q-btn label="Submit" @click="onSubmit()" type="submit" color="primary"/>
        <q-btn label="Reset" @click="onReset()" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

  </div>
</div>
</template>

<script>
import Vue from 'vue';
import Login from "../api/login/index";


export default {
    name: 'Employee' ,

    data () {
        return {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            projectId: '',
            datas: []
        }
    },

  beforeCreate(){

      let self = this
      Login.getAllProject(window).then(function(datas) {
          return datas
      }).then(function(res){
          console.log(res)
          self.datas = res
      }).catch(function(err){
          console.log(err)
      })
  } 
}
</script>