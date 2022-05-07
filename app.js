const str1 = "abc";
const str2 = "abc";
function stringProcessing(str) {
        const strP = "" + str;
       console.log(`"${str}"[4] is ${str[4]}`);
       console.log(`length of "${str}" is ${strP.length}`);
       console.log(`"${str}" includes "abc" is ${strP.includes("abc")}`);
       console.log(`substring of "${str}" beginning from index 2 to index 5 is ${strP.substring(2, 5)}`);
       console.log(`index of substring "ll" in the "${str}" is ${strP.indexOf("ll")}; last index of substring "ll" in the "${str}" is  ${strP.lastIndexOf("ll")}`)

}
function encode (num, codingString) {
        let flRepeated = false;
        for (let i = 0; i < codingString.length; i++) {
                if(codingString.lastIndexOf(codingString[i]) != i) {
                        console.log(`coding string has repeated symbol ${codingString[i]}`)
                        flRepeated = true;
                }
        }
        if (!flRepeated) {
            let res = "" ;
            const base = codingString.length;
            do {
                    const digit = Math.trunc(num % base);
                    const digitSymb = codingString[digit];
                    res = digitSymb + res;
                    num = Math.trunc(num / base);

            } while(num != 0); 
            return res;  
        }
}
console.log(`encode(5, '.-') = ${encode(5, '.-')}`);
console.log(`encode(5, '..-') = ${encode(5, '..-')}`);
console.log(`encode(555, '&*()%$#@!+') = ${encode(555, '&*()%$#@!+')}`);