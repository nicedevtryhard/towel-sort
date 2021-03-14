// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix === undefined || matrix === 0) {
        return []
    }
    let newMatrix =[];

    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 == 0) {
            matrix[i].sort((a, b) => a - b);
        } else {
            matrix[i].sort((a, b) => a - b).reverse();
        }
        newMatrix=newMatrix.concat(matrix[i]);
    }
    return newMatrix;
}
