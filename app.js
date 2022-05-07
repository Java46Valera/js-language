function displayOccurrences(array) {
        const res = getStatObj(array); ;
        Object.entries(res).sort((e1, e2) => {
                const res = e2[1] - e1[1];
                return res === 0 ? e1[0].localeCompare(e2[0]) :  res;
        }).forEach(e => console.log(`${e[0]} -> ${e[1]}`))
}
const ar = ["bc", "lmn", "d", "d", "lmn", "a", "lmn", "a"];
displayOccurrences(ar);
function getStatObj(array) {
       return array.reduce((res,cur) => {
                res[cur] = res[cur] === undefined ? 1 : res[cur] + 1;
                return res;
        }, {})
}
function countBy(array, callbackFn) {
        array = array.map(callbackFn);
        return getStatObj(array);
}
let arr = [6.4, 7.3, 6.5, 6.9];
let statistics = countBy(arr, element => Math.floor(element))
console.log(statistics)
 arr = ['abcd', 'lmnr', 'ab', 'dddd'];
 statistics = countBy(arr, element => element.length)
console.log(statistics)
 arr = [{age: 25, id: 123, name: 'Vasya'},{age: 50, id: 123, name: 'Vasya'},
{age: 25, id: 123, name: 'Vasya'},{age: 70, id: 123, name: 'Vasya'}  ]
statistics = countBy(arr, element => element.age)
console.log(statistics)


