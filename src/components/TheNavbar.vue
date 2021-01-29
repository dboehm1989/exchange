<template>
  <header class="navbar">
    <h3>{{ appTitle }}</h3>
    <ul class="navbar-menu">
      <li><router-link to="/">Все задачи</router-link></li>
      <li><router-link to="/new">Создать</router-link></li>
    </ul>
  </header>
</template>

<script>
import {computed} from 'vue'
import {useStore} from 'vuex'

export default {
  setup() {
    const store = useStore()

    return {
      appTitle: computed(() => store.state.title),
    }
  },
}
</script>

<style scoped></style>
