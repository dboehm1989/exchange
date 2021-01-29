<template>
  <span :class="['badge', statusClass]">{{ getStatus }}</span>
</template>

<script>
import {ref, computed} from 'vue'
export default {
  props: {
    type: String,
  },
  setup(props) {
    const statusClass = ref()
    const getStatus = computed(() => {
      switch (props.type) {
        case 'active':
          statusClass.value = 'primary'
          return 'Активен'
        case 'done':
          statusClass.value = 'primary'
          return 'Завершон'
        case 'cancelled':
          statusClass.value = 'danger'
          return 'Отменён'
        case 'pending':
          statusClass.value = 'danger'
          return 'Выполняеться'
        default:
          statusClass.value = null
          return 'Нет статуса'
      }
    })

    return {
      statusClass,
      getStatus,
    }
  },
}
</script>
