import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/user/create',
    name: 'user',
    component: function () {
      return import('../views/Auth/UserCreate.vue')
    }
  },
  {
    path: '/',
    name: 'login',
    component: function () {
      return import('../views/Auth/Login.vue')
    }
  },
  {
    path: '/home',
    name: 'home',
    component: function () {
      return import('../views/Customer/Balance.vue')
    },
    meta: { requiresAuth: true }
  },
  {
    path: '/expenses',
    name: 'expenses',
    component: function () {
      return import('../views/Customer/Expenses.vue')
    }
  },
  {
    path: '/deposit',
    name: 'deposit',
    component: function () {
      return import('../views/Customer/DepositCheck.vue')
    }
  },
  {
    path: '/check',
    name: 'check',
    component: function () {
      return import('../views/Customer/AcceptedChecks.vue')
    }
  },
  {
    path: '/purchase',
    name: 'purchase',
    component: function () {
      return import('../views/Customer/AddPurchase.vue')
    }
  },
  {
    path: '/check/control',
    name: 'control',
    component: function () {
      return import('../views/Admin/CheckList.vue')
    }
  },
  {
    path: '/check/details',
    name: 'details',
    component: function () {
      return import('../views/Admin/CheckDetails.vue')
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  if (to.meta.requiresAuth && !token) {
    next('/login');
  } else {
    next();
  }
});

export default router
