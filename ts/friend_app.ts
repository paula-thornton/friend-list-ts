import {Friend} from "./friend.class";

let friendArray = [];

let friend1: Friend = new Friend(1, "Maria", 51, "marlang@aol.com", true);
let friend2: Friend = new Friend(12, "Becky", 51, "beckyp@aol.com", false);
let friend3: Friend = new Friend(23, "Sheri", 51, "sherio@aol.com", false);
let friend4: Friend = new Friend(34, "Sarah", 46, "ssmore@aol.com", false);
let friend5: Friend = new Friend(45, "Rebecca", 53, "petri_dish@aol.com", false);

friendArray.push(friend1);
friendArray.push(friend2);
friendArray.push(friend3);
friendArray.push(friend4);
friendArray.push(friend5);

for (let f of friendArray){
    console.log(f);
}