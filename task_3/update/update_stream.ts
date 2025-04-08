import { createWriteStream } from "fs";
import * as path from "path";

const filePath = path.join(__dirname, "..", "samplestream.txt");

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

updateFileStream();
