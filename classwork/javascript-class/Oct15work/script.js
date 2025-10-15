//displaying username 

const user = {
    first_name: "bAT",
    last_name: "bOlD",
};

function cleanUp(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}
function profileDisplay(object) {
    return user.last_name[0].toUpperCase() + ". " + cleanUp(user.first_name);
};
console.log(profileDisplay(user));

const gamertag = {
    string: "jOyfulfish",
    tag: 5409,
}
function setUsername(gamertag) {
    return gamertag.toUpperCase() + gamertag.tag;
}
console.log(setUsername(gamertag));