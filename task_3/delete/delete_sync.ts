import * as fs from "fs";
import * as path from "path";

const filePath = path.join(__dirname, "..", "samplesync.txt");

function deleteFileSync() {
  console.log("Delete file Sync started");

  try {
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      console.log("File deleted using sync");
    } else {
      console.log("File does not exist Sync");
    }
  } catch (error) {
    console.error("Error deleting file Sync:", error);
  }

  console.log("Delete file Sync ended\n");
}
deleteFileSync();
