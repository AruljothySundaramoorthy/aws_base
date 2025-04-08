"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var path = require("path");
var filePath = path.join(__dirname, "..", "samplestream.txt");
function updateFileStream() {
    return new Promise(function (resolve) {
        console.log(" Update file Stream started");
        var stream = (0, fs_1.createWriteStream)(filePath, { flags: "a" });
        stream.write("\n Stream Update Appended this line. ".concat(new Date()));
        stream.end(function () {
            console.log(" Update file Stream ended\n");
            resolve();
        });
        stream.on("error", function (err) {
            console.error(" Error updating file Stream:", err);
            resolve();
        });
    });
}
updateFileStream();
