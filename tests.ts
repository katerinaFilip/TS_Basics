import Address from "./address";
import Community from "./community";
import User from "./user";

export default class Tests {
    static async testValidEmail() {
        const email = 'Shanna@melissa.tv';
        const expectedUser = new User('Ervin Howell', 'Antonette', 'Shanna@melissa.tv', '010-692-6593 x09125', 'anastasia.net',
            new Address('Victor Plains', 'Suite 879', 'Wisokyburgh', '90566-7771'));
        const community = new Community();

        await community.initialize();
        const recievedUser = community.getUserByEmail(email);
        if (JSON.stringify(expectedUser) === JSON.stringify(recievedUser)) {
            return "OK";
        } return "ERROR";
    }

    static async testInvalidEmail() {
        const email = 'Shanna@melissa111.tv';
        const community = new Community();

        await community.initialize();
        const recievedUser = community.getUserByEmail(email);
        if (recievedUser === undefined) {
            return "OK";
        } return "ERROR";
    }
}