import * as fs from "fs";
import { promises as fsPromises } from "fs";
import * as path from "path";

const filePath = path.join(__dirname, "..", "sampleasync.txt");

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

async function deleteFileAsync() {
  console.log("Delete file Async started");

  try {
    await fsPromises.unlink(filePath);
    console.log("File deleted using async");
  } catch (error: any) {
    if (error.code === "ENOENT") {
      console.log(" File does not exist Async");
    } else {
      console.error(" Error deleting file Async:", error);
    }
  }

  console.log("Delete file Async ended\n");
}

function deleteFileStream(): Promise<void> {
  return new Promise((resolve) => {
    console.log("Delete file Stream-style wrapper started");

    fs.unlink(filePath, (err) => {
      if (err) {
        if (err.code === "ENOENT") {
          console.log("File does not exist (Stream)");
        } else {
          console.error(" Error deleting file (Stream):", err);
        }
      } else {
        console.log("File deleted using stream-style async");
      }

      console.log("Delete file Stream-style wrapper ended\n");
      resolve();
    });
  });
}

async function runAll() {
  deleteFileSync();
  await deleteFileAsync();
  await deleteFileStream();
}

runAll();
