$(function(){

//変数
//player1
let countNum1 = 0; //振った回数
let diceNum1; //出目
let diceSum1 = 0; //出目の合計
let diceSumId1 = ("square" + diceSum1) //出目の合計値=コマの位置
let leftVal1 = 100; //残りのマス

//player2
let countNum2 = 0; //振った回数
let diceNum2; //出目
let diceSum2 = 0; //出目の合計
let diceSumId2 = ("square" + diceSum2) //出目の合計値=コマの位置
let leftVal2 = 100; //残りのマス

//player3
let countNum3 = 0; //振った回数
let diceNum3; //出目
let diceSum3 = 0; //出目の合計
let diceSumId3 = ("square" + diceSum3) //出目の合計値=コマの位置
let leftVal3 = 100; //残りのマス

//player4
let countNum4 = 0; //振った回数
let diceNum4; //出目
let diceSum4 = 0; //出目の合計
let diceSumId4 = ("square" + diceSum4) //出目の合計値=コマの位置
let leftVal4 = 100; //残りのマス

let totalCountNum = 0; //ボタンを押した総回数
let diceMax = 6; //サイコロの目の最大値
let diceMin = 1; //サイコロの目の最小値
let diceImg; //サイコロの画像
let forwardMoveNumMax = 4; //進むイベントで動く最大絶対値
let forwardMoveNumMin = 1; //進むイベントで動く最小絶対値
let backwardMoveNumMax = -4; //戻るイベントで動く最大絶対値
let backwardMoveNumMin = -1; //戻るイベントで動く最小絶対値



//初期画面
document.getElementById(diceSumId1).insertAdjacentHTML('afterbegin', '<i id="currentPosition1" class="fas fa-car-side playerIcon1"></i>');
document.getElementById(diceSumId2).insertAdjacentHTML('afterbegin', '<i id="currentPosition2" class="fas fa-car-side playerIcon2"></i>');
document.getElementById(diceSumId3).insertAdjacentHTML('afterbegin', '<i id="currentPosition3" class="fas fa-car-side playerIcon3"></i>');
document.getElementById(diceSumId4).insertAdjacentHTML('afterbegin', '<i id="currentPosition4" class="fas fa-car-side playerIcon4"></i>');

//出目をランダムに決定+表示
function diceDisplay1(){
  diceNum1 =  Math.floor( Math.random()*(diceMax +1 - diceMin)) + diceMin;
  $(`img`).attr(`src`, `${diceNum1}.png`);
  }
function diceDisplay2(){
  diceNum2 =  Math.floor( Math.random()*(diceMax +1 - diceMin)) + diceMin;
  $(`img`).attr(`src`, `${diceNum2}.png`);
  }
function diceDisplay3(){
  diceNum3 =  Math.floor( Math.random()*(diceMax +1 - diceMin)) + diceMin;
  $(`img`).attr(`src`, `${diceNum3}.png`);
  }
function diceDisplay4(){
  diceNum4 =  Math.floor( Math.random()*(diceMax +1 - diceMin)) + diceMin;
  $(`img`).attr(`src`, `${diceNum4}.png`);
  }

//コマを進める動作（プレイヤー1）
function forwardMotion1(){
  leftVal1 = leftVal1 - diceNum1;
  diceSum1 = 100 -leftVal1;

  if(diceSum1 < 100){
    //情報取得＋表示
    countNum1 ++;
    $(`#count`).text(`${countNum1}投目`);
    $(`#leftValue`).text(`ゴールまであと${leftVal1}マス`);

    //コマの動作
    document.getElementById(diceSumId1).innerHTML = document.getElementById(diceSumId1).innerHTML.replace('<i id="currentPosition1" class="fas fa-car-side playerIcon1"></i>','');
    diceSumId1 = ("square" + diceSum1);
    document.getElementById(diceSumId1).insertAdjacentHTML('afterbegin', '<i id="currentPosition1" class="fas fa-car-side playerIcon1"></i>');
    let element = document.getElementById('currentPosition1');
    element.scrollIntoView({behavior: 'smooth',inline: 'center'});
    setTimeout(turnPlayer2, 2000);

  }else{
    //情報の表示（ゴール）
    $(`#count`).text(``);
    $(`#leftValue`).text(`ゴールまであと0マス`);

    //コマの動作(ゴール)
    document.getElementById(diceSumId1).innerHTML = document.getElementById(diceSumId1).innerHTML.replace('<i id="currentPosition1" class="fas fa-car-side playerIcon1"></i>','');
    diceSum1 = 100;
    diceSumId1 = ("square" + diceSum1);
    document.getElementById(diceSumId1).insertAdjacentHTML('afterbegin', '<i id="currentPosition1" class="fas fa-car-side playerIcon1"></i>');
    let element = document.getElementById('currentPosition1');
    element.scrollIntoView({behavior: 'smooth',inline: 'end'});
    $(`#result`).text(`プレイヤー1の勝利！！！`);
    $('#result-modal').fadeIn();
    }
  };

//コマを進める動作(プレイヤー2)
function forwardMotion2(){
  leftVal2 = leftVal2 - diceNum2;
  diceSum2 = 100 -leftVal2;

  if(diceSum2 < 100){
    //情報取得＋表示
    countNum2 ++;
    $(`#count`).text(`${countNum2}投目`);
    $(`#leftValue`).text(`ゴールまであと${leftVal2}マス`);
    //コマの動作
    document.getElementById(diceSumId2).innerHTML = document.getElementById(diceSumId2).innerHTML.replace('<i id="currentPosition2" class="fas fa-car-side playerIcon2"></i>','');
    diceSumId2 = ("square" + diceSum2);
    document.getElementById(diceSumId2).insertAdjacentHTML('afterbegin', '<i id="currentPosition2" class="fas fa-car-side playerIcon2"></i>');
    let element = document.getElementById('currentPosition2');
    element.scrollIntoView({behavior: 'smooth',inline: 'center'});
    setTimeout(turnPlayer3, 2000);

  }else{
    //情報の表示（ゴール）
    $(`#count`).text(``);
    $(`#leftValue`).text(`ゴールまであと0マス`);

    //コマの動作(ゴール)
    document.getElementById(diceSumId2).innerHTML = document.getElementById(diceSumId2).innerHTML.replace('<i id="currentPosition2" class="fas fa-car-side playerIcon2"></i>','');
    diceSum2 = 100;
    diceSumId2 = ("square" + diceSum2);
    document.getElementById(diceSumId2).insertAdjacentHTML('afterbegin', '<i id="currentPosition2" class="fas fa-car-side playerIcon2"></i>');
    let element = document.getElementById('currentPosition2');
    element.scrollIntoView({behavior: 'smooth',inline: 'end'});
    $(`#result`).text(`プレイヤー2の勝利！！！`);
    $('#result-modal').fadeIn();
    }
  };

//コマを進める動作（プレイヤー3）
function forwardMotion3(){
  leftVal3 = leftVal3 - diceNum3;
  diceSum3 = 100 -leftVal3;

  if(diceSum3 < 100){
    //情報取得＋表示
    countNum3 ++;
    $(`#count`).text(`${countNum3}投目`);
    $(`#leftValue`).text(`ゴールまであと${leftVal3}マス`);

    //コマの動作
    document.getElementById(diceSumId3).innerHTML = document.getElementById(diceSumId3).innerHTML.replace('<i id="currentPosition3" class="fas fa-car-side playerIcon3"></i>','');
    diceSumId3 = ("square" + diceSum3);
    document.getElementById(diceSumId3).insertAdjacentHTML('afterbegin', '<i id="currentPosition3" class="fas fa-car-side playerIcon3"></i>');
    let element = document.getElementById('currentPosition3');
    element.scrollIntoView({behavior: 'smooth',inline: 'center'});
    setTimeout(turnPlayer4, 2000);

  }else{
    //情報の表示（ゴール）
    $(`#count`).text(``);
    $(`#leftValue`).text(`ゴールまであと0マス`);

    //コマの動作(ゴール)
    document.getElementById(diceSumId3).innerHTML = document.getElementById(diceSumId3).innerHTML.replace('<i id="currentPosition3" class="fas fa-car-side playerIcon3"></i>','');
    diceSum3 = 100;
    diceSumId3 = ("square" + diceSum3);
    document.getElementById(diceSumId3).insertAdjacentHTML('afterbegin', '<i id="currentPosition3" class="fas fa-car-side playerIcon3"></i>');
    let element = document.getElementById('currentPosition3');
    element.scrollIntoView({behavior: 'smooth',inline: 'end'});
    $(`#result`).text(`プレイヤー3の勝利！！！`);
    $('#result-modal').fadeIn();
    }
  };

//コマを進める動作（プレイヤー4）
function forwardMotion4(){
  leftVal4 = leftVal4 - diceNum4;
  diceSum4 = 100 -leftVal4;

  if(diceSum4 < 100){
    //情報取得＋表示
    countNum4 ++;
    $(`#count`).text(`${countNum4}投目`);
    $(`#leftValue`).text(`ゴールまであと${leftVal4}マス`);

    //コマの動作
    document.getElementById(diceSumId4).innerHTML = document.getElementById(diceSumId4).innerHTML.replace('<i id="currentPosition4" class="fas fa-car-side playerIcon4"></i>','');
    diceSumId4 = ("square" + diceSum4);
    document.getElementById(diceSumId4).insertAdjacentHTML('afterbegin', '<i id="currentPosition4" class="fas fa-car-side playerIcon4"></i>');
    let element = document.getElementById('currentPosition4');
    element.scrollIntoView({behavior: 'smooth',inline: 'center'});
    setTimeout(turnPlayer1, 2000);

  }else{
    //情報の表示（ゴール）
    $(`#count`).text(``);
    $(`#leftValue`).text(`ゴールまであと0マス`);

    //コマの動作(ゴール)
    document.getElementById(diceSumId4).innerHTML = document.getElementById(diceSumId4).innerHTML.replace('<i id="currentPosition4" class="fas fa-car-side playerIcon4"></i>','');
    diceSum4 = 100;
    diceSumId4 = ("square" + diceSum4);
    document.getElementById(diceSumId4).insertAdjacentHTML('afterbegin', '<i id="currentPosition4" class="fas fa-car-side playerIcon4"></i>');
    let element = document.getElementById('currentPosition4');
    element.scrollIntoView({behavior: 'smooth',inline: 'end'});
    $(`#result`).text(`プレイヤー4の勝利！！！`);
    $('#result-modal').fadeIn();
    }
  };

//プレイヤー交代（1→2）
function turnPlayer2(){
  $(`#turn`).text(`プレイヤー2のターン`)
  $(`#count`).text(`${countNum2}投目`);
  $(`#leftValue`).text(`ゴールまであと${leftVal2}マス`);
  $(`.roll-dice`).addClass(`roll-dice-blue`);
  let element = document.getElementById('currentPosition2');
  element.scrollIntoView({behavior: 'smooth',inline: 'center'});
  }

//プレイヤー交代（2→3）
function turnPlayer3(){
  $(`#turn`).text(`プレイヤー3のターン`)
  $(`#count`).text(`${countNum3}投目`);
  $(`#leftValue`).text(`ゴールまであと${leftVal3}マス`);
  $(`.roll-dice`).removeClass(`roll-dice-blue`);
  $(`.roll-dice`).addClass(`roll-dice-green`);
  let element = document.getElementById('currentPosition3');
  element.scrollIntoView({behavior: 'smooth',inline: 'center'});
}

//プレイヤー交代（3→4）
function turnPlayer4(){
  $(`#turn`).text(`プレイヤー4のターン`)
  $(`#count`).text(`${countNum4}投目`);
  $(`#leftValue`).text(`ゴールまであと${leftVal4}マス`);
  $(`.roll-dice`).removeClass(`roll-dice-green`);
  $(`.roll-dice`).addClass(`roll-dice-orange`);
  let element = document.getElementById('currentPosition4');
  element.scrollIntoView({behavior: 'smooth',inline: 'center'});
}

//プレイヤー交代（4→1）
function turnPlayer1(){
  $(`#turn`).text(`プレイヤー1のターン`)
  $(`#count`).text(`${countNum1}投目`);
  $(`#leftValue`).text(`ゴールまであと${leftVal1}マス`);
  $(`.roll-dice`).removeClass(`roll-dice-orange`);
  let element = document.getElementById('currentPosition1');
  element.scrollIntoView({behavior: 'smooth',inline: 'center'});
}

//イベント発生時の動作（プレイヤー1）
function eventOccurrence1(){
  if(document.getElementById(diceSumId1).classList.contains('event')){
    selectEvent1();
  }
};

function selectEvent1(){
  selectNum = Math.floor( Math.random()*2)
  if(selectNum === 1){forwardEvent1()}
  else{backwardEvent1()}
};

//進むイベント
//進むマスをランダムに決定＋表示
function forwardEvent1(){
  forwardMoveNum1 =  Math.floor( Math.random()*(forwardMoveNumMax +1 - forwardMoveNumMin)) + forwardMoveNumMin;
  $(`#eventInfo`).text(`イベント発生！ +${forwardMoveNum1}マス`);
  setTimeout(deleteInfo, 2000);
  setTimeout(forwardEventSquare1, 1200);
}
//イベント時のコマの進む動作
function forwardEventSquare1(){
  leftVal1 = leftVal1 - forwardMoveNum1;
  diceSum1 = 100 -leftVal1;

    //情報取得＋表示
    $(`#leftValue1`).text(`ゴールまであと${leftVal1}マス`);
    //コマの動作
    document.getElementById(diceSumId1).innerHTML = document.getElementById(diceSumId1).innerHTML.replace('<i id="currentPosition1" class="fas fa-car-side playerIcon1"></i>','');
    diceSumId1 = ("square" + diceSum1);
    document.getElementById(diceSumId1).insertAdjacentHTML('afterbegin', '<i id="currentPosition1" class="fas fa-car-side playerIcon1"></i>');
    let element = document.getElementById('currentPosition1');
    element.scrollIntoView({behavior: 'smooth',inline: 'center'}
  );
}

//戻るイベント
//戻るマスをランダムに決定＋表示
function backwardEvent1(){
  backwardMoveNum1 =  Math.floor( Math.random()*(backwardMoveNumMax +1 - backwardMoveNumMin)) + backwardMoveNumMin;
  $(`#eventInfo`).text(`イベント発生！ ${backwardMoveNum1}マス`);
  setTimeout(deleteInfo, 2000);
  setTimeout(backwardEventSquare1, 1200);
}
//イベント時のコマの進む動作
function backwardEventSquare1(){
  leftVal1 = leftVal1 - backwardMoveNum1;
  diceSum1 = 100 -leftVal1;

    //情報取得＋表示
    $(`#leftValue1`).text(`ゴールまであと${leftVal1}マス`);
    //コマの動作
    document.getElementById(diceSumId1).innerHTML = document.getElementById(diceSumId1).innerHTML.replace('<i id="currentPosition1" class="fas fa-car-side playerIcon1"></i>','');
    diceSumId1 = ("square" + diceSum1);
    document.getElementById(diceSumId1).insertAdjacentHTML('afterbegin', '<i id="currentPosition1" class="fas fa-car-side playerIcon1"></i>');
    let element = document.getElementById('currentPosition1');
    element.scrollIntoView({behavior: 'smooth',inline: 'center'}
  );
}

//イベント発生時の動作（プレイヤー2）
function eventOccurrence2(){
  if(document.getElementById(diceSumId2).classList.contains('event')){
    selectEvent2();
  }
};

function selectEvent2(){
  selectNum = Math.floor( Math.random()*2)
  if(selectNum === 1){forwardEvent2()}
  else{backwardEvent2()}
};

//進むイベント
//進むマスをランダムに決定＋表示
function forwardEvent2(){
  forwardMoveNum2 =  Math.floor( Math.random()*(forwardMoveNumMax +1 - forwardMoveNumMin)) + forwardMoveNumMin;
  $(`#eventInfo`).text(`イベント発生！ +${forwardMoveNum2}マス`);
  setTimeout(deleteInfo, 2000);
  setTimeout(forwardEventSquare2, 1200);
}
//イベント時のコマの進む動作
function forwardEventSquare2(){
  leftVal2 = leftVal2 - forwardMoveNum2;
  diceSum2 = 100 -leftVal2;

    //情報取得＋表示
    $(`#leftValue2`).text(`ゴールまであと${leftVal2}マス`);
    //コマの動作
    document.getElementById(diceSumId2).innerHTML = document.getElementById(diceSumId2).innerHTML.replace('<i id="currentPosition2" class="fas fa-car-side playerIcon2"></i>','');
    diceSumId2 = ("square" + diceSum2);
    document.getElementById(diceSumId2).insertAdjacentHTML('afterbegin', '<i id="currentPosition2" class="fas fa-car-side playerIcon2"></i>');
    let element = document.getElementById('currentPosition2');
    element.scrollIntoView({behavior: 'smooth',inline: 'center'}
  );
}

//戻るイベント
//戻るマスをランダムに決定＋表示
function backwardEvent2(){
  backwardMoveNum2 =  Math.floor( Math.random()*(backwardMoveNumMax +1 - backwardMoveNumMin)) + backwardMoveNumMin;
  $(`#eventInfo`).text(`イベント発生！ ${backwardMoveNum2}マス`);
  setTimeout(deleteInfo, 2000);
  setTimeout(backwardEventSquare2, 1200);
}
//イベント時のコマの進む動作
function backwardEventSquare2(){
  leftVal2 = leftVal2 - backwardMoveNum2;
  diceSum2 = 100 -leftVal2;

    //情報取得＋表示
    $(`#leftValue2`).text(`ゴールまであと${leftVal2}マス`);
    //コマの動作
    document.getElementById(diceSumId2).innerHTML = document.getElementById(diceSumId2).innerHTML.replace('<i id="currentPosition2" class="fas fa-car-side playerIcon2"></i>','');
    diceSumId2 = ("square" + diceSum2);
    document.getElementById(diceSumId2).insertAdjacentHTML('afterbegin', '<i id="currentPosition2" class="fas fa-car-side playerIcon2"></i>');
    let element = document.getElementById('currentPosition2');
    element.scrollIntoView({behavior: 'smooth',inline: 'center'}
  );
}

//イベント発生時の動作（プレイヤー3）
function eventOccurrence3(){
  if(document.getElementById(diceSumId3).classList.contains('event')){
    selectEvent3();
  }
};

function selectEvent3(){
  selectNum = Math.floor( Math.random()*2)
  if(selectNum === 1){forwardEvent3()}
  else{backwardEvent3()}
};

//進むイベント
//進むマスをランダムに決定＋表示
function forwardEvent3(){
  forwardMoveNum3 =  Math.floor( Math.random()*(forwardMoveNumMax +1 - forwardMoveNumMin)) + forwardMoveNumMin;
  $(`#eventInfo`).text(`イベント発生！ +${forwardMoveNum3}マス`);
  setTimeout(deleteInfo, 2000);
  setTimeout(forwardEventSquare3, 1200);
}
//イベント時のコマの進む動作
function forwardEventSquare3(){
  leftVal3 = leftVal3 - forwardMoveNum3;
  diceSum3 = 100 -leftVal3;

    //情報取得＋表示
    $(`#leftValue3`).text(`ゴールまであと${leftVal3}マス`);
    //コマの動作
    document.getElementById(diceSumId3).innerHTML = document.getElementById(diceSumId3).innerHTML.replace('<i id="currentPosition3" class="fas fa-car-side playerIcon3"></i>','');
    diceSumId3 = ("square" + diceSum3);
    document.getElementById(diceSumId3).insertAdjacentHTML('afterbegin', '<i id="currentPosition3" class="fas fa-car-side playerIcon3"></i>');
    let element = document.getElementById('currentPosition3');
    element.scrollIntoView({behavior: 'smooth',inline: 'center'}
  );
}

//戻るイベント
//戻るマスをランダムに決定＋表示
function backwardEvent3(){
  backwardMoveNum3 =  Math.floor( Math.random()*(backwardMoveNumMax +1 - backwardMoveNumMin)) + backwardMoveNumMin;
  $(`#eventInfo`).text(`イベント発生！ ${backwardMoveNum3}マス`);
  setTimeout(deleteInfo, 2000);
  setTimeout(backwardEventSquare3, 1200);
}
//イベント時のコマの進む動作
function backwardEventSquare3(){
  leftVal3 = leftVal3 - backwardMoveNum3;
  diceSum3 = 100 -leftVal3;

    //情報取得＋表示
    $(`#leftValue3`).text(`ゴールまであと${leftVal3}マス`);
    //コマの動作
    document.getElementById(diceSumId3).innerHTML = document.getElementById(diceSumId3).innerHTML.replace('<i id="currentPosition3" class="fas fa-car-side playerIcon3"></i>','');
    diceSumId3 = ("square" + diceSum3);
    document.getElementById(diceSumId3).insertAdjacentHTML('afterbegin', '<i id="currentPosition3" class="fas fa-car-side playerIcon3"></i>');
    let element = document.getElementById('currentPosition3');
    element.scrollIntoView({behavior: 'smooth',inline: 'center'}
  );
}

//イベント発生時の動作（プレイヤー4）
function eventOccurrence4(){
  if(document.getElementById(diceSumId4).classList.contains('event')){
    selectEvent4();
  }
};

function selectEvent4(){
  selectNum = Math.floor( Math.random()*2)
  if(selectNum === 1){forwardEvent4()}
  else{backwardEvent4()}
};

//進むイベント
//進むマスをランダムに決定＋表示
function forwardEvent4(){
  forwardMoveNum4 =  Math.floor( Math.random()*(forwardMoveNumMax +1 - forwardMoveNumMin)) + forwardMoveNumMin;
  $(`#eventInfo`).text(`イベント発生！ +${forwardMoveNum4}マス`);
  setTimeout(deleteInfo, 2000);
  setTimeout(forwardEventSquare4, 1200);
}
//イベント時のコマの進む動作
function forwardEventSquare4(){
  leftVal4 = leftVal4 - forwardMoveNum4;
  diceSum4 = 100 -leftVal4;

    //情報取得＋表示
    $(`#leftValue4`).text(`ゴールまであと${leftVal4}マス`);
    //コマの動作
    document.getElementById(diceSumId4).innerHTML = document.getElementById(diceSumId4).innerHTML.replace('<i id="currentPosition4" class="fas fa-car-side playerIcon4"></i>','');
    diceSumId4 = ("square" + diceSum4);
    document.getElementById(diceSumId4).insertAdjacentHTML('afterbegin', '<i id="currentPosition4" class="fas fa-car-side playerIcon4"></i>');
    let element = document.getElementById('currentPosition4');
    element.scrollIntoView({behavior: 'smooth',inline: 'center'}
  );
}

//戻るイベント
//戻るマスをランダムに決定＋表示
function backwardEvent4(){
  backwardMoveNum4 =  Math.floor( Math.random()*(backwardMoveNumMax +1 - backwardMoveNumMin)) + backwardMoveNumMin;
  $(`#eventInfo`).text(`イベント発生！ ${backwardMoveNum4}マス`);
  setTimeout(deleteInfo, 2000);
  setTimeout(backwardEventSquare4, 1200);
}
//イベント時のコマの進む動作
function backwardEventSquare4(){
  leftVal4 = leftVal4 - backwardMoveNum4;
  diceSum4 = 100 -leftVal4;

    //情報取得＋表示
    $(`#leftValue4`).text(`ゴールまであと${leftVal4}マス`);
    //コマの動作
    document.getElementById(diceSumId4).innerHTML = document.getElementById(diceSumId4).innerHTML.replace('<i id="currentPosition4" class="fas fa-car-side playerIcon4"></i>','');
    diceSumId4 = ("square" + diceSum4);
    document.getElementById(diceSumId4).insertAdjacentHTML('afterbegin', '<i id="currentPosition4" class="fas fa-car-side playerIcon4"></i>');
    let element = document.getElementById('currentPosition4');
    element.scrollIntoView({behavior: 'smooth',inline: 'center'}
  );
}

//イベント発生の情報を消去
function deleteInfo(){
  $(`#eventInfo`).text(``);
}

//サイコロを投げた時の処理
$(`#rollDice`).click(function(){
  totalCountNum ++;
  if(totalCountNum % 4 === 1){
    diceDisplay1();
    forwardMotion1();
    eventOccurrence1();
  }else if(totalCountNum % 4 === 2){
    diceDisplay2();
    forwardMotion2();
    eventOccurrence2();
  }else if(totalCountNum % 4 === 3){
    diceDisplay3();
    forwardMotion3();
    eventOccurrence3();
  }else{
    diceDisplay4();
    forwardMotion4();
    eventOccurrence4();
  }
});
});
