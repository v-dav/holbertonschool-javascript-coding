const input = require('sync-input');

let name, surname, message, punishment, repeats;

name = input("Enter name:");
surname = input("Enter surname:");
message = input("Enter message:");
repeats = Number(input("Enter number of repeats:"));

punishment = `This is ${name} ${surname} and ${message}`;
for (let i = 0; i < repeats; i++) {
    console.log(punishment);
}
