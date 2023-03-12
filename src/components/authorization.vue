<template>
    <div class="wrapper">
        <div class="authorization_container">
            <div class="form">
                <div class="title">Welcome</div>
                <div class="subtitle">Let's login to your account</div>
                <div class="input_container ic1">
                    <input v-model="login" type="text" class="input" placeholder="Login" />
                </div>
                <div class="input_container ic2">
                    <input v-model="password" type="password" class="input" placeholder="Password" />
                </div>
                <div class="pasword_Helper" @click="helpForAuthorization" >forgot your password ?</div>
                <button @click.prevent="loginVerification" class="submit">login</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        user: {},
    },
    data() {
        return {
            login: "",
            password: "",
            logins: this.$globals.storage.data.users.map((el) => {
                return el.login;
            }),
            passwords: this.$globals.storage.data.users.map((el) => {
                return el.password;
            }),
        };
    },
    methods: {
        loginVerification() {
            if (this.passwords[0] === this.password && this.logins[0] === this.login && this.user.id === 1) {
                this.$globals.storage.complieteAuthFirst();
            }
            if (this.passwords[1] === this.password && this.logins[1] === this.login && this.user.id === 2) {
                this.$globals.storage.complieteAuthSecond();
            } else {
                return { login: "", password: "" };
            }
        },
        helpForAuthorization() {
            alert(`  login: \r  admin1,  admin2
    \n  password: \r  123456,  654321`);
        },
        console() {
            console.log(this.user);
        },
    },
};
</script>

<style>
* {
    box-sizing: border-box;
    font-size: 19px;
}
body {
    padding: 0px;
    margin: 0px;
}

.wrapper {
    height: 840px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: aliceblue;
}
.authorization_container {
    width: 350px;
    height: 500px;
    background-color: #15172b;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding:10px;
}
.form {
    background-color: #15172b;
    border-radius: 20px;
    box-sizing: border-box;
    height: 500px;
    padding: 20px;
    width: 320px;
}
.title {
    color: #eee;
    font-family: sans-serif;
    font-size: 36px;
    font-weight: 600;
}
.subtitle {
    color: #eee;
    font-family: sans-serif;
    font-size: 16px;
    font-weight: 600;
    margin-top: 10px;
}
.input_container {
    height: 50px;
    position: relative;
    width: 100%;
}
.ic1 {
    margin-top: 40px;
}
.ic2 {
    margin-top: 30px;
}
.input {
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

.cut {
    background-color: #15172b;
    border-radius: 10px;
    height: 20px;
    left: 20px;
    position: absolute;
    top: -20px;
    width: 76px;
}

.submit {
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
    width: 100%;
}
.pasword_Helper{
    padding-top: 20px;
    color: #eee;
    padding-left: 10px;
    cursor: pointer;
    font-size: 16px;
}
::-webkit-input-placeholder { /* WebKit browsers */
    color:#eee;
}

</style>
