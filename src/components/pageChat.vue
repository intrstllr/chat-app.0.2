<template>
    <main class="page">
        <div class="page_container">
            <div class="page_body">
                <div class="btn_LogOut_container">
                    <button class="LogOut" @click.prevent="$emit('logout')" @click="console
                    ">LogOut</button>
                </div>
                <ChatContent :user="user" />
            </div>
        </div>
    </main>
</template>

<script>
import ChatContent from "./chatContent.vue";

export default {
    components: {
        ChatContent,
    },
    props: { user: {} },

    methods:{
        console() {
            console.log(this.user.id)
        }
    }
};
</script>
<style>
.page_body {
    height: 100%;
    max-height: 100%;
}
.page_container {
    height: 100%;
    max-height: 100%;
}
.page {
    height: 100%;
}
.LogOut {
    background-color: #08d;
    border-radius: 12px;
    border: 0;
    box-sizing: border-box;
    color: #eee;
    cursor: pointer;
    font-size: 18px;
    height: 50px;
    margin-top: 38px;
    text-align: center;
    width: 150px;
    margin-right: 50px;
}
.btn_LogOut_container {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
}
</style>
