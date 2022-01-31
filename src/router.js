import { createRouter,createWebHistory} from 'vue-router'; 
import Signin from './pages/Signin.vue';
import Signup from './pages/Signup.vue';
import Comps from './pages/Comps.vue'
import UsersMain from './pages/UsersMain.vue'

const routes= [
    {path: '/login', component: Signin},
    {path: '/signup',component:Signup},
    {path: '/companies', component: Comps},
    {path: '/users', component: UsersMain}
];
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;