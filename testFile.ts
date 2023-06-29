import Community from "./community";
import FileWriter from "./file.writer";

const community = new Community()
community.initialize().then(() => {
    FileWriter.writeData(community.getUsersBySurname('DuBuque'));
});