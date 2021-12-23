export default function hurdleRace(k: number, height: number[]): number {
  // Write your code here
  const max = Math.max(...height);
  let res = 0;
  if (max - k >= 0) {
    res = max - k;
  }
  return res;
}
