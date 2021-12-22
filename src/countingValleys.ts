/* eslint-disable no-plusplus */
export default function countingValleys(steps: number, path: string): number {
  // Write your code here
  let valley = 0;
  let bellow = 0;
  for (let i = 0; i < steps; i++) {
    if (path.charAt(i) === 'U') {
      valley += 1;
    } else {
      valley -= 1;
    }
    if (path.charAt(i) === 'U' && valley === 0) {
      bellow += 1;
    }
  }
  return bellow;
}
