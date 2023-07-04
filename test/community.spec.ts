import User from "../user";
import Address from "../address";
import Community from "../community";
import { expect } from "chai";

describe("Community tests", function () {
    let community: Community;

    before("Community initialization", async function () {
        community = new Community();
        await community.initialize();
    });

    it.only("Check user search by existing email", async function () {
        const email = 'Shanna@melissa.tv';
        const expectedUser = new User('Ervin Howell', 'Antonette', 'Shanna@melissa.tv', '010-692-6593 x09125', 'anastasia.net',
            new Address('Victor Plains', 'Suite 879', 'Wisokyburgh', '90566-7771'));

        const recievedUser = community.getUserByEmail(email);
        expect(recievedUser).be.deep.equal(expectedUser);
    });

    it("Check user search by invalid email", async function () {
        const email = 'Shanna@melissa111.tv';
        const recievedUser = community.getUserByEmail(email);
        expect(recievedUser).be.undefined;
    });
});