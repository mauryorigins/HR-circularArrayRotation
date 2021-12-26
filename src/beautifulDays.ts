/* eslint-disable no-plusplus */
export default function beautifulDays(i: number, j: number, k: number): number {
  // Write your code here
  let beautifulNumbers = 0;
  for (let h = i - 1; h < j; h++) {
    const invert = (h + 1).toString().split('').reverse().join('');
    const dif = (h + 1) - Number(invert);
    const beautyOrNotBeauty = dif % k === 0;
    if (beautyOrNotBeauty) {
      beautifulNumbers += 1;
    }
  }
  return beautifulNumbers;
}
