"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var friend_class_1 = require("./friend.class");
var friendArray = [];
var friend1 = new friend_class_1.Friend(1, "Maria", 51, "marlang@aol.com", true);
var friend2 = new friend_class_1.Friend(12, "Becky", 51, "beckyp@aol.com", false);
var friend3 = new friend_class_1.Friend(23, "Sheri", 51, "sherio@aol.com", false);
var friend4 = new friend_class_1.Friend(34, "Sarah", 46, "ssmore@aol.com", false);
var friend5 = new friend_class_1.Friend(45, "Rebecca", 53, "petri_dish@aol.com", false);
friendArray.push(friend1);
friendArray.push(friend2);
friendArray.push(friend3);
friendArray.push(friend4);
friendArray.push(friend5);
for (var _i = 0, friendArray_1 = friendArray; _i < friendArray_1.length; _i++) {
    var f = friendArray_1[_i];
    console.log(f);
}
