function getFullName (firstName, lastName, cb){
    return cb(`${firstName} ${lastName}`);
}

function makeUpper(name){
    return name.toUpperCase();
}
let fullName = getFullName('ram', 'bhatta', makeUpper);
console.log(fullName);