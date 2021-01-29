import {createRouter, createWebHashHistory} from 'vue-router'
import Tasks from '../views/Tasks'
import Task from '../views/Task'
import New from '../views/New'
import NotFound from '../views/NotFound'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Tasks',
      component: Tasks,
      alias: '/',
    },
    {
      path: '/task/:taskId',
      name: 'Task',
      component: Task,
    },
    {
      path: '/new',
      name: 'New',
      component: New,
    },
    {
      path: '/:notFound(.*)',
      component: NotFound,
    },
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
})

export default router
