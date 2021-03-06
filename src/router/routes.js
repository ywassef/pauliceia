//layouts
import Application from '@/views/layouts/application'

//pages
import About from '@/views/pages/about'
import Login from '@/views/pages/login'

//routes
import mapRoutes from '@/router/map'
import dashRoutes from '@/router/dashboard'

const routes = [
    {
      path: '*',
      redirect: '/explore'
    },
    {
      path: '/',
      redirect: '/explore',
      component: Application,
      children: [
        {
          path: '/about',
          name: 'About',
          component: About
        },
        {
          path: '/login', 
          name: 'Login',
          component: Login
        },
        //routes of map
        ...mapRoutes,
        //routes of dashboard
        ...dashRoutes
      ] 
    }
  ]
  
  export default routes
