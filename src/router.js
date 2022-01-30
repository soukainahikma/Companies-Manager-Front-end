import { createRouter,createWebHistory} from 'vue-router'; 
import Signin from './pages/Signin.vue';
import Signup from './pages/Signup.vue';
import Comps from './pages/Comps.vue'

const routes= [
    {path: '/login', component: Signin},
    {path: '/signup',component:Signup},
    {path: '/companies', component: Comps},
    {path: '/users', component: Comps}
];
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;