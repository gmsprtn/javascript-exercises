const findTheOldest = function(people) {
    people = Array(...people);
    people.sort((a, b) => calcAge(a) - calcAge(b));
    return people[people.length - 1];
};

function calcAge(person) {
    const birth = person.yearOfBirth;
    const death = person.yearOfDeath;
    if (death === undefined) {
        return new Date().getFullYear() - birth;
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
