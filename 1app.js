function checkDriverAge(age) {
    if (Number(age) < 18) {
        return "Sorry, you are too young";
    } else if (Number(age) > 18) {
        return "Powering On. Enjoy the ride!";
    } else if (Number(age) === 18) {
        return "Congratulations on your first year of driving. Enjoy the ride!";
    }
}

console.log(checkDriverAge(92));


let checkDriverAge2 = function() {
    let age = prompt("What is your age?");
    if (Number(age) < 18) {
        alert("Sorry, you are too yound to drive this car. Powering off");
    } else if (Number(age) > 18) {
        alert("Powering On. Enjoy the ride!");
    } else if (Number(age) === 18) {
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    }
}

checkDriverAge2();


