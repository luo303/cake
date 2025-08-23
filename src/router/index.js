import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/layout/PageLayout.vue'),
      redirect: '/content/container',
      children: [
        {
          path: '/content/container',
          component: () => import('@/views/content/PageContainer.vue')
        },
        {
          path: '/content/cake',
          component: () => import('@/views/content/PageCake.vue')
        },
        {
          path: '/content/normal',
          component: () => import('@/views/content/PageNormal.vue')
        },
        {
          path: '/content/west',
          component: () => import('@/views/content/PageWest.vue')
        }
      ]
    },
    {
      path: '/login',
      component: () => import('@/views/login/PageLogin.vue')
    },
    {
      path: '/register',
      component: () => import('@/views/login/PageRegister.vue')
    },
    {
      path: '/user/password',
      component: () => import('@/views/user/PagePassword.vue')
    },
    {
      path: '/user/profile',
      component: () => import('@/views/user/PageProfile.vue')
    }
  ]
})

export default router
