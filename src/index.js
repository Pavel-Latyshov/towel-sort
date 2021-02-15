
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = []
  if (!matrix) {
    return arr
  }
  for (i = 0; i < matrix.length; i++) {
    if (i == 0) {
      for (j = 0; j < matrix[i].length; j++) {
        arr.push(matrix[i][j])
        console.log(arr);
      }
    } else if (i % 2) {
      let rev = matrix[i].reverse()
      for (j = 0; j < matrix[i].length; j++) {
        arr.push(rev[j])
        console.log(arr);
      }
    } else if (!(i % 2)) {
      for (j = 0; j < matrix[i].length; j++) {
        arr.push(matrix[i][j])
      }
    }
  
  }
  return arr
}
