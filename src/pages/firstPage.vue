<template>
    <authorization v-if="!$globals.storage.data.authfirst" :user="user"></authorization>
    <PageChat v-else @logout="logoutFirstPage" :user="user"></PageChat>
</template>
<script>
import authorization from "../components/authorization.vue";
import PageChat from "../components/pageChat.vue";
export default {
    components: {
        authorization,
        PageChat,
    },
    data() {
        return {
            user: this.$globals.storage.data.users.find((el) => {
                return el.id === 1;
            }),
        };
    },
    methods: {
        logoutFirstPage() {
            this.$globals.storage.logOutFirstPage();
            console.log("page 1 "+this.user.id)
        },
    },
};
</script>
<style>
*{
    font-family: sans-serif;
}
</style>
