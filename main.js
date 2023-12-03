// inputに入力データ全体が入る
function Main(input) {
  // 1行目がinput[0], 2行目がinput[1], …に入る
  input = input.split('\n');
  tmp = input[1].split(' ');
  //文字列から10進数に変換するときはparseIntを使います
  var a = parseInt(input[0], 10);
  var b = parseInt(tmp[0], 10);
  var c = parseInt(tmp[1], 10);
  var s = input[2];
  //出力
  console.log('---atcoder---');
  console.log('%d %s', a + b + c, s);
}

// Main(`1
// 2 3
// test`);

//============================================================================
// console.log('');
// console.log('---ABC085B - Kagami Mochi---');

const KagamiMochi = (input) => {
  const diameter = input.split('\n');

  // diameter.shift();
  // const numDiameter = diameter.map((str) => parseInt(str, 10));

  const N = parseInt(diameter[0]);
  const numDiameter = diameter.slice(1, N + 1).map((str) => parseInt(str, 10));

  const tiers = Array.from(new Set(numDiameter));
  console.log(tiers.length);

  // const answer = new Set(numDiameter).size;
  // console.log(answer);
};

// KagamiMochi(`7
// 50
// 30
// 50
// 100
// 50
// 80
// 30`);

//============================================================================

// console.log('');
// console.log('--- Otoshidama---');

// const Otoshidama = (input) => {
//   const [a, b] = input.split(' ').map((str) => parseInt(str, 10));

//   let answer = [];

//   //10000の枚数
//   for (let i = 0; i <= a; i++) {
//     //5000の枚数
//     for (let j = 0; j <= a - i; j++) {
//       //1000の枚数
//       let k = a - i - j;
//       if (i + j + k === a) {
//         if (10000 * i + 5000 * j + 1000 * k === b) {
//           console.log(i, j, k);
//           return;
//         }
//       }
//     }
//   }
//   console.log(-1, -1, -1);
// };

// Otoshidama(`9 45000`);

//============================================================================

// console.log('');
// console.log('--- 白昼夢---');
//  dream dreamer erase eraser
// const Hakutyumu = (input) => {
//   const deleteStr = ['dreamer', 'dream', 'eraser', 'erase'];
//   let answer = input;

//   while (answer.length) {
//     for (let i = 0; i < deleteStr.length; i++) {
//       const regex = new RegExp(`${deleteStr[i]}$`, 'i');
//       const replaced = answer.replace(regex, '');
//       if (replaced === answer && replaced.length) {
//         if (i === 3) {
//           console.log('NO');
//           return;
//         }
//       } else if (replaced !== answer && replaced.length) {
//         answer = replaced;
//         break;
//       } else if (replaced !== answer && !replaced.length) {
//         console.log('YES');
//         return;
//       }
//     }
//   }
// };

// Hakutyumu(
//   `erasedreameraseeraseeraserdreamerdreameraserdreamereraserdreamereraseerasererasererase`
// );

//============================================================================

// console.log('');
// console.log('---Traveling---');

// const Traveling = (input) => {
//   const N = input.split('\n').shift();
//   const Num = parseInt(N, 10);

//   const coordinateStr = input.split('\n').slice(1);

//   let passed = true;
//   for (let i = 0; i < Num - 1; i++) {
//     const coordinateNum = coordinateStr[i]
//       .split(' ')
//       .map((str) => parseInt(str, 10));

//     const isValidA = coordinateNum[0] <= coordinateNum[1] + coordinateNum[2];
//     const isValidB =
//       coordinateNum[0] % 2 !== (coordinateNum[1] + coordinateNum[2]) % 2;

//     if (!isValidA || !isValidB) {
//       passed = false;
//       break;
//     }
//   }
//   if (passed) {
//     console.log('YES');
//   } else {
//     console.log('NO');
//   }
// };

// Traveling(
//   `2
// 3 0 3
// 6 1 1`
// );
// Traveling(
//   `2
// 5 1 1
// 100 1 1`
// );
// Traveling(
//   `2
// 5 1 1
// 100 1 1`
// );

//============================================================================
// console.log('');
// console.log('---JOb Interview---');

// const JobInterview = (input) => {
//   const N = input.split('\n')[0];
//   const Num = parseInt(N, 10);

//   const evaluate = input.split('\n')[1].split('');

//   // let passed = false;
//   const passed =
//     evaluate.some((e) => e === 'o') && !evaluate.some((e) => e === 'x');

//   if (passed) {
//     console.log('Yes');
//   } else {
//     console.log('No');
//   }
// };

// JobInterview(require('fs').readFileSync('/dev/stdin', 'utf8'));

// JobInterview(
//   `4
// oo--`
// );
// JobInterview(
//   `3
// ---`
// );
// JobInterview(
//   `1
// o`
// );
// JobInterview(
//   `100
// ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooox`
// );

//============================================================================
// console.log('');
// console.log('A - N-choice question');

// const NChoiceQuestion = (input) => {
//   const Num = input
//     .split('\n')[0]
//     .split(' ')
//     .map((n) => parseInt(n, 10))
//     .slice(1, 3);
//   const ChoiceNum = input
//     .split('\n')[1]
//     .split(' ')
//     .map((n) => parseInt(n, 10));

//   const total = Num.reduce((sum, element) => sum + element, 0);

//   const answer = ChoiceNum.indexOf(total) + 1;
//   console.log(answer);
// };

// NChoiceQuestion(require('fs').readFileSync('/dev/stdin', 'utf8'));

// NChoiceQuestion(
//   `3 125 175
// 200 300 400`
// );
// NChoiceQuestion(
//   `1 1 1
// 2`
// );
// NChoiceQuestion(
//   `5 123 456
// 135 246 357 468 579`
// );
//============================================================================
// console.log('');
// console.log('B - Same Map in the RPG World');

// const BRpgWorld = (input) => {
//   const ele = input.split('\n');
//   const [H, W] = ele
//     .shift()
//     .split(' ')
//     .map((n) => parseInt(n, 10));
//   console.log('🚀 ~ file: main.js:247 ~ BRpgWorld ~ ele:', H, W, ele);
// .split(' ')
// .map((n) => parseInt(n, 10));

// const total = Num.reduce((sum, element) => sum + element, 0);

// const answer = ChoiceNum.indexOf(total) + 1;
// console.log(answer);
// };

// BRpgWorld(require('fs').readFileSync('/dev/stdin', 'utf8'));

// BRpgWorld(
//   `4 3
// ..#
// ...
// .#.
// ...
// #..
// ...
// .#.
// ...`
// );
// BRpgWorld(
//   `1 1 1
// 2`
// );
// BRpgWorld(
//   `5 123 456
// 135 246 357 468 579`
// );

//============================================================================
// console.log('');
// console.log('5/27 A - Similar String');

// const SimilarString = (input) => {
//   const ele = input.split('\n');
//   const N = ele.shift();
//   const [first, second] = ele;
//   const firstArr = first.split('');
//   const secondArr = second.split('');

//   const target = ['l', '1', '0', 'o'];

//   const isIncludes = firstArr.some((f) => target.includes(f));

//   if (!isIncludes) {
//     for (let str = 0; str < N; str++) {
//       if (firstArr[str] !== secondArr[str]) {
//         console.log('No');
//         return;
//       } else {
//         if (str === N - 1) {
//           console.log('Yes');
//           return;
//         }
//       }
//     }
//   }
//   if (isIncludes) {
//     for (let str = 0; str < N; str++) {
//       switch (firstArr[str]) {
//         case 'l':
//           if (str === N - 1) {
//             if (['l', '1'].includes(secondArr[str])) {
//               console.log('Yes');
//               return;
//             }
//           } else {
//             if (!['l', '1'].includes(secondArr[str])) {
//               console.log('No');
//               return;
//             }
//             break;
//           }
//         case '1':
//           if (str === N - 1) {
//             if (['l', '1'].includes(secondArr[str])) {
//               console.log('Yes');
//               return;
//             }
//           } else {
//             if (!['l', '1'].includes(secondArr[str])) {
//               console.log('No');
//               return;
//             }
//             break;
//           }
//         case '0':
//           if (str === N - 1) {
//             if (['0', 'o'].includes(secondArr[str])) {
//               console.log('Yes');
//               return;
//             }
//           } else {
//             if (!['0', 'o'].includes(secondArr[str])) {
//               console.log('No');
//               return;
//             }
//             break;
//           }
//         case 'o':
//           if (str === N - 1) {
//             if (['0', 'o'].includes(secondArr[str])) {
//               console.log('Yes');
//               return;
//             }
//           } else {
//             if (!['0', 'o'].includes(secondArr[str])) {
//               console.log('No');
//               return;
//             }
//             break;
//           }
//         default:
//           if (str === N - 1) {
//             if (secondArr[str] === firstArr[str]) {
//               console.log('Yes');
//               return;
//             }
//           } else {
//             if (secondArr[str] !== firstArr[str]) {
//               console.log('No');
//               return;
//             }
//             break;
//           }
//       }
//     }
//   }
// };

// SimilarString(require('fs').readFileSync('/dev/stdin', 'utf8'));

// SimilarString(
//   `3
// l0w
// 1ow`
// );
// SimilarString(
//   `3
// abc
// arc`
// );
// SimilarString(
//   `4
// nok0
// n0ko`
// );

//============================================================================
// console.log('');
// console.log('B - Base 2');

// const Base2 = (input) => {
//   input = input.split('\n');
//   const numbers = input[0].split(' ');
//   console.log('🚀 ~ file: main.js:403 ~ Base2 ~ numbers:', numbers);

//   let total = 0n;
//   for (let i = 0; i < 64; i++) {
//     // console.log(numbers[i]);
//     // console.log((BigInt(numbers[i]) * 2n) ** i);
//     total += BigInt((Number(numbers[i]) * 2) ** i);
//     // if (numbers[i] == '1') total += BigInt(2 ** i);
//   }
//   console.log(total.toString());
// };

// Base2(require('fs').readFileSync('/dev/stdin', 'utf8'));

// Base2(
//   `1 0 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0`
// );
// Base2(
//   `1 0 1 0 1 0 0 0 0 1 0 0 1 1 0 1 1 1 1 0 0 0 1 0 0 1 1 1 1 1 1 0 0 0 0 1 0 1 0 1 0 1 1 1 1 0 0 1 1 0 0 0 0 1 0 1 0 1 0 1 0 0 0 0`
// );

//============================================================================
// const { GoogleAuth } = require('google-auth-library');

// async function getAccessToken() {
//   const auth = new GoogleAuth({
//     keyFile: 'path_to_your_service_account_key.json',
//     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
//   });

//   const client = await auth.getClient();
//   const accessToken = await client.getAccessToken();

//   console.log('Access Token:', accessToken);
// }

// getAccessToken();

//============================================================================
const CountingPasses = (input) => {
  const ele = input.split('\n');
  const [N, K] = ele[0].split(' ').map((n) => parseInt(n, 10));
  const scores = ele[1].split(' ').map((n) => parseInt(n, 10));
  let answer = 0;
  for (let i = 0; i < N; i++) {
    if (scores[i] >= K) {
      answer += 1;
    }
    if (i === N - 1) {
      console.log(answer);
    }
  }
};

CountingPasses(require('fs').readFileSync('/dev/stdin', 'utf8'));

// CountingPasses(
//   `5 60
// 60 20 100 90 40`
// );
// CountingPasses(
//   `4 80
// 79 78 77 76`
// );
// CountingPasses(
//   `10 50
// 31 41 59 26 53 58 97 93 23 84`
// );
