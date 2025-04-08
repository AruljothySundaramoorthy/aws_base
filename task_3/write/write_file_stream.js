"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var path = require("path");
var filePath = path.join(__dirname, "..", "samplestream.txt");
function createFileStream() {
    console.log("Create file stream started");
    var content = "Sample 3: Created using stream write";
    var stream = (0, fs_1.createWriteStream)(filePath);
    stream.write(content);
    stream.end(function () {
        console.log("Create file stream Completed");
    });
    console.log("Create file stream end");
}
createFileStream();
