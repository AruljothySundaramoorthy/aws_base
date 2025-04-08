"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var filePath = path.join(__dirname, "..", "samplesync.txt");
function createFileSync() {
    console.log("Create file sync started");
    var content = "Sample 1: Created using synchronous write";
    fs.writeFileSync(filePath, content);
    console.log("Create file sync completed");
}
createFileSync();
