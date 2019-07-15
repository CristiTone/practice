// import { observable } from 'mobx';

class UserStore {
    user = {
        firstName: "John",
        lastName: "Doe",
        id: 1
    }
}

const store = new UserStore();
export default store;