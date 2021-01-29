<template>
  <h1 v-if="!tasks.length" class="text-white center">Задач пока нет</h1>
  <template v-else>
    <h3 class="text-white">Всего активных задач: {{ activeTasks }}</h3>
    <div class="card" v-for="task in tasks" :key="task.id">
      <h2 class="card-title">
        {{ task.title }}
        <AppStatus :type="task.type" />
      </h2>
      <p>
        <strong>
          <small>
            {{ new Date(task.date).toLocaleDateString() }}
          </small>
        </strong>
      </p>
      <button class="btn" @click="$router.push('/task/' + task.id)">Посмотреть</button>
    </div>
  </template>
</template>

<script>
import AppStatus from '../components/AppStatus'
import {useStore} from 'vuex'
import {computed} from 'vue'

export default {
  setup() {
    const store = useStore()

    return {
      tasks: computed(() => store.state.tasks),
      activeTasks: computed(() => store.getters.activeTasks),
    }
  },
  components: {AppStatus},
}
</script>
