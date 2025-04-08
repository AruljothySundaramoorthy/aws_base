import * as fs from "fs";
import * as path from "path";

const filePath = path.join(__dirname, "..", "samplestream.txt");

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
deleteFileStream();
