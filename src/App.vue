<template>
<div class="q-pa-md" style="max-width: 400px">
  <Login/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Employee from './components/Employee.vue'
import Login from './components/Login.vue'

export default {
  name: 'LayoutDefault',

  components: {
    HelloWorld,
    Employee,
    Login,
  },

  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  }
}
</script>

<style>
</style>
