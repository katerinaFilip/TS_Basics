import Address from "./address";
import User from "./user";

export default class Community {
    private users: User[];

    constructor() {
        this.users = [];
    }

    async initialize() {
        const data = await fetch('https://jsonplaceholder.typicode.com/users');
        const dataArr = await data.json();
        for (let obj of dataArr) {
            const address = new Address(obj.address.street, obj.address.suite, obj.address.city, obj.address.zipcode);
            const user: User = new User(obj.name, obj.username, obj.email, obj.phone, obj.website, address);
            this.users.push(user);
        }
    }

    get Users() {
        return this.users;
    }

    getUserByEmail(email: string) {
        return this.users.find(user => user.email === email);
    }
}
