"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var path = require("path");
var filePath = path.join(__dirname, "..", "samplestream.txt");
function readFileStreamMethod() {
    return new Promise(function (resolve) {
        console.log("Read file Stream started");
        var stream = (0, fs_1.createReadStream)(filePath, { encoding: "utf-8" });
        stream.on("data", function (chunk) {
            console.log("Chunk Stream:", chunk);
        });
        stream.on("end", function () {
            console.log("Read file Stream ended");
            resolve();
        });
        stream.on("error", function (err) {
            console.error("Error reading file (Stream):", err);
            resolve();
        });
    });
}
readFileStreamMethod();
