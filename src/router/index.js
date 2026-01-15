import { createRouter, createWebHistory } from 'vue-router'

// Layout
import BaseLayout from '@/layouts/BaseLayout.vue'

// Pages
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "",
      path: "/:projectId?/:managerId?",
      component: BaseLayout,
      children: [
        {
          name: "home",
          path: "",
          component: HomeView
        }
      ]
    }
  ],
})

export default router
