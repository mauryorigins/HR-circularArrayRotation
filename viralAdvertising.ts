/* eslint-disable no-plusplus */
export default function viralAdvertising(n: number): number {
  // Write your code here
  let m = 0;
  let total = 5;
  for (let i = 0; i < n; i++) {
    total = Math.floor(total / 2);
    console.log(total);
    m += total;
    total *= 3;
  }
  console.log(m);
  return 0;
}
