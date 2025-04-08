import { createWriteStream } from "fs";
import * as path from "path";

const filePath = path.join(__dirname, "..", "samplestream.txt");

function createFileStream() {
  console.log("Create file stream started");

  const content = "Created using stream write";
  const stream = createWriteStream(filePath);
  stream.write(content);
  stream.end(() => {
    console.log("Create file stream Completed");
  });
  console.log("Create file stream end");
}

createFileStream();
