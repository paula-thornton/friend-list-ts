"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Friend = /** @class */ (function () {
    // can only define constructor once, BUT can set default values for the class 
    // variables
    function Friend(id, fullName, age, email, bestFriend) {
        if (id === void 0) { id = 0; }
        if (fullName === void 0) { fullName = ""; }
        if (age === void 0) { age = 0; }
        if (email === void 0) { email = ""; }
        if (bestFriend === void 0) { bestFriend = true; }
        this.id = id;
        this.fullName = fullName;
        this.age = age;
        this.email = email;
        this.bestFriend = bestFriend;
    }
    return Friend;
}());
exports.Friend = Friend;
