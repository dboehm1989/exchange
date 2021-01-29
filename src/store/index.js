import {computed} from 'vue'
import {createStore} from 'vuex'

export default createStore({
  state() {
    return {
      title: 'Freelance',
      tasks: [],
    }
  },
  mutations: {
    SAVE_STORE_TASK(state, task) {
      state.tasks.push(task)
    },
    GET_STORAGE_TASKS(state) {
      const tasks = JSON.parse(localStorage.getItem('data'))
      state.tasks = tasks
    },
    SET_STORAGE_TASKS(state) {
      const tasks = computed(() => state.tasks)
      localStorage.setItem('data', JSON.stringify(tasks.value))
    },
    SET_STATUS_TASK(state, payload) {
      const foundIndex = state.tasks.findIndex((x) => x.id == payload.id)
      state.tasks[foundIndex] = payload
    },
  },
  getters: {
    activeTasks(state) {
      return state.tasks.filter((task) => task.type === 'ready').length
    },
  },
})
