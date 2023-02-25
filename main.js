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
  console.log('%d %s', a + b + c, s);
}

Main(`1
2 3
test`);
