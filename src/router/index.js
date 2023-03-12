import { createRouter,createWebHistory } from "vue-router";
import accountUser1 from "../pages/firstPage.vue";
import accountUser2 from "../pages/secondPage.vue";
const router =  createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:"/first",
            name:"page1",
            component:accountUser1,
        },
        {
            path:"/second",
            name:"page2",
            component:accountUser2,
        },
    ],
});

export default router;