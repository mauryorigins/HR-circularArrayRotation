/* eslint-disable no-return-assign */

// Source: https://www.hackerrank.com/challenges/circular-array-rotation/problem?isFullScreen=true
import circularArrayRotation from './circularArrayRotation';

function main() {
  console.log('---------- Cool Programing ----------\n');
  const testArray = [3, 4, 5];
  const rotation = 2;
  const queries = [1, 2];
  const result = circularArrayRotation(testArray, rotation, queries);
  console.log('Result: ', result);
}

main();
