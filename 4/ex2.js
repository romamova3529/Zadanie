let name = 'АЛЕКСАНДР';
let surname = 'БЕРЕЗИН';

let NName = name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
let NSurname = surname.substr(0, 1).toUpperCase() + surname.substr(1).toLowerCase();

let PName = NName != name || NSurname != surname ? 'Имя поменялось' : 'Имя не поменялось';

console.log(NName, NSurname, PName);