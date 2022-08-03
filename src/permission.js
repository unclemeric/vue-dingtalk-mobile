import router from '@/router'
import routerFilter from '@/utils/permission-util'

router.beforeEach((to, from, next) => {
  routerFilter(next)
})
