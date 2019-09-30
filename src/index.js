const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = [];
    for (let n = 0; n < expr.length; n = n + 10) {
        arr.push(expr.slice(n, n + 10));
    }
    let addArr = arr.map(elem => {
    
        let symbols = "";
        for (let m = 0; m < elem.length; m = m + 2) { 
            if (elem.slice(m, m + 2) == "00") {symbols = symbols + ""}
            if (elem.slice(m, m + 2) == "10") {symbols = symbols + "."}
            if (elem.slice(m, m + 2) == "11") {symbols = symbols + "-"}  
        }
        return symbols;
    });
   
    let result = addArr.map(elem => {
        if (MORSE_TABLE[elem]) {
            return MORSE_TABLE[elem];
        } else {
            return " ";
        }
    });

    return result.join('');
}


module.exports = {
    decode
}

