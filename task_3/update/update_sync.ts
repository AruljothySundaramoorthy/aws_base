import * as fs from "fs";
import * as path from "path";

const filePath = path.join(__dirname, "..", "samplesync.txt");

function updateFileSync() {
  console.log("Update file Sync started");

  try {
    fs.appendFileSync(filePath, `\n Sybc Appended this line. ${new Date()}`);
  } catch (error) {
    console.error("Error updating file Sync:", error);
  }

  console.log("Update file Sync ended\n");
}

updateFileSync();
