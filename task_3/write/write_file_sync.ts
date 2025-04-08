import * as fs from "fs";
import * as path from "path";

const filePath = path.join(__dirname, "..", "samplesync.txt");

function createFileSync() {
  console.log("Create file sync started");

  const content = "Created using synchronous write";
  fs.writeFileSync(filePath, content);
  console.log("Create file sync completed");
}

createFileSync();
