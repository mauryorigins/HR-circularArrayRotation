/* eslint-disable no-plusplus */
export default function saveThePrisoner(n: number, m: number, s: number): number {
  // Write your code here
  const awfulCandy = m % n;
  const things = s - 1;
  const prisioner = awfulCandy + things;
  const sets = prisioner % n;
  return sets || n;
}
