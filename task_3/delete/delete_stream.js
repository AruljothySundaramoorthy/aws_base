"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var filePath = path.join(__dirname, "..", "samplestream.txt");
function deleteFileStream() {
    return new Promise(function (resolve) {
        console.log("Delete file Stream-style wrapper started");
        fs.unlink(filePath, function (err) {
            if (err) {
                if (err.code === "ENOENT") {
                    console.log("File does not exist (Stream)");
                }
                else {
                    console.error(" Error deleting file (Stream):", err);
                }
            }
            else {
                console.log("File deleted using stream-style async");
            }
            console.log("Delete file Stream-style wrapper ended\n");
            resolve();
        });
    });
}
deleteFileStream();
