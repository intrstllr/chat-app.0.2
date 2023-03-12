<template>
    <div class="container">
        <div class="message_container">
            <MessageInfo v-for="mess in chat" :message="mess" :key="mess.id" :user="user" />
        </div>
        <form>
            <input class="input_message" placeholder="write message" type="text" v-model="message" />
            <button class="btn_send" @click.prevent="sendMessage">send</button>
        </form>
    </div>
</template>
<script>
import MessageInfo from "./messageInfo.vue";
export default {
    components: {
        MessageInfo,
    },
    props: {
        user: {
            type: Object,
        },
    },

    data() {
        return {
            message: "",
            chat: this.$globals.storage.data.chat,
        };
    },
    methods: {
        sendMessage() {
            if (this.message != "") {
                let mess = {
                    id: Date.now(),
                    body: this.message,
                    time: Date.now(),
                    userId: this.user.id,
                };
                this.$globals.storage.addMessage(mess);
            }
            this.message = "";
        },
    },
};
</script>
<style>
.message_container {
    margin: auto;
    height: 675px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    border-bottom: 2px solid black;
    align-items: flex-end;
    overflow-y: auto;
    max-width: 800px;
}
form {
    padding: 10px 0px;
    display: flex;
    flex-direction: row;
    max-width: 800px;
    height: 65px;
}
.input_message {
    flex: 1 1 auto;
    padding-left: 5px;
    background-color: #303245;
    border-radius: 12px;
    border: 0;
    box-sizing: border-box;
    color: #eeeeee;
    font-size: 18px;
    height: 100%;
    outline: 0;
    padding: 4px 20px 0;
    width: 100%;
}
.btn_send {
    background-color: #08d;
    border-radius: 12px;
    border: 0;
    box-sizing: border-box;
    color: #eee;
    cursor: pointer;
    font-size: 18px;
    height: 45px;
    text-align: center;
    width: 25%;
}
.container {
    max-width: 40%;
    margin: auto;
}

.message_container::-webkit-scrollbar {
    width: 10px;
    background-color: #f9f9fd;
}

.message_container::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #4f73eb;
}

.message_container::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background-color: #f9f9fd;
}
</style>
