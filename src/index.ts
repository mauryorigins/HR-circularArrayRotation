/* eslint-disable no-return-assign */

// Source: https://www.hackerrank.com/challenges/angry-professor/problem?isFullScreen=true
import angryProfessor from './angryProfessor';

function main() {
  console.log('---------- Cool Programing ----------\n');
  const testArr = [0, -1, 2, 1];
  const testS = 2;
  const result = angryProfessor(testS, testArr);
  console.log('Result: ', result);
}

main();
