import * as fs from "fs";
import * as path from "path";
const filePath = path.join(__dirname, "..", "samplesync.txt");

function readFileSyncMethod() {
  console.log("Read file Sync started");

  try {
    const data = fs.readFileSync(filePath, "utf-8");
    console.log("Content Sync:", data);
  } catch (error) {
    console.error("Error reading file Sync:", error);
  }

  console.log("Read file Sync ended");
}

readFileSyncMethod();
