import { createRouter,createWebHistory} from 'vue-router'; 
import Signin from './pages/Signin.vue';
import Signup from './pages/Signup.vue';
const routes= [
    {path: '/login', component: Signin},
    {path: '/signup',component:Signup}
];
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;