<template>
    <div class="wrapper_message" :class="{ left_display: message.userId !== user.id }">
        <div class="message">
            <div class="message_body">{{ message.body }}</div>
            <!-- <button class="test" @click="console"></button> -->
            <div class="message_time">{{ new Date(message.time).toLocaleTimeString() }}</div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        message: {
            type: Object,
            required: true,
        },
        user: {
            type: Object,
        },
    },
    data() {
        return {};
    },
    methods: {
        console() {
            console.log(this.message.userId);
            console.log(this.user.id);
        },
    },
};
</script>
<style>
.message {
    min-width: 30%;
    width: fit-content;
    background-color: #868ff1;
    padding: 10px;
    border: 1px solid rgba(127, 137, 233, 0.5);
    border-radius: 5px;
    word-break: break-all;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 10px;
}
.message_time {
    user-select: none;
    padding: 5px 0px;
}
.wrapper_message {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
}
.left_display {
    align-items: flex-start;
}
</style>
