/* eslint-disable no-plusplus */
export default function designerPdfViewer(h: number[], word: string): number {
  // Write your code here
  let abc:string[] = [];
  for (let i = 10; i < 36; i++) {
    abc = [...abc, i.toString(36)];
  }
  let exchange:number[] = [];
  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < abc.length; j++) {
      if (word.charAt(i) === abc[j]) {
        exchange = [...exchange, h[j]];
      }
    }
  }
  const hightlighted = Math.max(...exchange) * word.length;
  return hightlighted;
}
