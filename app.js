function getRandomNumber(min, max) {
if (min > max) {
        [max, min] = [min, max];
}
return   Math.round( min + Math.random() * (max - min));
}
for (let i = 0; i < 10; i++) {
        console.log(getRandomNumber(13,10))
}

function concatinate(prefix) {
        return (...args) => [prefix, ...args].join('')
}
const concatApp = concatinate('App - ');
const concatMessage = concatApp('Test status: Done', "  good", ' very');
console.log(concatMessage)