import { createReadStream } from "fs";
import * as path from "path";

const filePath = path.join(__dirname, "..", "samplestream.txt");

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

readFileStreamMethod();
