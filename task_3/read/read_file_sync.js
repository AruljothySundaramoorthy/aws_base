"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var filePath = path.join(__dirname, "..", "samplesync.txt");
function readFileSyncMethod() {
    console.log("Read file Sync started");
    try {
        var data = fs.readFileSync(filePath, "utf-8");
        console.log("Content Sync:", data);
    }
    catch (error) {
        console.error("Error reading file Sync:", error);
    }
    console.log("Read file Sync ended");
}
readFileSyncMethod();
