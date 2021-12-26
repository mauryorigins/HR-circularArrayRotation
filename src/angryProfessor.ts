export default function angryProfessor(k: number, a: number[]): string {
  // Write your code here
  let onTime = 0;
  let classCancel = '';
  a.forEach((students) => {
    if (students < 1) {
      onTime += 1;
    }
  });
  if (onTime >= k) {
    classCancel = 'NO';
  } else {
    classCancel = 'YES';
  }
  return classCancel;
}
