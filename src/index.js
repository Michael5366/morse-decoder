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
    const result = [];
    let char = '';
    let charCode = '';

    for (let i = 0; i < expr.length; i += 10) {
        const space = expr.slice(i, i + 10);

        if (space === '**********') {

            result.push(' ');

        } else {

            char = '';

            for (let j = 0; j < 10; j += 2) {
                charCode = expr.slice(i + j, i + j + 2);

                if (charCode === '10') {
                    char += '.';
                } else if (charCode === '11') {
                    char += '-';
                }
            }

            result.push(MORSE_TABLE[char]);
        }
    }

    return result.join('');
}

module.exports = {
    decode
}