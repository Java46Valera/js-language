const ar = [2, 100, 9, 80];
ar[ar.length] = 200;
console.log(ar);
ar.push(300, 25);
console.log(ar);
const ar1 = [-8, 30, -57];
ar.push(...ar1);
console.log(ar); 
const ar2 = [27, 35];
ar.unshift(...ar2);
console.log(ar);
ar.splice(2,0,1,2);
console.log(ar);
let el = ar.pop(); 
el = ar.shift();
console.log(el, ar);
ar.splice(3, 5); 
console.log(ar);
const matrix1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [3, 4, 5]];
const matrix2 = [[10, 20], [50, -5], [34, 28]]
function displayMatrix(matrix) {
     for (let i = 0; i < matrix.length; i++) {
             let row = '';
             for (let j = 0; j < matrix[i].length; j++) {
                     row = row + matrix[i][j] + '   '
             }
             console.log(row);
     }  
}
displayMatrix(matrix2);
const arHw = [13, 28, 4, 15, 25, -10, 40, 17,27];
const comparator = (n1, n2) => {
        let res = n1 % 2 - n2 % 2;
        if (res == 0) {
                res = n1 % 2 == 0 ? n1 - n2 : n2 - n1; 
        }
        return res;
}
arHw.sort(comparator);
console.log(arHw);



function matrixTransp(matrix) {
        const res = [];

        for (let i = 0; i < matrix[0].length; i++) {
                res.push([]);
                for (let j = 0; j < matrix.length; j++) {
                        res[i].push(matrix[j][i]);
                }
        }
        return res;
}
displayMatrix(matrixTransp([[1,2], [3,4], [5,6]]));
