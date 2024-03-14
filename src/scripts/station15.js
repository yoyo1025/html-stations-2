function displayList() {
    document.getElementById('fruits').innerHTML =
    '<ul>' +
        '<li>リンゴ</li>' +
        '<li>イチゴ</li>' +
        '<li>ブドウ</li>' +
    '</ul>';
}

/*
function displayList() {
  // div#fruitsを取得
  var fruitsDiv = document.getElementById('fruits');

  // div#fruitsの内容をクリア
  fruitsDiv.innerHTML = '';

  // 新しいul要素を作成
  var ul = document.createElement('ul');

  // 各果物の名前の配列
  var fruits = ['リンゴ', 'イチゴ', 'ブドウ'];

  // 配列をループしてli要素を作成し、ulに追加
  fruits.forEach(function(fruit) {
    var li = document.createElement('li');
    li.textContent = fruit; // li要素に果物の名前を設定
    ul.appendChild(li); // 作成したli要素をulに追加
  });

  // 作成したul要素をdiv#fruitsに追加
  fruitsDiv.appendChild(ul);
} でも出来る。
*/
