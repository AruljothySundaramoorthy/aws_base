import * as fs from "fs";
import { promises as fsPromises, createWriteStream } from "fs";
import * as path from "path";

const filePath = path.join(__dirname, "..", "sample.txt");

function createFileSync() {
  console.log("Create file sync started");

  const content = "Created using synchronous write";
  fs.writeFileSync(filePath, content);

  console.log("Create file sync completed");
}

async function createFileAsync() {
  console.log("Create file async started");

  const content = "Created using async/promises write";
  await fsPromises.writeFile(filePath, content);

  console.log("Create file async completed");
}

function createFileStream(): Promise<void> {
  return new Promise((resolve) => {
    console.log("Create file stream started");

    const content = "Created using stream write";
    const stream = createWriteStream(filePath);

    stream.write(content);
    stream.end(() => {
      console.log("Create file stream completed\n");
      resolve();
    });

    console.log("Create file stream end");
  });
}

async function runAll() {
  createFileSync();
  await createFileAsync();
  await createFileStream();
}

runAll();
