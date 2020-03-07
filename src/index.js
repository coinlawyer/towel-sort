module.exports = function towelSort (matrix) {
  if (!matrix || matrix.join().split(',').every(el => Boolean(+el) === false)) return [];
  for (let i=0; i < matrix.length; i++) {
    if (i%2 !== 0) {
      matrix[i].reverse();
    }
  } 
  return matrix.join().split(',').map(el => +el);
}
