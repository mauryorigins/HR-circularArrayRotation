/* eslint-disable no-plusplus */
export default function circularArrayRotation(a: number[], k: number, queries: number[]): number[] {
  // Write your code here
  for (let h = 0; h < k; h++) {
    const last = a.pop();
    a.unshift(Number(last));
  }
  const q = [];
  for (let l = 0; l < queries.length; l++) {
    q[l] = a[queries[l]];
  }
  return q;
}
