$(function(){
//サイコロを投げた時の処理

$(`#one`).click(function(){
  location.href = "./index1.html";
  $(`#selectScript`).attr(`src`, `script1.js`);
});
$(`#two`).click(function(){
  location.href = "./index2.html";
  $(`#selectScript`).attr(`src`, `script2.js`);
});
$(`#three`).click(function(){
  location.href = "./index3.html";
  $(`#selectScript`).attr(`src`, `script3.js`);
});
$(`#four`).click(function(){
  location.href = "./index4.html";
  $(`#selectScript`).attr(`src`, `script4.js`);
});
});
