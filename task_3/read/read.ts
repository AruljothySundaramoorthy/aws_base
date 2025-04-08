import * as fs from "fs";
import { promises as fsPromises, createReadStream } from "fs";
import * as path from "path";

const filePath = path.join(__dirname, "..", "sampleasync.txt");

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

function readFileStreamMethod(): Promise<void> {
  return new Promise((resolve) => {
    console.log("Read file Stream started");

    const stream = createReadStream(filePath, { encoding: "utf-8" });

    stream.on("data", (chunk) => {
      console.log("Chunk Stream:", chunk);
    });

    stream.on("end", () => {
      console.log("Read file Stream ended");
      resolve();
    });

    stream.on("error", (err) => {
      console.error("Error reading file (Stream):", err);
      resolve();
    });
  });
}

async function runAll() {
  readFileSyncMethod();
  await readFileAsyncMethod();
  await readFileStreamMethod();
}

runAll();
