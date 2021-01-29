<template>
  <div v-if="task" class="card">
    <h2>{{ task.title }}</h2>
    <p><strong>Статус</strong>: <AppStatus :type="task.type" /></p>
    <p><strong>Дэдлайн</strong>: {{ new Date(task.date).toLocaleDateString() }}</p>
    <p><strong>Описание</strong>: {{ task.desc }}</p>
    <div>
      <button class="btn" @click="editTaskStatus('ready')">Взять в работу</button>
      <button class="btn primary" @click="editTaskStatus('done')">Завершить</button>
      <button class="btn danger" @click="editTaskStatus('cancel')">Отменить</button>
    </div>
  </div>
  <h3 v-else class="text-white center">Задачи с id = <strong>Tут АЙДИ</strong> нет.</h3>
</template>

<script>
import AppStatus from '../components/AppStatus'
import {useStore} from 'vuex'
import {computed} from 'vue'

export default {
  setup() {
    const store = useStore()
    const task = computed(() => store.state.tasks.find((el) => el.id === getTaskId()))
    const editTaskStatus = (type) => {
      task.value.type = type
      store.commit('SET_STATUS_TASK', task)
    }

    const getTaskId = () => {
      const url = window.location.href
      const taskId = url.split('/').pop()
      return +taskId
    }

    return {
      task,
      editTaskStatus,
    }
  },
  components: {AppStatus},
}
</script>

<style scoped></style>
