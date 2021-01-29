<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <router-view />
  </div>
</template>

<script>
import TheNavbar from './components/TheNavbar'
import {useStore} from 'vuex'

export default {
  components: {
    TheNavbar,
  },
  setup() {
    const store = useStore()
    store.commit('GET_STORAGE_TASKS')
  },
}
</script>

<style></style>
