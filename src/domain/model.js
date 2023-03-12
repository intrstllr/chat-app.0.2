const LOCAL_STORAGE_KEY = "Chat";
class Storage {
    constructor() {
        this.data = {
            users: [
                { id: 1, username: "admin", login: "admin1", password: "123456" },
                { id: 2, userName: "admin2", login: "admin2", password: "654321" },
            ],
            chat: [],
            authfirst: false,
            authsecond: false,
        };
        if (!localStorage.getItem(LOCAL_STORAGE_KEY)) {
            this.updateData();
        } else {
            this.data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        }
    }
    addMessage(msg) {
        this.data.chat.push(msg);
        this.updateData();
    }
    updateData() {
        return localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.data));
    }
    getUserByLogin(login = "") {
        return data.users.find((el) => el.login === login);
    }
    getUserByID(userId) {
        return data.users.find((el) => el.id === userId);
    }
    complieteAuthFirst() {
        this.data.authfirst = true;
        this.updateData();
    }
    complieteAuthSecond() {
        this.data.authsecond = true;
        this.updateData();
    }
    logOutFirstPage() {
        this.data.authfirst = false;
        this.updateData();
    }
    logOutSecondPage() {
        this.data.authsecond = false;
        this.updateData();
    }
}
export default Storage;