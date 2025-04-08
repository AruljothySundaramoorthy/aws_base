import { promises as fsPromises } from "fs";
import * as path from "path";

const filePath = path.join(__dirname, "..", "sampleasync.txt");

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
updateFileAsync();
