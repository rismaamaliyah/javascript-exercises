const findTheOldest = function(people) {
    let currentYear = new Date().getFullYear();

    return people.reduce((oldest, person) => {
        let age = person.yearOfDeath ? person.yearOfDeath - person.yearOfBirth : currentYear - person.yearOfBirth;
        let oldestAge = oldest.yearOfDeath ? oldest.yearOfDeath - oldest.yearOfBirth : currentYear - oldest.yearOfBirth;
        return age > oldestAge ? person : oldest;
    }, people[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
