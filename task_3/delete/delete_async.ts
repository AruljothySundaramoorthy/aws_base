import { promises as fsPromises } from "fs";
import * as path from "path";

const filePath = path.join(__dirname, "..", "sampleasync.txt");

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
deleteFileAsync();
