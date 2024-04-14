import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import { createRouter, createWebHistory} from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'
import Producto from './components/Producto.vue'
import HelloWorld from './components/HelloWorld.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { 
            path: '/producto', 
            name: 'Producto',
            component: Producto,
            props: route => ({ id: route.query.id })

        },
        { path: '/', component: HelloWorld}
        
    ]
});

const app = createApp(App)
app.use(router);
app.mount('#app')

//createApp(App).mount('#app')
