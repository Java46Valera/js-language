function createAddress(city, street) {
        return {city, street}
}
function createPerson(id, name, address) {
        return {id, name, address};
}
const persons = [
        createPerson(123, "Vasya", createAddress("Rehovot","Parshani")),
        createPerson(124, "Olya", createAddress("Rehovot","Pr. Plaut")),
        createPerson(125, "Tolya", createAddress("Tel-Aviv","Dizengoff")),
        createPerson(126, "Sara", createAddress('Lod', 'Sokolov'))
]
function getPersonsCity(persons, city) {
        return persons.filter(p => p.address.city === city);
}
console.log(getPersonsCity(persons, 'Rehovot'));
//task 4
function movePersonsNoCityAtBeginning(persons, city) {
        const personsRes = getPersonsCity(persons, city);
        personsRes.unshift(...persons.filter(p => p.address.city !== city));
        return personsRes;
}
console.log(movePersonsNoCityAtBeginning(persons,  'Rehovot'));