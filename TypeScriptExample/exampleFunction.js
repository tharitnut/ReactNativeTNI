// create array of Person object
var people = [
    { name: "John Lee", age: 30 },
    { name: "Marry Burner", age: 25 },
    { name: "Harry Kill", age: 35 }
];
//function to filter >=30
function filterAdults(persons) {
    return persons.filter(function (person) { return person.age >= 30; });
}
var adult = filterAdults(people);
console.log(adult);
