import { promises as fsPromises } from "fs";
import * as path from "path";

const filePath = path.join(__dirname, "..", "sampleasync.txt");
async function createFileAsync() {
  console.log("Create file async started");

  const content = "Created using async/promises write";
  await fsPromises.writeFile(filePath, content);
  console.log("Create file async Completed");
}

createFileAsync();
