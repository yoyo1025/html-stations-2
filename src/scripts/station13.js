const { isObjectBindingPattern } = require("typescript");

function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  var textElement = document.getElementById("text");
  if (document.getElementById("check").checked) {
    textElement.style.backgroundColor = "red";
  }else {
    textElement.style.backgroundColor = "";
  }
}
