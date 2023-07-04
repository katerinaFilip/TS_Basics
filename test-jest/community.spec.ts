import Address from "../address";
import Community from "../community";
import User from "../user";

describe("Test suite", () => {
    test("Test", async () => {
        const community = new Community();
        await community.initialize();
        const email = 'Shanna@melissa.tv';
        const expectedUser = new User('Ervin Howell', 'Antonette', 'Shanna@melissa.tv', '010-692-6593 x09125', 'anastasia.net',
            new Address('Victor Plains', 'Suite 879', 'Wisokyburgh', '90566-7771'));

        const recievedUser = community.getUserByEmail(email);
        expect(JSON.stringify(expectedUser) === JSON.stringify(recievedUser)).toBeTruthy();
    })
})