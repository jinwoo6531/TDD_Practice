//최대값 구하기
// exports.max = numbers => {
//     let result = numbers[0];
//     numbers.forEach(n => {
//         if (n > result) {
//             retusl = n;
//         }
//     });
//     return result;
// }
//리팩토링(최대값)
exports.max = numbers => Math.max(...numbers);



//최소값 구하기
exports.min = numbers => Math.min(...numbers);

//평균값 구하기
exports.avg = numbers =>
  numbers.reduce(
    (acc, current, index, array) => acc + current / array.length,
    0
  );