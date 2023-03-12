<template>
    <authorization v-if="!$globals.storage.data.authsecond" :user="user"></authorization>
    <PageChat v-else @logout="logoutFirstPage" :user="user"></PageChat>
</template>
<script>
// import test from "../components/test.vue";
import authorization from "../components/authorization.vue";
import PageChat from "../components/pageChat.vue";
export default {
    components: {
        // test,
        authorization,
        PageChat,
    },
    data() {
        return {
            user: this.$globals.storage.data.users.find((el) => {
                return el.id === 2;
            }),
        };
    },
    methods: {
        logoutFirstPage() {
            this.$globals.storage.logOutSecondPage();
        },
    },
};
</script>
<style>
* {
    font-family: sans-serif;
}
</style>
