const transpose = require('./transpose')

const wordSearch = (letters, word) => { 

    if (letters.length === 0) {
        return false;
    }
    
    const horizontalJoin = letters.map(row => row.join(''));

    for (const line of horizontalJoin) {
        if (line.split(word)[0] !== line) return true;
    }

    const transposedMatrix = transpose(letters);
    const verticalJoin = transposedMatrix.map(row => row.join(''));
    
    for (const line of verticalJoin) {
        if (line.split(word)[0] !== line) return true;
    }

    console.log(verticalJoin);

    return false;
};

module.exports = wordSearch;