"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
function fetchRandomUser() {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1.default.get("https://randomuser.me/api/")];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data.results[0]];
                case 2:
                    error_1 = _a.sent();
                    throw new Error("Failed to fetch random user");
                case 3: return [2 /*return*/];
            }
        });
    });
}
function fetchMultipleUsers(count) {
    return __awaiter(this, void 0, void 0, function () {
        var promises, i, users;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    promises = [];
                    for (i = 0; i < count; i++) {
                        promises.push(fetchRandomUser());
                    }
                    return [4 /*yield*/, Promise.all(promises)];
                case 1:
                    users = _a.sent();
                    return [2 /*return*/, users];
            }
        });
    });
}
function run() {
    return __awaiter(this, void 0, void 0, function () {
        var users, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fetchMultipleUsers(3)];
                case 1:
                    users = _a.sent();
                    users.forEach(function (user, index) {
                        console.log(" User ".concat(index + 1));
                        console.log("Name: ".concat(user.name.title, " ").concat(user.name.first, " ").concat(user.name.last));
                        console.log("Email: ".concat(user.email));
                        console.log("Location: ".concat(user.location.city, ", ").concat(user.location.state, ", ").concat(user.location.country));
                        console.log("Phone: ".concat(user.phone));
                        console.log("Picture: ".concat(user.picture.thumbnail));
                    });
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    console.error("Error fetching users:", err_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
run();
