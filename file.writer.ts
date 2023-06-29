import User from "./user";
import * as fs from "fs";

export default class FileWriter {
    static async writeData(users: User[]) {
        fs.writeFile('users.json', JSON.stringify(users), () => {
            console.log("Data was successfully saved!");
        });
    }
}