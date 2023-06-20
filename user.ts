import Address from "./address";

export default class User {
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    address: Address;

    constructor(name: string, username: string, email: string, phone: string, website: string, address: Address) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.phone = phone;
        this.website = website;
        this.address = address;
    }
}