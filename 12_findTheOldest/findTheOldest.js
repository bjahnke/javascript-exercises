function getAge(person){
    let yearOfDeath = !person.yearOfDeath ? (new Date()).getFullYear() : person.yearOfDeath;
    return yearOfDeath - person.yearOfBirth;
}

const findTheOldest = function(poeple) {
    return poeple.reduce(
        (oldest, item) => getAge(oldest) > getAge(item) ? oldest : item
    );
};

// Do not edit below this line
module.exports = findTheOldest;
