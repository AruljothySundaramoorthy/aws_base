import * as fs from "fs";
import { promises as fsPromises, createWriteStream } from "fs";
import * as path from "path";

const filePath = path.join(__dirname, "..", "sampleasync.txt");

function updateFileSync() {
  console.log("Update file Sync started");

  try {
    fs.appendFileSync(filePath, `Sybc Appended this line. ${new Date()}`);
  } catch (error) {
    console.error("Error updating file Sync:", error);
  }

  console.log("Update file Sync ended\n");
}

async function updateFileAsync() {
  console.log(" Update file Async started");

  try {
    await fsPromises.appendFile(
      filePath,
      `\n Async Update Appended this line. ${new Date()}`
    );
  } catch (error) {
    console.error(" Error updating file Async:", error);
  }

  console.log(" Update file Async ended\n");
}

function updateFileStream(): Promise<void> {
  return new Promise((resolve) => {
    console.log(" Update file Stream started");

    const stream = createWriteStream(filePath, { flags: "a" });
    stream.write(`\n Stream Update Appended this line. ${new Date()}`);
    stream.end(() => {
      console.log(" Update file Stream ended\n");
      resolve();
    });

    stream.on("error", (err) => {
      console.error(" Error updating file Stream:", err);
      resolve();
    });
  });
}

async function runAll() {
  updateFileSync();
  await updateFileAsync();
  await updateFileStream();
}

runAll();
