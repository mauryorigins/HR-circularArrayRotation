/* eslint-disable no-return-assign */

// Source: https://www.hackerrank.com/challenges/designer-pdf-viewer/problem?isFullScreen=true
import designerPdfViewer from './designerPdfViewer';

function main() {
  console.log('---------- Cool Programing ----------\n');
  const testAbc = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7];
  const testWord = 'zaba';
  const result = designerPdfViewer(testAbc, testWord);
  console.log('Result: ', result);
}

main();
