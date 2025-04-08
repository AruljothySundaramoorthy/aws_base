import { promises as fsPromises } from "fs";
import * as path from "path";

const filePath = path.join(__dirname, "..", "sampleasync.txt");

async function readFileAsyncMethod() {
  console.log("Read file Async started");

  try {
    const data = await fsPromises.readFile(filePath, "utf-8");
    console.log("Content Async:", data);
  } catch (error) {
    console.error("Error reading file Async:", error);
  }

  console.log("Read file Async ended");
}
readFileAsyncMethod();
