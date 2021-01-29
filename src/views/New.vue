<template>
  <form class="card" @submit.prevent="createNewTask">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input v-model.trim="form.title" type="text" id="title" />
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input v-model="form.date" type="date" id="date" />
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea v-model.trim="form.desc" id="description"></textarea>
    </div>

    <button class="btn primary" :disabled="!isFormValid">Создать</button>
  </form>
</template>

<script>
import {reactive, computed} from 'vue'
import {useRouter} from 'vue-router'
import {useStore} from 'vuex'

export default {
  setup() {
    const router = useRouter()
    const store = useStore()

    const form = reactive({
      title: null,
      date: null,
      desc: null,
      type: null,
    })

    const createNewTask = () => {
      form.id = Date.now()
      form.type = isTimePast() ? 'cancelled' : 'active'
      store.commit('SAVE_STORE_TASK', form)
      store.commit('SET_STORAGE_TASKS')
      router.push('/')
    }

    const isTimePast = () => {
      const d1 = new Date(form.date)
      const d2 = new Date()
      return d1.getTime() < d2.getTime()
    }

    return {
      form,
      createNewTask,
      isFormValid: computed(() => form.title && form.date && form.desc),
    }
  },
}
</script>
