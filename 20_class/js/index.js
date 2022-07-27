// imports the class
import AvatarFunc from "./funcAvatar.js";
import Avatar from "./classAvatar.js";

const avatar1 = new AvatarFunc(100, 100, 100);
console.log(avatar1.getAtributes());

avatar1.forward();
avatar1.forward();

console.log(avatar1.getAtributes());


console.log('----------------------------------------------');

const avatar2 = new Avatar(100, 100, 100);
console.log(avatar2);

avatar2.right = 0;
avatar2.right = 0;
avatar2.x = 200;
avatar2.y = 200;

console.log(avatar2);















