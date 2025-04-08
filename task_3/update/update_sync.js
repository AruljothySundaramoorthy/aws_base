"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var filePath = path.join(__dirname, "..", "samplesync.txt");
function updateFileSync() {
    console.log("Update file Sync started");
    try {
        fs.appendFileSync(filePath, "\n Sybc Appended this line. ".concat(new Date()));
    }
    catch (error) {
        console.error("Error updating file Sync:", error);
    }
    console.log("Update file Sync ended\n");
}
updateFileSync();
