/* eslint-disable no-plusplus */
export default function pageCount(n: number, p: number): number {
  // Write your code here
  const front = Math.floor(p / 2);
  const back = Math.floor(n / 2) - Math.floor(p / 2);
  let result = 0;
  if (front < back) {
    result = front;
  } else {
    result = back;
  }
  return result;
}
