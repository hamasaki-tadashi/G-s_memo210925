'use strict';

// トップのフェードインの仕様
$("#fadein_test").hide().fadeIn(1000)
$("#FDI_p").hide().fadeIn(1200)

$("#FDI_p").on("click", function () {
    $("#fadein_test").hide();
    $("#FDI_p").hide();
});


// レベルアップのボタン
// 出来たボタンを押した回数をカウント
// ローカルで、クリック数を保存しておく
if (!localStorage.getItem('level_memo')) {
    localStorage.setItem('level_memo', 0);
}
let level = 0;

$('#Level_num').text(localStorage.getItem('level_memo'));

$("#Done").on('click', function () {
    level = parseInt(localStorage.getItem('level_memo'));
    level++;
    localStorage.setItem('level_memo', level);
    $('#Level_num').text(level);
});


// レベルごとに職業変わる、リロードした時の表示
// レベル0 
if (localStorage.getItem('level_memo') == "0") {
    $("#JOB").html('<img src="img/JOB/J-0立っている人.png" alt="立っている人">');
    $("#JOB_name").text("一般人");
    $("#Done").on("click", function () {
        $("#JOB").html('<img src="img/JOB/J-1白帯.png" alt="白帯">');
        $("#JOB_name").text("白帯");
        alert("白帯にレベルアップ！")
    });
}
// レベル1 
else if (localStorage.getItem('level_memo') == "1") {
    $("#JOB").html('<img src="img/JOB/J-1白帯.png" alt="白帯">');
    $("#JOB_name").text("白帯");
    $("#Done").on("click", function () {
        $("#JOB").html('<img src="img/JOB/J-2黒帯.png" alt="黒帯">');
        $("#JOB_name").text("黒帯");
        alert("黒帯にレベルアップ！")
    });
}
// レベル2 
else if (localStorage.getItem('level_memo') == "2") {
    $("#JOB").html('<img src="img/JOB/J-2黒帯.png" alt="黒帯">');
    $("#JOB_name").text("黒帯");
    $("#Done").on("click", function () {
        $("#JOB").html('<img src="img/JOB/J-3瓦割り.png" alt="達人">');
        $("#JOB_name").text("達人");
        alert("達人にレベルアップ！")
    });
}
// レベル3
else if (localStorage.getItem('level_memo') == "3") {
    $("#JOB").html('<img src="img/JOB/J-3瓦割り.png" alt="達人">');
    $("#JOB_name").text("達人");
    $("#Done").on("click", function () {
        $("#JOB").html('<img src="img/JOB/J-4波動拳.png" alt="超人">');
        $("#JOB_name").text("超人");
        alert("超人にレベルアップ！")
    });
}
// レベル4 
else if (localStorage.getItem('level_memo') == "4") {
    $("#JOB").html('<img src="img/JOB/J-4波動拳.png" alt="超人">');
    $("#JOB_name").text("超人");
    $("#Done").on("click", function () {
        $("#JOB").html('<img src="img/JOB/J-5バーサーカ~.png" alt="バーサーカ">');
        $("#JOB_name").text("バーサーカ");
        alert("バーサーカにレベルアップ！")
    });
}
// レベル5 
else if (localStorage.getItem('level_memo') == "5") {
    $("#JOB").html('<img src="img/JOB/J-5バーサーカ~.png" alt="バーサーカ">');
    $("#JOB_name").text("バーサーカ");
    $("#Done").on("click", function () {
        $("#JOB").html('<img src="img/JOB/J-6魔法使い.png" alt="魔法使い">');
        $("#JOB_name").text("魔法使い");
        alert("魔法使いにレベルアップ！")
    });
}
// レベル6
else if (localStorage.getItem('level_memo') == "6") {
    $("#JOB").html('<img src="img/JOB/J-6魔法使い.png" alt="魔法使い">');
    $("#JOB_name").text("魔法使い");
    $("#Done").on("click", function () {
        $("#JOB").html('<img src="img/JOB/J-7炎の魔法使い.png" alt="炎の魔法使い">');
        $("#JOB_name").text("炎の魔法使い");
        alert("炎の魔法使いにレベルアップ！")
    });
}
// レベル7
else if (localStorage.getItem('level_memo') == "7") {
    $("#JOB").html('<img src="img/JOB/J-7炎の魔法使い.png" alt="炎の魔法使い">');
    $("#JOB_name").text("炎の魔法使い");
    $("#Done").on("click", function () {
        $("#JOB").html('<img src="img/JOB/J-8ネクロマンサー.png" alt="ネクロマンサー">');
        $("#JOB_name").text("ネクロマンサー");
        alert("ネクロマンサーにレベルアップ！")
    });
}
// レベル8
else if (localStorage.getItem('level_memo') == "8") {
    $("#JOB").html('<img src="img/JOB/J-8ネクロマンサー.png" alt="ネクロマンサー">');
    $("#JOB_name").text("ネクロマンサー");
    $("#Done").on("click", function () {
        $("#JOB").html('<img src="img/JOB/J-9勇者.png" alt="J-9勇者">');
        $("#JOB_name").text("勇者");
        alert("勇者にレベルアップ！")
    });
}
// レベル9
else if (localStorage.getItem('level_memo') == "9") {
    $("#JOB").html('<img src="img/JOB/J-9勇者.png" alt="J-9勇者">');
    $("#JOB_name").text("勇者");
    $("#Done").on("click", function () {
        $("#JOB").html('<img src="img/JOB/J-10竜騎士.png" alt="竜騎士">');
        $("#JOB_name").text("竜騎士");
        alert("竜騎士にレベルアップ！")
    });
}
// レベル10
else if (localStorage.getItem('level_memo') >= "10") {
    $("#JOB").html('<img src="img/JOB/J-10竜騎士.png" alt="竜騎士">');
    $("#JOB_name").text("竜騎士");
}




// 出来なかったボタンを押したらレベル0になる
$("#NOTdo").on('click', function () {
    level = 0;
    localStorage.setItem('level_memo', level);
    $('#Level_num').text(level);
});

// 出来なかったボタンを押した回数をカウント
// ローカルで、クリック数を保存しておく
let restart = 0;
if (!localStorage.getItem('reset_memo')) {
    localStorage.setItem('reset_memo', 0);
}

$("#NOTdo").on('click', function () {
    restart = parseInt(localStorage.getItem('reset_memo'));
    restart++;
    localStorage.setItem('reset_memo', restart);
});

// 出来なかった１回目
if (localStorage.getItem('reset_memo') == "0") {
    $("#NOTdo").on("click", function () {
        $("#JOB").html('<img src="img/JOB/J-0-1無気力.png" alt="無気力">');
        $("#JOB_name").text("ニート");
        alert("やり直し！");
    });
}
// 出来なかった１回目、リロード表示
if (localStorage.getItem('reset_memo') == "1" &&
    localStorage.getItem('level_memo') == "0") {
    $("#JOB").html('<img src="img/JOB/J-0-1無気力.png" alt="ニート">');
    $("#JOB_name").text("ニート");
}

// 出来なかった2回目
if (localStorage.getItem('reset_memo') == "1") {
    $("#NOTdo").on("click", function () {
        $("#JOB").html('<img src="img/JOB/J-0-2家出少年.png" alt="放浪者">');
        $("#JOB_name").text("放浪者");
        alert("ヤバいよ！");
    });
}
// 出来なかった2回目、リロード表示
if (localStorage.getItem('reset_memo') == "2" &&
    localStorage.getItem('level_memo') == "0") {
    $("#JOB").html('<img src="img/JOB/J-0-2家出少年.png" alt="放浪者">');
    $("#JOB_name").text("放浪者");
}

// 出来なかった3回目
if (localStorage.getItem('reset_memo') >= "2") {
    $("#NOTdo").on("click", function () {
        $("#JOB").html('<img src="img/JOB/J-0-3絶望.png" alt="見捨てられた人">');
        $("#JOB_name").text("見捨てられた人");
        alert("仲間から見放された‥");
        // 仲間を逃す
        $("#PET_01").html('');
        $("#PET_02").html('');
        $("#PET_03").html('');
        $("#PET_04").html('');
        $("#PET_05").html('');
        $("#PET_06").html('');
        $("#PET_07").html('');
        $("#PET_08").html('');
        $("#PET_09").html('');
        $("#PET_10").html('');
        $("#PET_11").html('');
        $("#PET_12").html('');
        $("#PET_13").html('');
        $("#PET_14").html('');
        $("#PET_15").html('');
        // 仲間を逃す、リロード時
        localStorage.setItem('JA01_memo', 0);
        localStorage.setItem('JA02_memo', 0);
        localStorage.setItem('JA03_memo', 0);
        localStorage.setItem('JA04_memo', 0);
        localStorage.setItem('JA05_memo', 0);
        localStorage.setItem('JA06_memo', 0);
        localStorage.setItem('JA07_memo', 0);
        localStorage.setItem('JA08_memo', 0);
        localStorage.setItem('JA09_memo', 0);
        localStorage.setItem('JA10_memo', 0);
        localStorage.setItem('JA11_memo', 0);
        localStorage.setItem('JA12_memo', 0);
        localStorage.setItem('JA13_memo', 0);
        localStorage.setItem('JA14_memo', 0);
        localStorage.setItem('JA15_memo', 0);

    });
}
// 出来なかった2回目、リロード表示
if (localStorage.getItem('reset_memo') >= "3" &&
    localStorage.getItem('level_memo') == "0") {
    $("#JOB").html('<img src="img/JOB/J-0-3絶望.png" alt="見捨てられた人">');
    $("#JOB_name").text("見捨てられた人");
}



// 積み上げエリア
// Done ボタンを押すと、数字がテキストエリアに表示される
// parseIntで本来文字列だった、ローカルストレージの中身を数値にすることが可能
// let start = parseInt(localStorage.getItem('Total_memo'));
// ifでローカルストレージに何もなければ、０を入れる仕様で解決
if (!localStorage.getItem('Total_memo')) {
    localStorage.setItem('Total_memo', 0);
}
let start = 0;
let plus = $("#Done");

$('#Total_num').text(localStorage.getItem('Total_memo'));

// 計算エリア
$("#Done").on('click', function input(NUM) {
    let plusNum = prompt("コードを書いた時間を入力");
    let AAA = parseInt(plusNum);
    // sum += parseInt(plusNum);
    start = parseInt(localStorage.getItem('Total_memo'));
    start += AAA;
    alert(start);
    localStorage.setItem('Total_memo', start);
    $('#Total_num').text(start);

})







// ジャンケン結果パート、通常隠しておく
$("#jyanken_result_part").hide();
//  出てきたジャンケン結果パートを、隠す
$("#jyanken_result_part").on("click", function () {
    $("#jyanken_result_part").hide();
    $('#jyanken').hide();
});

// ジャンケンパート、通常隠しておく
$('#jyanken_01').hide();
$('#jyanken_02').hide();
$('#jyanken_03').hide();
$('#jyanken_04').hide();
$('#jyanken_05').hide();
$('#jyanken_06').hide();
$('#jyanken_07').hide();
$('#jyanken_08').hide();
$('#jyanken_09').hide();
$('#jyanken_10').hide();
$('#jyanken_11').hide();
$('#jyanken_12').hide();
$('#jyanken_13').hide();
$('#jyanken_14').hide();
$('#jyanken_15').hide();


// 【ジャンケンパート】
// 【第１回】累計5
$("#Done").on("click", function () {
    if (localStorage.getItem('Total_memo') == 5) {
        $('#jyanken_01').fadeIn();

        // A-BOXをチョイス
        $("#jyanken01_Abox").on("click", function () {
            const randomNumber = Math.floor(Math.random() * 3 + 1);
            $("#jyanken_result_part").fadeIn(2000);
            $('#jyanken_01').hide();

            // if
            if (randomNumber == 1) {
                $("#result_PET_text").text("布袋が仲間になった！");
                $("#result_PET").html('<img src="img/win/W-1布袋.png" alt="布施の画像">');
                // $("#PET_01").html('<img src="img/win/W-1布袋.png" alt="布施の画像">');
            } else if (randomNumber == 2) {
                $("#result_PET_text").text("スライムが仲間になった！");
                $("#result_PET").html('<img src="img/lose/L-1スライム.png" alt="スライムの画像">');
                // $("#PET_01").html('<img src="img/lose/L-1スライム.png" alt="スライムの画像">');
            } else if (randomNumber == 3) {
                $("#result_PET_text").text("子が仲間になった！");
                $("#result_PET").html('<img src="img/drow/D-1子.png" alt="子の画像">');
                // $("#PET_01").html('<img src="img/drow/D-1子.png" alt="子の画像">');
            }
            localStorage.setItem('JA01_memo', randomNumber);
        })

        // B-BOXをチョイス
        $("#jyanken01_Bbox").on("click", function () {
            const randomNumber = Math.floor(Math.random() * 3 + 1);
            $("#jyanken_result_part").fadeIn(2000);
            $('#jyanken_01').hide();

            // if
            if (randomNumber == 1) {
                $("#result_PET_text").text("布袋が仲間になった！");
                $("#result_PET").html('<img src="img/win/W-1布袋.png" alt="布施の画像">');
                // $("#PET_01").html('<img src="img/win/W-1布袋.png" alt="布施の画像">');
            } else if (randomNumber == 2) {
                $("#result_PET_text").text("スライムが仲間になった！");
                $("#result_PET").html('<img src="img/lose/L-1スライム.png" alt="スライムの画像">');
                // $("#PET_01").html('<img src="img/lose/L-1スライム.png" alt="スライムの画像">');
            } else if (randomNumber == 3) {
                $("#result_PET_text").text("子が仲間になった！");
                $("#result_PET").html('<img src="img/drow/D-1子.png" alt="子の画像">');
                // $("#PET_01").html('<img src="img/drow/D-1子.png" alt="子の画像">');
            }
            localStorage.setItem('JA01_memo', randomNumber);
        })


        // C-BOXをチョイス
        $("#jyanken01_Cbox").on("click", function () {
            const randomNumber = Math.floor(Math.random() * 3 + 1);
            $("#jyanken_result_part").fadeIn(2000);
            $('#jyanken_01').hide();

            // if
            if (randomNumber == 1) {
                $("#result_PET_text").text("布袋が仲間になった！");
                $("#result_PET").html('<img src="img/win/W-1布袋.png" alt="布施の画像">');
                // $("#PET_01").html('<img src="img/win/W-1布袋.png" alt="布施の画像">');
            } else if (randomNumber == 2) {
                $("#result_PET_text").text("スライムが仲間になった！");
                $("#result_PET").html('<img src="img/lose/L-1スライム.png" alt="スライムの画像">');
                // $("#PET_01").html('<img src="img/lose/L-1スライム.png" alt="スライムの画像">');
            } else if (randomNumber == 3) {
                $("#result_PET_text").text("子が仲間になった！");
                $("#result_PET").html('<img src="img/drow/D-1子.png" alt="子の画像">');
                // $("#PET_01").html('<img src="img/drow/D-1子.png" alt="子の画像">');
            }
            localStorage.setItem('JA01_memo', randomNumber);
        })
    }
});

// 【第2回】累計10
$("#Done").on("click", function () {
    if (localStorage.getItem('Total_memo') == 10) {
        $('#jyanken_02').fadeIn();

        // A-BOXをチョイス
        $("#jyanken02_Abox").on("click", function () {
            const randomNumber = Math.floor(Math.random() * 3 + 1);
            $("#jyanken_result_part").fadeIn(2000);
            $('#jyanken_02').hide();

            // if
            if (randomNumber == 1) {
                $("#result_PET_text").text("弁財天が仲間になった！");
                $("#result_PET").html('<img src="img/win/W-2弁財天.png" alt="弁財天の画像">');
            } else if (randomNumber == 2) {
                $("#result_PET_text").text("カカシが仲間になった！");
                $("#result_PET").html('<img src="img/lose/L-2カカシ.png" alt="カカシの画像">');
            } else if (randomNumber == 3) {
                $("#result_PET_text").text("丑が仲間になった！");
                $("#result_PET").html('<img src="img/drow/D-2丑.png" alt="丑の画像">');
            }
            localStorage.setItem('JA02_memo', randomNumber);
        })

        // B-BOXをチョイス
        $("#jyanken02_Bbox").on("click", function () {
            const randomNumber = Math.floor(Math.random() * 3 + 1);
            $("#jyanken_result_part").fadeIn(2000);
            $('#jyanken_02').hide();

            // if
            if (randomNumber == 1) {
                $("#result_PET_text").text("弁財天が仲間になった！");
                $("#result_PET").html('<img src="img/win/W-2弁財天.png" alt="弁財天の画像">');
            } else if (randomNumber == 2) {
                $("#result_PET_text").text("カカシが仲間になった！");
                $("#result_PET").html('<img src="img/lose/L-2カカシ.png" alt="カカシの画像">');
            } else if (randomNumber == 3) {
                $("#result_PET_text").text("丑が仲間になった！");
                $("#result_PET").html('<img src="img/drow/D-2丑.png" alt="丑の画像">');
            }
            localStorage.setItem('JA02_memo', randomNumber);
        })


        // C-BOXをチョイス
        $("#jyanken02_Cbox").on("click", function () {
            const randomNumber = Math.floor(Math.random() * 3 + 1);
            $("#jyanken_result_part").fadeIn(2000);
            $('#jyanken_02').hide();

            // if
            if (randomNumber == 1) {
                $("#result_PET_text").text("弁財天が仲間になった！");
                $("#result_PET").html('<img src="img/win/W-2弁財天.png" alt="弁財天の画像">');
            } else if (randomNumber == 2) {
                $("#result_PET_text").text("カカシが仲間になった！");
                $("#result_PET").html('<img src="img/lose/L-2カカシ.png" alt="カカシの画像">');
            } else if (randomNumber == 3) {
                $("#result_PET_text").text("丑が仲間になった！");
                $("#result_PET").html('<img src="img/drow/D-2丑.png" alt="丑の画像">');
            }
            localStorage.setItem('JA02_memo', randomNumber);
        })
    }
});

// 【第3回】累計20
$("#Done").on("click", function () {
    if (localStorage.getItem('Total_memo') == 20) {
        $('#jyanken_03').fadeIn();

        // A-BOXをチョイス
        $("#jyanken03_Abox").on("click", function () {
            const randomNumber = Math.floor(Math.random() * 3 + 1);
            $("#jyanken_result_part").fadeIn(2000);
            $('#jyanken_03').hide();

            // if
            if (randomNumber == 1) {
                $("#result_PET_text").text("福禄寿が仲間になった！");
                $("#result_PET").html('<img src="img/win/W-3福禄寿.png" alt="福禄寿の画像">');
            } else if (randomNumber == 2) {
                $("#result_PET_text").text("一つ目小僧が仲間になった！");
                $("#result_PET").html('<img src="img/lose/L-3一つ目小僧.png" alt="一つ目小僧の画像">');
            } else if (randomNumber == 3) {
                $("#result_PET_text").text("寅が仲間になった！");
                $("#result_PET").html('<img src="img/drow/D-3寅.png" alt="寅の画像">');
            }
            localStorage.setItem('JA03_memo', randomNumber);
        })

        // B-BOXをチョイス
        $("#jyanken03_Bbox").on("click", function () {
            const randomNumber = Math.floor(Math.random() * 3 + 1);
            $("#jyanken_result_part").fadeIn(2000);
            $('#jyanken_03').hide();

            // if
            if (randomNumber == 1) {
                $("#result_PET_text").text("福禄寿が仲間になった！");
                $("#result_PET").html('<img src="img/win/W-3福禄寿.png" alt="福禄寿の画像">');
            } else if (randomNumber == 2) {
                $("#result_PET_text").text("一つ目小僧が仲間になった！");
                $("#result_PET").html('<img src="img/lose/L-3一つ目小僧.png" alt="一つ目小僧の画像">');
            } else if (randomNumber == 3) {
                $("#result_PET_text").text("寅が仲間になった！");
                $("#result_PET").html('<img src="img/drow/D-3寅.png" alt="寅の画像">');
            }
            localStorage.setItem('JA03_memo', randomNumber);
        })


        // C-BOXをチョイス
        $("#jyanken03_Cbox").on("click", function () {
            const randomNumber = Math.floor(Math.random() * 3 + 1);
            $("#jyanken_result_part").fadeIn(2000);
            $('#jyanken_03').hide();

            // if
            if (randomNumber == 1) {
                $("#result_PET_text").text("福禄寿が仲間になった！");
                $("#result_PET").html('<img src="img/win/W-3福禄寿.png" alt="福禄寿の画像">');
            } else if (randomNumber == 2) {
                $("#result_PET_text").text("一つ目小僧が仲間になった！");
                $("#result_PET").html('<img src="img/lose/L-3一つ目小僧.png" alt="一つ目小僧の画像">');
            } else if (randomNumber == 3) {
                $("#result_PET_text").text("寅が仲間になった！");
                $("#result_PET").html('<img src="img/drow/D-3寅.png" alt="寅の画像">');
            }
            localStorage.setItem('JA03_memo', randomNumber);
        })
    }
});

// 【第4回】累計30
$("#Done").on("click", function () {
    if (localStorage.getItem('Total_memo') == 30) {
        $('#jyanken_04').fadeIn();

        // A-BOXをチョイス
        $("#jyanken04_Abox").on("click", function () {
            const randomNumber = Math.floor(Math.random() * 3 + 1);
            $("#jyanken_result_part").fadeIn(2000);
            $('#jyanken_04').hide();

            // if
            if (randomNumber == 1) {
                $("#result_PET_text").text("毘沙門天が仲間になった！");
                $("#result_PET").html('<img src="img/win/W-4毘沙門天.png" alt="毘沙門天の画像">');
            } else if (randomNumber == 2) {
                $("#result_PET_text").text("提灯お化けが仲間になった！");
                $("#result_PET").html('<img src="img/lose/L-4提灯お化け.png" alt="提灯お化けの画像">');
            } else if (randomNumber == 3) {
                $("#result_PET_text").text("卯が仲間になった！");
                $("#result_PET").html('<img src="img/drow/D-4卯.png" alt="卯の画像">');
            }
            localStorage.setItem('JA04_memo', randomNumber);
        })

        // B-BOXをチョイス
        $("#jyanken04_Bbox").on("click", function () {
            const randomNumber = Math.floor(Math.random() * 3 + 1);
            $("#jyanken_result_part").fadeIn(2000);
            $('#jyanken_04').hide();

            // if
            if (randomNumber == 1) {
                $("#result_PET_text").text("毘沙門天が仲間になった！");
                $("#result_PET").html('<img src="img/win/W-4毘沙門天.png" alt="毘沙門天の画像">');
            } else if (randomNumber == 2) {
                $("#result_PET_text").text("提灯お化けが仲間になった！");
                $("#result_PET").html('<img src="img/lose/L-4提灯お化け.png" alt="提灯お化けの画像">');
            } else if (randomNumber == 3) {
                $("#result_PET_text").text("卯が仲間になった！");
                $("#result_PET").html('<img src="img/drow/D-4卯.png" alt="卯の画像">');
            }
            localStorage.setItem('JA04_memo', randomNumber);
        })

        // C-BOXをチョイス
        $("#jyanken04_Cbox").on("click", function () {
            const randomNumber = Math.floor(Math.random() * 3 + 1);
            $("#jyanken_result_part").fadeIn(2000);
            $('#jyanken_04').hide();

            // if
            if (randomNumber == 1) {
                $("#result_PET_text").text("毘沙門天が仲間になった！");
                $("#result_PET").html('<img src="img/win/W-4毘沙門天.png" alt="毘沙門天の画像">');
            } else if (randomNumber == 2) {
                $("#result_PET_text").text("提灯お化けが仲間になった！");
                $("#result_PET").html('<img src="img/lose/L-4提灯お化け.png" alt="提灯お化けの画像">');
            } else if (randomNumber == 3) {
                $("#result_PET_text").text("卯が仲間になった！");
                $("#result_PET").html('<img src="img/drow/D-4卯.png" alt="卯の画像">');
            }
            localStorage.setItem('JA04_memo', randomNumber);
        })
    }
});

// 【第5回】累計40
$("#Done").on("click", function () {
    if (localStorage.getItem('Total_memo') == 40) {
        $('#jyanken_05').fadeIn();

        // A-BOXをチョイス
        $("#jyanken05_Abox").on("click", function () {
            const randomNumber = Math.floor(Math.random() * 3 + 1);
            $("#jyanken_result_part").fadeIn(2000);
            $('#jyanken_05').hide();

            // if
            if (randomNumber == 1) {
                $("#result_PET_text").text("大黒天が仲間になった！");
                $("#result_PET").html('<img src="img/win/W-5大黒天.png" alt="大黒天の画像">');
            } else if (randomNumber == 2) {
                $("#result_PET_text").text("から傘小僧が仲間になった！");
                $("#result_PET").html('<img src="img/lose/L-5から傘小僧.png" alt="から傘小僧の画像">');
            } else if (randomNumber == 3) {
                $("#result_PET_text").text("辰が仲間になった！");
                $("#result_PET").html('<img src="img/drow/D-5辰.png" alt="辰の画像">');
            }
            localStorage.setItem('JA05_memo', randomNumber);
        })

        // B-BOXをチョイス
        $("#jyanken05_Bbox").on("click", function () {
            const randomNumber = Math.floor(Math.random() * 3 + 1);
            $("#jyanken_result_part").fadeIn(2000);
            $('#jyanken_05').hide();

            // if
            if (randomNumber == 1) {
                $("#result_PET_text").text("大黒天が仲間になった！");
                $("#result_PET").html('<img src="img/win/W-5大黒天.png" alt="大黒天の画像">');
            } else if (randomNumber == 2) {
                $("#result_PET_text").text("から傘小僧が仲間になった！");
                $("#result_PET").html('<img src="img/lose/L-5から傘小僧.png" alt="から傘小僧の画像">');
            } else if (randomNumber == 3) {
                $("#result_PET_text").text("辰が仲間になった！");
                $("#result_PET").html('<img src="img/drow/D-5辰.png" alt="辰の画像">');
            }
            localStorage.setItem('JA05_memo', randomNumber);
        })

        // C-BOXをチョイス
        $("#jyanken05_Cbox").on("click", function () {
            const randomNumber = Math.floor(Math.random() * 3 + 1);
            $("#jyanken_result_part").fadeIn(2000);
            $('#jyanken_05').hide();

            // if
            if (randomNumber == 1) {
                $("#result_PET_text").text("大黒天が仲間になった！");
                $("#result_PET").html('<img src="img/win/W-5大黒天.png" alt="大黒天の画像">');
            } else if (randomNumber == 2) {
                $("#result_PET_text").text("から傘小僧が仲間になった！");
                $("#result_PET").html('<img src="img/lose/L-5から傘小僧.png" alt="から傘小僧の画像">');
            } else if (randomNumber == 3) {
                $("#result_PET_text").text("辰が仲間になった！");
                $("#result_PET").html('<img src="img/drow/D-5辰.png" alt="辰の画像">');
            }
            localStorage.setItem('JA05_memo', randomNumber);
        })
    }
});

// 【第6回】累計50
$("#Done").on("click", function () {
    if (localStorage.getItem('Total_memo') == 50) {
        $('#jyanken_06').fadeIn();

        // A-BOXをチョイス
        $("#jyanken06_Abox").on("click", function () {
            const randomNumber = Math.floor(Math.random() * 3 + 1);
            $("#jyanken_result_part").fadeIn(2000);
            $('#jyanken_06').hide();

            // if
            if (randomNumber == 1) {
                $("#result_PET_text").text("寿老人が仲間になった！");
                $("#result_PET").html('<img src="img/win/W-6寿老人.png" alt="寿老人の画像">');
            } else if (randomNumber == 2) {
                $("#result_PET_text").text("ゴブリンが仲間になった！");
                $("#result_PET").html('<img src="img/lose/L-6ゴブリン.png" alt="ゴブリンの画像">');
            } else if (randomNumber == 3) {
                $("#result_PET_text").text("巳が仲間になった！");
                $("#result_PET").html('<img src="img/drow/D-6巳.png" alt="巳の画像">');
            }
            localStorage.setItem('JA06_memo', randomNumber);
        })

        // B-BOXをチョイス
        $("#jyanken06_Bbox").on("click", function () {
            const randomNumber = Math.floor(Math.random() * 3 + 1);
            $("#jyanken_result_part").fadeIn(2000);
            $('#jyanken_06').hide();

            // if
            if (randomNumber == 1) {
                $("#result_PET_text").text("寿老人が仲間になった！");
                $("#result_PET").html('<img src="img/win/W-6寿老人.png" alt="寿老人の画像">');
            } else if (randomNumber == 2) {
                $("#result_PET_text").text("ゴブリンが仲間になった！");
                $("#result_PET").html('<img src="img/lose/L-6ゴブリン.png" alt="ゴブリンの画像">');
            } else if (randomNumber == 3) {
                $("#result_PET_text").text("巳が仲間になった！");
                $("#result_PET").html('<img src="img/drow/D-6巳.png" alt="巳の画像">');
            }
            localStorage.setItem('JA06_memo', randomNumber);
        })

        // C-BOXをチョイス
        $("#jyanken06_Cbox").on("click", function () {
            const randomNumber = Math.floor(Math.random() * 3 + 1);
            $("#jyanken_result_part").fadeIn(2000);
            $('#jyanken_06').hide();

            // if
            if (randomNumber == 1) {
                $("#result_PET_text").text("寿老人が仲間になった！");
                $("#result_PET").html('<img src="img/win/W-6寿老人.png" alt="寿老人の画像">');
            } else if (randomNumber == 2) {
                $("#result_PET_text").text("ゴブリンが仲間になった！");
                $("#result_PET").html('<img src="img/lose/L-6ゴブリン.png" alt="ゴブリンの画像">');
            } else if (randomNumber == 3) {
                $("#result_PET_text").text("巳が仲間になった！");
                $("#result_PET").html('<img src="img/drow/D-6巳.png" alt="巳の画像">');
            }
            localStorage.setItem('JA06_memo', randomNumber);
        })
    }
});

// 【第7回】累計60
$("#Done").on("click", function () {
    if (localStorage.getItem('Total_memo') == 60) {
        $('#jyanken_07').fadeIn();

        // A-BOXをチョイス
        $("#jyanken07_Abox").on("click", function () {
            const randomNumber = Math.floor(Math.random() * 3 + 1);
            $("#jyanken_result_part").fadeIn(2000);
            $('#jyanken_07').hide();

            // if
            if (randomNumber == 1) {
                $("#result_PET_text").text("恵比寿が仲間になった！");
                $("#result_PET").html('<img src="img/win/W-7恵比寿.png" alt="恵比寿の画像">');
            } else if (randomNumber == 2) {
                $("#result_PET_text").text("ゾンビ犬が仲間になった！");
                $("#result_PET").html('<img src="img/lose/L-7ゾンビ犬.png" alt="ゾンビ犬の画像">');
            } else if (randomNumber == 3) {
                $("#result_PET_text").text("午が仲間になった！");
                $("#result_PET").html('<img src="img/drow/D-7午.png" alt="午の画像">');
            }
            localStorage.setItem('JA07_memo', randomNumber);
        })

        // B-BOXをチョイス
        $("#jyanken07_Bbox").on("click", function () {
            const randomNumber = Math.floor(Math.random() * 3 + 1);
            $("#jyanken_result_part").fadeIn(2000);
            $('#jyanken_07').hide();

            // if
            if (randomNumber == 1) {
                $("#result_PET_text").text("恵比寿が仲間になった！");
                $("#result_PET").html('<img src="img/win/W-7恵比寿.png" alt="恵比寿の画像">');
            } else if (randomNumber == 2) {
                $("#result_PET_text").text("ゾンビ犬が仲間になった！");
                $("#result_PET").html('<img src="img/lose/L-7ゾンビ犬.png" alt="ゾンビ犬の画像">');
            } else if (randomNumber == 3) {
                $("#result_PET_text").text("午が仲間になった！");
                $("#result_PET").html('<img src="img/drow/D-7午.png" alt="午の画像">');
            }
            localStorage.setItem('JA07_memo', randomNumber);
        })

        // C-BOXをチョイス
        $("#jyanken07_Cbox").on("click", function () {
            const randomNumber = Math.floor(Math.random() * 3 + 1);
            $("#jyanken_result_part").fadeIn(2000);
            $('#jyanken_07').hide();

            // if
            if (randomNumber == 1) {
                $("#result_PET_text").text("恵比寿が仲間になった！");
                $("#result_PET").html('<img src="img/win/W-7恵比寿.png" alt="恵比寿の画像">');
            } else if (randomNumber == 2) {
                $("#result_PET_text").text("ゾンビ犬が仲間になった！");
                $("#result_PET").html('<img src="img/lose/L-7ゾンビ犬.png" alt="ゾンビ犬の画像">');
            } else if (randomNumber == 3) {
                $("#result_PET_text").text("午が仲間になった！");
                $("#result_PET").html('<img src="img/drow/D-7午.png" alt="午の画像">');
            }
            localStorage.setItem('JA07_memo', randomNumber);
        })
    }
});

// 【第8回】累計70
$("#Done").on("click", function () {
    if (localStorage.getItem('Total_memo') == 70) {
        $('#jyanken_08').fadeIn();

        // A-BOXをチョイス
        $("#jyanken08_Abox").on("click", function () {
            const randomNumber = Math.floor(Math.random() * 3 + 1);
            $("#jyanken_result_part").fadeIn(2000);
            $('#jyanken_08').hide();

            // if
            if (randomNumber == 1) {
                $("#result_PET_text").text("玄武が仲間になった！");
                $("#result_PET").html('<img src="img/win/W-8玄武.png" alt="玄武の画像">');
            } else if (randomNumber == 2) {
                $("#result_PET_text").text("ゾンビが仲間になった！");
                $("#result_PET").html('<img src="img/lose/L-8ゾンビ.png" alt="ゾンビの画像">');
            } else if (randomNumber == 3) {
                $("#result_PET_text").text("未が仲間になった！");
                $("#result_PET").html('<img src="img/drow/D-8未.png" alt="未の画像">');
            }
            localStorage.setItem('JA08_memo', randomNumber);
        })

        // B-BOXをチョイス
        $("#jyanken08_Bbox").on("click", function () {
            const randomNumber = Math.floor(Math.random() * 3 + 1);
            $("#jyanken_result_part").fadeIn(2000);
            $('#jyanken_08').hide();

            // if
            if (randomNumber == 1) {
                $("#result_PET_text").text("玄武が仲間になった！");
                $("#result_PET").html('<img src="img/win/W-8玄武.png" alt="玄武の画像">');
            } else if (randomNumber == 2) {
                $("#result_PET_text").text("ゾンビが仲間になった！");
                $("#result_PET").html('<img src="img/lose/L-8ゾンビ.png" alt="ゾンビの画像">');
            } else if (randomNumber == 3) {
                $("#result_PET_text").text("未が仲間になった！");
                $("#result_PET").html('<img src="img/drow/D-8未.png" alt="未の画像">');
            }
            localStorage.setItem('JA08_memo', randomNumber);
        })

        // C-BOXをチョイス
        $("#jyanken08_Cbox").on("click", function () {
            const randomNumber = Math.floor(Math.random() * 3 + 1);
            $("#jyanken_result_part").fadeIn(2000);
            $('#jyanken_08').hide();

            // if
            if (randomNumber == 1) {
                $("#result_PET_text").text("玄武が仲間になった！");
                $("#result_PET").html('<img src="img/win/W-8玄武.png" alt="玄武の画像">');
            } else if (randomNumber == 2) {
                $("#result_PET_text").text("ゾンビが仲間になった！");
                $("#result_PET").html('<img src="img/lose/L-8ゾンビ.png" alt="ゾンビの画像">');
            } else if (randomNumber == 3) {
                $("#result_PET_text").text("未が仲間になった！");
                $("#result_PET").html('<img src="img/drow/D-8未.png" alt="未の画像">');
            }
            localStorage.setItem('JA08_memo', randomNumber);
        })
    }
});

// 【第9回】累計80
$("#Done").on("click", function () {
    if (localStorage.getItem('Total_memo') == 80) {
        $('#jyanken_09').fadeIn();

        // A-BOXをチョイス
        $("#jyanken09_Abox").on("click", function () {
            const randomNumber = Math.floor(Math.random() * 3 + 1);
            $("#jyanken_result_part").fadeIn(2000);
            $('#jyanken_09').hide();

            // if
            if (randomNumber == 1) {
                $("#result_PET_text").text("白虎が仲間になった！");
                $("#result_PET").html('<img src="img/win/W-9白虎.png" alt="白虎の画像">');
            } else if (randomNumber == 2) {
                $("#result_PET_text").text("ミイラ男が仲間になった！");
                $("#result_PET").html('<img src="img/lose/L-9ミイラ男.png" alt="ミイラ男の画像">');
            } else if (randomNumber == 3) {
                $("#result_PET_text").text("申が仲間になった！");
                $("#result_PET").html('<img src="img/drow/D-9申.png" alt="申の画像">');
            }
            localStorage.setItem('JA09_memo', randomNumber);
        })

        // B-BOXをチョイス
        $("#jyanken09_Bbox").on("click", function () {
            const randomNumber = Math.floor(Math.random() * 3 + 1);
            $("#jyanken_result_part").fadeIn(2000);
            $('#jyanken_09').hide();

            // if
            if (randomNumber == 1) {
                $("#result_PET_text").text("白虎が仲間になった！");
                $("#result_PET").html('<img src="img/win/W-9白虎.png" alt="白虎の画像">');
            } else if (randomNumber == 2) {
                $("#result_PET_text").text("ミイラ男が仲間になった！");
                $("#result_PET").html('<img src="img/lose/L-9ミイラ男.png" alt="ミイラ男の画像">');
            } else if (randomNumber == 3) {
                $("#result_PET_text").text("申が仲間になった！");
                $("#result_PET").html('<img src="img/drow/D-9申.png" alt="申の画像">');
            }
            localStorage.setItem('JA09_memo', randomNumber);
        })

        // C-BOXをチョイス
        $("#jyanken09_Cbox").on("click", function () {
            const randomNumber = Math.floor(Math.random() * 3 + 1);
            $("#jyanken_result_part").fadeIn(2000);
            $('#jyanken_09').hide();

            // if
            if (randomNumber == 1) {
                $("#result_PET_text").text("白虎が仲間になった！");
                $("#result_PET").html('<img src="img/win/W-9白虎.png" alt="白虎の画像">');
            } else if (randomNumber == 2) {
                $("#result_PET_text").text("ミイラ男が仲間になった！");
                $("#result_PET").html('<img src="img/lose/L-9ミイラ男.png" alt="ミイラ男の画像">');
            } else if (randomNumber == 3) {
                $("#result_PET_text").text("申が仲間になった！");
                $("#result_PET").html('<img src="img/drow/D-9申.png" alt="申の画像">');
            }
            localStorage.setItem('JA09_memo', randomNumber);
        })
    }
});

// 【第10回】累計90
$("#Done").on("click", function () {
    if (localStorage.getItem('Total_memo') == 90) {
        $('#jyanken_10').fadeIn();

        // A-BOXをチョイス
        $("#jyanken10_Abox").on("click", function () {
            const randomNumber = Math.floor(Math.random() * 3 + 1);
            $("#jyanken_result_part").fadeIn(2000);
            $('#jyanken_10').hide();

            // if
            if (randomNumber == 1) {
                $("#result_PET_text").text("朱雀が仲間になった！");
                $("#result_PET").html('<img src="img/win/W-10朱雀.png" alt="朱雀の画像">');
            } else if (randomNumber == 2) {
                $("#result_PET_text").text("フランケンシュタインが仲間になった！");
                $("#result_PET").html('<img src="img/lose/L-10フランケンシュタイン.png" alt="フランケンシュタインの画像">');
            } else if (randomNumber == 3) {
                $("#result_PET_text").text("酉が仲間になった！");
                $("#result_PET").html('<img src="img/drow/D-10酉.png" alt="酉の画像">');
            }
            localStorage.setItem('JA10_memo', randomNumber);
        })

        // B-BOXをチョイス
        $("#jyanken10_Bbox").on("click", function () {
            const randomNumber = Math.floor(Math.random() * 3 + 1);
            $("#jyanken_result_part").fadeIn(2000);
            $('#jyanken_10').hide();

            // if
            if (randomNumber == 1) {
                $("#result_PET_text").text("朱雀が仲間になった！");
                $("#result_PET").html('<img src="img/win/W-10朱雀.png" alt="朱雀の画像">');
            } else if (randomNumber == 2) {
                $("#result_PET_text").text("フランケンシュタインが仲間になった！");
                $("#result_PET").html('<img src="img/lose/L-10フランケンシュタイン.png" alt="フランケンシュタインの画像">');
            } else if (randomNumber == 3) {
                $("#result_PET_text").text("酉が仲間になった！");
                $("#result_PET").html('<img src="img/drow/D-10酉.png" alt="酉の画像">');
            }
            localStorage.setItem('JA10_memo', randomNumber);
        })

        // C-BOXをチョイス
        $("#jyanken10_Cbox").on("click", function () {
            const randomNumber = Math.floor(Math.random() * 3 + 1);
            $("#jyanken_result_part").fadeIn(2000);
            $('#jyanken_10').hide();

            // if
            if (randomNumber == 1) {
                $("#result_PET_text").text("朱雀が仲間になった！");
                $("#result_PET").html('<img src="img/win/W-10朱雀.png" alt="朱雀の画像">');
            } else if (randomNumber == 2) {
                $("#result_PET_text").text("フランケンシュタインが仲間になった！");
                $("#result_PET").html('<img src="img/lose/L-10フランケンシュタイン.png" alt="フランケンシュタインの画像">');
            } else if (randomNumber == 3) {
                $("#result_PET_text").text("酉が仲間になった！");
                $("#result_PET").html('<img src="img/drow/D-10酉.png" alt="酉の画像">');
            }
            localStorage.setItem('JA10_memo', randomNumber);
        })
    }
});

// 【第11回】累計100
$("#Done").on("click", function () {
    if (localStorage.getItem('Total_memo') == 100) {
        $('#jyanken_11').fadeIn();

        // A-BOXをチョイス
        $("#jyanken11_Abox").on("click", function () {
            const randomNumber = Math.floor(Math.random() * 3 + 1);
            $("#jyanken_result_part").fadeIn(2000);
            $('#jyanken_11').hide();

            // if
            if (randomNumber == 1) {
                $("#result_PET_text").text("青龍が仲間になった！");
                $("#result_PET").html('<img src="img/win/W-11青龍.png" alt="青龍の画像">');
            } else if (randomNumber == 2) {
                $("#result_PET_text").text("人面犬が仲間になった！");
                $("#result_PET").html('<img src="img/lose/L-11人面犬.png" alt="人面犬の画像">');
            } else if (randomNumber == 3) {
                $("#result_PET_text").text("戌が仲間になった！");
                $("#result_PET").html('<img src="img/drow/D-11戌.png" alt="戌の画像">');
            }
            localStorage.setItem('JA11_memo', randomNumber);
        })

        // B-BOXをチョイス
        $("#jyanken11_Bbox").on("click", function () {
            const randomNumber = Math.floor(Math.random() * 3 + 1);
            $("#jyanken_result_part").fadeIn(2000);
            $('#jyanken_11').hide();

            // if
            if (randomNumber == 1) {
                $("#result_PET_text").text("青龍が仲間になった！");
                $("#result_PET").html('<img src="img/win/W-11青龍.png" alt="青龍の画像">');
            } else if (randomNumber == 2) {
                $("#result_PET_text").text("人面犬が仲間になった！");
                $("#result_PET").html('<img src="img/lose/L-11人面犬.png" alt="人面犬の画像">');
            } else if (randomNumber == 3) {
                $("#result_PET_text").text("戌が仲間になった！");
                $("#result_PET").html('<img src="img/drow/D-11戌.png" alt="戌の画像">');
            }
            localStorage.setItem('JA11_memo', randomNumber);
        })

        // C-BOXをチョイス
        $("#jyanken11_Cbox").on("click", function () {
            const randomNumber = Math.floor(Math.random() * 3 + 1);
            $("#jyanken_result_part").fadeIn(2000);
            $('#jyanken_11').hide();

            // if
            if (randomNumber == 1) {
                $("#result_PET_text").text("青龍が仲間になった！");
                $("#result_PET").html('<img src="img/win/W-11青龍.png" alt="青龍の画像">');
            } else if (randomNumber == 2) {
                $("#result_PET_text").text("人面犬が仲間になった！");
                $("#result_PET").html('<img src="img/lose/L-11人面犬.png" alt="人面犬の画像">');
            } else if (randomNumber == 3) {
                $("#result_PET_text").text("戌が仲間になった！");
                $("#result_PET").html('<img src="img/drow/D-11戌.png" alt="戌の画像">');
            }
            localStorage.setItem('JA11_memo', randomNumber);
        })
    }
});

// 【第12回】累計110
$("#Done").on("click", function () {
    if (localStorage.getItem('Total_memo') == 110) {
        $('#jyanken_12').fadeIn();

        // A-BOXをチョイス
        $("#jyanken12_Abox").on("click", function () {
            const randomNumber = Math.floor(Math.random() * 3 + 1);
            $("#jyanken_result_part").fadeIn(2000);
            $('#jyanken_12').hide();

            // if
            if (randomNumber == 1) {
                $("#result_PET_text").text("麒麟が仲間になった！");
                $("#result_PET").html('<img src="img/win/W-12麒麟.png" alt="麒麟の画像">');
            } else if (randomNumber == 2) {
                $("#result_PET_text").text("ケルベロスが仲間になった！");
                $("#result_PET").html('<img src="img/lose/L-12ケルベロス.png" alt="ケルベロスの画像">');
            } else if (randomNumber == 3) {
                $("#result_PET_text").text("亥が仲間になった！");
                $("#result_PET").html('<img src="img/drow/D-12亥.png" alt="亥の画像">');
            }
            localStorage.setItem('JA12_memo', randomNumber);
        })

        // B-BOXをチョイス
        $("#jyanken12_Bbox").on("click", function () {
            const randomNumber = Math.floor(Math.random() * 3 + 1);
            $("#jyanken_result_part").fadeIn(2000);
            $('#jyanken_12').hide();

            // if
            if (randomNumber == 1) {
                $("#result_PET_text").text("麒麟が仲間になった！");
                $("#result_PET").html('<img src="img/win/W-12麒麟.png" alt="麒麟の画像">');
            } else if (randomNumber == 2) {
                $("#result_PET_text").text("ケルベロスが仲間になった！");
                $("#result_PET").html('<img src="img/lose/L-12ケルベロス.png" alt="ケルベロスの画像">');
            } else if (randomNumber == 3) {
                $("#result_PET_text").text("亥が仲間になった！");
                $("#result_PET").html('<img src="img/drow/D-12亥.png" alt="亥の画像">');
            }
            localStorage.setItem('JA12_memo', randomNumber);
        })

        // C-BOXをチョイス
        $("#jyanken12_Cbox").on("click", function () {
            const randomNumber = Math.floor(Math.random() * 3 + 1);
            $("#jyanken_result_part").fadeIn(2000);
            $('#jyanken_12').hide();

            // if
            if (randomNumber == 1) {
                $("#result_PET_text").text("麒麟が仲間になった！");
                $("#result_PET").html('<img src="img/win/W-12麒麟.png" alt="麒麟の画像">');
            } else if (randomNumber == 2) {
                $("#result_PET_text").text("ケルベロスが仲間になった！");
                $("#result_PET").html('<img src="img/lose/L-12ケルベロス.png" alt="ケルベロスの画像">');
            } else if (randomNumber == 3) {
                $("#result_PET_text").text("亥が仲間になった！");
                $("#result_PET").html('<img src="img/drow/D-12亥.png" alt="亥の画像">');
            }
            localStorage.setItem('JA12_memo', randomNumber);
        })
    }
});

// 【第13回】累計120
$("#Done").on("click", function () {
    if (localStorage.getItem('Total_memo') == 120) {
        $('#jyanken_13').fadeIn();

        // A-BOXをチョイス
        $("#jyanken13_Abox").on("click", function () {
            const randomNumber = Math.floor(Math.random() * 3 + 1);
            $("#jyanken_result_part").fadeIn(2000);
            $('#jyanken_13').hide();

            // if
            if (randomNumber == 1) {
                $("#result_PET_text").text("風神が仲間になった！");
                $("#result_PET").html('<img src="img/win/W-13風神.png" alt="風神の画像">');
            } else if (randomNumber == 2) {
                $("#result_PET_text").text("ドラゴンが仲間になった！");
                $("#result_PET").html('<img src="img/lose/L-13ドラゴン.png" alt="ドラゴンの画像">');
            } else if (randomNumber == 3) {
                $("#result_PET_text").text("沙悟浄が仲間になった！");
                $("#result_PET").html('<img src="img/drow/D-13沙悟浄.png" alt="沙悟浄の画像">');
            }
            localStorage.setItem('JA13_memo', randomNumber);
        })

        // B-BOXをチョイス
        $("#jyanken13_Bbox").on("click", function () {
            const randomNumber = Math.floor(Math.random() * 3 + 1);
            $("#jyanken_result_part").fadeIn(2000);
            $('#jyanken_13').hide();

            // if
            if (randomNumber == 1) {
                $("#result_PET_text").text("風神が仲間になった！");
                $("#result_PET").html('<img src="img/win/W-13風神.png" alt="風神の画像">');
            } else if (randomNumber == 2) {
                $("#result_PET_text").text("ドラゴンが仲間になった！");
                $("#result_PET").html('<img src="img/lose/L-13ドラゴン.png" alt="ドラゴンの画像">');
            } else if (randomNumber == 3) {
                $("#result_PET_text").text("沙悟浄が仲間になった！");
                $("#result_PET").html('<img src="img/drow/D-13沙悟浄.png" alt="沙悟浄の画像">');
            }
            localStorage.setItem('JA13_memo', randomNumber);
        })

        // C-BOXをチョイス
        $("#jyanken13_Cbox").on("click", function () {
            const randomNumber = Math.floor(Math.random() * 3 + 1);
            $("#jyanken_result_part").fadeIn(2000);
            $('#jyanken_13').hide();

            // if
            if (randomNumber == 1) {
                $("#result_PET_text").text("風神が仲間になった！");
                $("#result_PET").html('<img src="img/win/W-13風神.png" alt="風神の画像">');
            } else if (randomNumber == 2) {
                $("#result_PET_text").text("ドラゴンが仲間になった！");
                $("#result_PET").html('<img src="img/lose/L-13ドラゴン.png" alt="ドラゴンの画像">');
            } else if (randomNumber == 3) {
                $("#result_PET_text").text("沙悟浄が仲間になった！");
                $("#result_PET").html('<img src="img/drow/D-13沙悟浄.png" alt="沙悟浄の画像">');
            }
            localStorage.setItem('JA13_memo', randomNumber);
        })
    }
});

// 【第14回】累計130
$("#Done").on("click", function () {
    if (localStorage.getItem('Total_memo') == 130) {
        $('#jyanken_14').fadeIn();

        // A-BOXをチョイス
        $("#jyanken14_Abox").on("click", function () {
            const randomNumber = Math.floor(Math.random() * 3 + 1);
            $("#jyanken_result_part").fadeIn(2000);
            $('#jyanken_14').hide();

            // if
            if (randomNumber == 1) {
                $("#result_PET_text").text("雷神が仲間になった！");
                $("#result_PET").html('<img src="img/win/W-14雷神.png" alt="雷神の画像">');
            } else if (randomNumber == 2) {
                $("#result_PET_text").text("巨大ロボットが仲間になった！");
                $("#result_PET").html('<img src="img/lose/L-14巨大ロボット.png" alt="巨大ロボットの画像">');
            } else if (randomNumber == 3) {
                $("#result_PET_text").text("猪八戒が仲間になった！");
                $("#result_PET").html('<img src="img/drow/D-14猪八戒.png" alt="猪八戒の画像">');
            }
            localStorage.setItem('JA14_memo', randomNumber);
        })

        // B-BOXをチョイス
        $("#jyanken14_Bbox").on("click", function () {
            const randomNumber = Math.floor(Math.random() * 3 + 1);
            $("#jyanken_result_part").fadeIn(2000);
            $('#jyanken_14').hide();

            // if
            if (randomNumber == 1) {
                $("#result_PET_text").text("雷神が仲間になった！");
                $("#result_PET").html('<img src="img/win/W-14雷神.png" alt="雷神の画像">');
            } else if (randomNumber == 2) {
                $("#result_PET_text").text("巨大ロボットが仲間になった！");
                $("#result_PET").html('<img src="img/lose/L-14巨大ロボット.png" alt="巨大ロボットの画像">');
            } else if (randomNumber == 3) {
                $("#result_PET_text").text("猪八戒が仲間になった！");
                $("#result_PET").html('<img src="img/drow/D-14猪八戒.png" alt="猪八戒の画像">');
            }
            localStorage.setItem('JA14_memo', randomNumber);
        })

        // C-BOXをチョイス
        $("#jyanken14_Cbox").on("click", function () {
            const randomNumber = Math.floor(Math.random() * 3 + 1);
            $("#jyanken_result_part").fadeIn(2000);
            $('#jyanken_14').hide();

            // if
            if (randomNumber == 1) {
                $("#result_PET_text").text("雷神が仲間になった！");
                $("#result_PET").html('<img src="img/win/W-14雷神.png" alt="雷神の画像">');
            } else if (randomNumber == 2) {
                $("#result_PET_text").text("巨大ロボットが仲間になった！");
                $("#result_PET").html('<img src="img/lose/L-14巨大ロボット.png" alt="巨大ロボットの画像">');
            } else if (randomNumber == 3) {
                $("#result_PET_text").text("猪八戒が仲間になった！");
                $("#result_PET").html('<img src="img/drow/D-14猪八戒.png" alt="猪八戒の画像">');
            }
            localStorage.setItem('JA14_memo', randomNumber);
        })
    }
});

// 【第15回】累計140
$("#Done").on("click", function () {
    if (localStorage.getItem('Total_memo') == 140) {
        $('#jyanken_15').fadeIn();

        // A-BOXをチョイス
        $("#jyanken15_Abox").on("click", function () {
            const randomNumber = Math.floor(Math.random() * 3 + 1);
            $("#jyanken_result_part").fadeIn(2000);
            $('#jyanken_15').hide();

            // if
            if (randomNumber == 1) {
                $("#result_PET_text").text("天照大御神が仲間になった！");
                $("#result_PET").html('<img src="img/win/W-15天照大御神.png" alt="天照大御神の画像">');
            } else if (randomNumber == 2) {
                $("#result_PET_text").text("貧乏神が仲間になった！");
                $("#result_PET").html('<img src="img/lose/L-15貧乏神.png" alt="貧乏神の画像">');
            } else if (randomNumber == 3) {
                $("#result_PET_text").text("孫悟空が仲間になった！");
                $("#result_PET").html('<img src="img/drow/D-15孫悟空.png" alt="孫悟空の画像">');
            }
            localStorage.setItem('JA15_memo', randomNumber);
        })

        // B-BOXをチョイス
        $("#jyanken15_Bbox").on("click", function () {
            const randomNumber = Math.floor(Math.random() * 3 + 1);
            $("#jyanken_result_part").fadeIn(2000);
            $('#jyanken_15').hide();

            // if
            if (randomNumber == 1) {
                $("#result_PET_text").text("天照大御神が仲間になった！");
                $("#result_PET").html('<img src="img/win/W-15天照大御神.png" alt="天照大御神の画像">');
            } else if (randomNumber == 2) {
                $("#result_PET_text").text("貧乏神が仲間になった！");
                $("#result_PET").html('<img src="img/lose/L-15貧乏神.png" alt="貧乏神の画像">');
            } else if (randomNumber == 3) {
                $("#result_PET_text").text("孫悟空が仲間になった！");
                $("#result_PET").html('<img src="img/drow/D-15孫悟空.png" alt="孫悟空の画像">');
            }
            localStorage.setItem('JA15_memo', randomNumber);
        })

        // C-BOXをチョイス
        $("#jyanken15_Cbox").on("click", function () {
            const randomNumber = Math.floor(Math.random() * 3 + 1);
            $("#jyanken_result_part").fadeIn(2000);
            $('#jyanken_15').hide();

            // if
            if (randomNumber == 1) {
                $("#result_PET_text").text("天照大御神が仲間になった！");
                $("#result_PET").html('<img src="img/win/W-15天照大御神.png" alt="天照大御神の画像">');
            } else if (randomNumber == 2) {
                $("#result_PET_text").text("貧乏神が仲間になった！");
                $("#result_PET").html('<img src="img/lose/L-15貧乏神.png" alt="貧乏神の画像">');
            } else if (randomNumber == 3) {
                $("#result_PET_text").text("孫悟空が仲間になった！");
                $("#result_PET").html('<img src="img/drow/D-15孫悟空.png" alt="孫悟空の画像">');
            }
            localStorage.setItem('JA15_memo', randomNumber);
        })
    }
});



// ゲームクリアの使用
$("#game_clear").hide();
$("#fadein_test02").hide();
$("#Done").on("click", function () {
    if (localStorage.getItem('Total_memo') >= 150) {
        $('#game_clear').fadeIn(3000);
        $('#fadein_test02').fadeIn(3000);
    }
});

$("#game_clear").on("click", function () {
    $("#game_clear").hide();
    $("#fadein_test02").hide();
})



// 関数内のローカルストレージの数字を持ち出し、画像表示、記録として残るVar
// 【１回目】結果を受けて、PETエリアに表示させる
if (localStorage.getItem('JA01_memo') == "1") {
    $("#PET_01").html('<img src="img/win/W-1布袋.png" alt="布施の画像">');
} else if (localStorage.getItem('JA01_memo') == "2") {
    $("#PET_01").html('<img src="img/lose/L-1スライム.png" alt="スライムの画像">');
} else if (localStorage.getItem('JA01_memo') == "3") {
    $("#PET_01").html('<img src="img/drow/D-1子.png" alt="子の画像">');
}
// 【2回目】結果を受けて、PETエリアに表示させる
if (localStorage.getItem('JA02_memo') == "1") {
    $("#PET_02").html('<img src="img/win/W-2弁財天.png" alt="弁財天の画像">');
} else if (localStorage.getItem('JA02_memo') == "2") {
    $("#PET_02").html('<img src="img/lose/L-2カカシ.png" alt="カカシの画像">');
} else if (localStorage.getItem('JA02_memo') == "3") {
    $("#PET_02").html('<img src="img/drow/D-2丑.png" alt="丑の画像">');
}
// 【3回目】結果を受けて、PETエリアに表示させる
if (localStorage.getItem('JA03_memo') == "1") {
    $("#PET_03").html('<img src="img/win/W-3福禄寿.png" alt="福禄寿の画像">');
} else if (localStorage.getItem('JA03_memo') == "2") {
    $("#PET_03").html('<img src="img/lose/L-3一つ目小僧.png" alt="一つ目小僧の画像">');
} else if (localStorage.getItem('JA03_memo') == "3") {
    $("#PET_03").html('<img src="img/drow/D-3寅.png" alt="寅の画像">');
}
// 【4回目】結果を受けて、PETエリアに表示させる
if (localStorage.getItem('JA04_memo') == "1") {
    $("#PET_04").html('<img src="img/win/W-4毘沙門天.png" alt="毘沙門天の画像">');
} else if (localStorage.getItem('JA04_memo') == "2") {
    $("#PET_04").html('<img src="img/lose/L-4提灯お化け.png" alt="提灯お化けの画像">');
} else if (localStorage.getItem('JA04_memo') == "3") {
    $("#PET_04").html('<img src="img/drow/D-4卯.png" alt="卯の画像">');
}
// 【5回目】結果を受けて、PETエリアに表示させる
if (localStorage.getItem('JA05_memo') == "1") {
    $("#PET_05").html('<img src="img/win/W-5大黒天.png" alt="大黒天の画像">');
} else if (localStorage.getItem('JA05_memo') == "2") {
    $("#PET_05").html('<img src="img/lose/L-5から傘小僧.png" alt="から傘小僧の画像">');
} else if (localStorage.getItem('JA05_memo') == "3") {
    $("#PET_05").html('<img src="img/drow/D-5辰.png" alt="辰の画像">');
}
// 【6回目】結果を受けて、PETエリアに表示させる
if (localStorage.getItem('JA06_memo') == "1") {
    $("#PET_06").html('<img src="img/win/W-6寿老人.png" alt="寿老人の画像">');
} else if (localStorage.getItem('JA06_memo') == "2") {
    $("#PET_06").html('<img src="img/lose/L-6ゴブリン.png" alt="ゴブリンの画像">');
} else if (localStorage.getItem('JA06_memo') == "3") {
    $("#PET_06").html('<img src="img/drow/D-6巳.png" alt="巳の画像">');
}
// 【7回目】結果を受けて、PETエリアに表示させる
if (localStorage.getItem('JA07_memo') == "1") {
    $("#PET_07").html('<img src="img/win/W-7恵比寿.png" alt="恵比寿の画像">');
} else if (localStorage.getItem('JA07_memo') == "2") {
    $("#PET_07").html('<img src="img/lose/L-7ゾンビ犬.png" alt="ゾンビ犬の画像">');
} else if (localStorage.getItem('JA07_memo') == "3") {
    $("#PET_07").html('<img src="img/drow/D-7午.png" alt="午の画像">');
}
// 【8回目】結果を受けて、PETエリアに表示させる
if (localStorage.getItem('JA08_memo') == "1") {
    $("#PET_08").html('<img src="img/win/W-8玄武.png" alt="玄武の画像">');
} else if (localStorage.getItem('JA08_memo') == "2") {
    $("#PET_08").html('<img src="img/lose/L-8ゾンビ.png" alt="ゾンビの画像">');
} else if (localStorage.getItem('JA08_memo') == "3") {
    $("#PET_08").html('<img src="img/drow/D-8未.png" alt="未の画像">');
}
// 【9回目】結果を受けて、PETエリアに表示させる
if (localStorage.getItem('JA09_memo') == "1") {
    $("#PET_09").html('<img src="img/win/W-9白虎.png" alt="白虎の画像">');
} else if (localStorage.getItem('JA09_memo') == "2") {
    $("#PET_09").html('<img src="img/lose/L-9ミイラ男.png" alt="ミイラ男の画像">');
} else if (localStorage.getItem('JA09_memo') == "3") {
    $("#PET_09").html('<img src="img/drow/D-9申.png" alt="申の画像">');
}
// 【10回目】結果を受けて、PETエリアに表示させる
if (localStorage.getItem('JA10_memo') == "1") {
    $("#PET_10").html('<img src="img/win/W-10朱雀.png" alt="朱雀の画像">');
} else if (localStorage.getItem('JA10_memo') == "2") {
    $("#PET_10").html('<img src="img/lose/L-10フランケンシュタイン.png" alt="フランケンシュタインの画像">');
} else if (localStorage.getItem('JA10_memo') == "3") {
    $("#PET_10").html('<img src="img/drow/D-10酉.png" alt="酉の画像">');
}
// 【11回目】結果を受けて、PETエリアに表示させる
if (localStorage.getItem('JA11_memo') == "1") {
    $("#PET_11").html('<img src="img/win/W-11青龍.png" alt="青龍の画像">');
} else if (localStorage.getItem('JA11_memo') == "2") {
    $("#PET_11").html('<img src="img/lose/L-11人面犬.png" alt="人面犬の画像">');
} else if (localStorage.getItem('JA11_memo') == "3") {
    $("#PET_11").html('<img src="img/drow/D-11戌.png" alt="戌の画像">');
}
// 【12回目】結果を受けて、PETエリアに表示させる
if (localStorage.getItem('JA12_memo') == "1") {
    $("#PET_12").html('<img src="img/win/W-12麒麟.png" alt="麒麟の画像">');
} else if (localStorage.getItem('JA12_memo') == "2") {
    $("#PET_12").html('<img src="img/lose/L-12ケルベロス.png" alt="ケルベロスの画像">');
} else if (localStorage.getItem('JA12_memo') == "3") {
    $("#PET_12").html('<img src="img/drow/D-12亥.png" alt="亥の画像">');
}
// 【13回目】結果を受けて、PETエリアに表示させる
if (localStorage.getItem('JA13_memo') == "1") {
    $("#PET_13").html('<img src="img/win/W-13風神.png" alt="風神の画像">');
} else if (localStorage.getItem('JA13_memo') == "2") {
    $("#PET_13").html('<img src="img/lose/L-13ドラゴン.png" alt="ドラゴンの画像">');
} else if (localStorage.getItem('JA13_memo') == "3") {
    $("#PET_13").html('<img src="img/drow/D-13沙悟浄.png" alt="沙悟浄の画像">');
}
// 【14回目】結果を受けて、PETエリアに表示させる
if (localStorage.getItem('JA14_memo') == "1") {
    $("#PET_14").html('<img src="img/win/W-14雷神.png" alt="雷神の画像">');
} else if (localStorage.getItem('JA14_memo') == "2") {
    $("#PET_14").html('<img src="img/lose/L-14巨大ロボット.png" alt="巨大ロボットの画像">');
} else if (localStorage.getItem('JA14_memo') == "3") {
    $("#PET_14").html('<img src="img/drow/D-14猪八戒.png" alt="猪八戒の画像">');
}
// 【15回目】結果を受けて、PETエリアに表示させる
if (localStorage.getItem('JA15_memo') == "1") {
    $("#PET_15").html('<img src="img/win/W-15天照大御神.png" alt="天照大御神の画像">');
} else if (localStorage.getItem('JA15_memo') == "2") {
    $("#PET_15").html('<img src="img/lose/L-15貧乏神.png" alt="貧乏神の画像">');
} else if (localStorage.getItem('JA15_memo') == "3") {
    $("#PET_15").html('<img src="img/drow/D-15孫悟空.png" alt="孫悟空の画像">');
}


// スゴロクエリア、リロード表示
// 累計時間1
if (localStorage.getItem('Total_memo') == 1) {
    $(function () {
        $("#p15G").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p15G').css("background-color", "red");
    });
}
// 累計時間2
if (localStorage.getItem('Total_memo') == 2) {
    $(function () {
        $("#p15F").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p15F').css("background-color", "red");
        $('#p15G').css("background-color", "yellow");
    });
}
// 累計時間3
if (localStorage.getItem('Total_memo') == 3) {
    $(function () {
        $("#p15E").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p15E').css("background-color", "red");
        $('#p15G,#p15F')
            .css("background-color", "yellow");
    });
}
// 累計時間4
if (localStorage.getItem('Total_memo') == 4) {
    $(function () {
        $("#p15D").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p15D').css("background-color", "red");
        $('#p15G,#p15F,#p15E')
            .css("background-color", "yellow");
    });
}
// 累計時間5
if (localStorage.getItem('Total_memo') == 5) {
    $(function () {
        $("#p15C").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p15C').css("background-color", "red");
        $('#p15G,#p15F,#p15E,#p15D')
            .css("background-color", "yellow");
    });
}
// 累計時間6
if (localStorage.getItem('Total_memo') == 6) {
    $(function () {
        $("#p16C").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p16C').css("background-color", "red");
        $('#p15G,#p15F,#p15E,#p15D,#p15C')
            .css("background-color", "yellow");
    });
}
// 累計時間7
if (localStorage.getItem('Total_memo') == 7) {
    $(function () {
        $("#p16D").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p16D').css("background-color", "red");
        $('#p15G,#p15F,#p15E,#p15D,#p15C,#p16C')
            .css("background-color", "yellow");
    });
}
// 累計時間8
if (localStorage.getItem('Total_memo') == 8) {
    $(function () {
        $("#p16E").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p16E').css("background-color", "red");
        $('#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D')
            .css("background-color", "yellow");
    });
}
// 累計時間9
if (localStorage.getItem('Total_memo') == 9) {
    $(function () {
        $("#p16F").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p16F').css("background-color", "red");
        $('#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E')
            .css("background-color", "yellow");
    });
}
// 累計時間10
if (localStorage.getItem('Total_memo') == 10) {
    $(function () {
        $("#p17F").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p17F').css("background-color", "red");
        $('#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F')
            .css("background-color", "yellow");
    });
}
// 累計時間11
if (localStorage.getItem('Total_memo') == 11) {
    $(function () {
        $("#p17E").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p17E').css("background-color", "red");
        $('#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間12
if (localStorage.getItem('Total_memo') == 12) {
    $(function () {
        $("#p17D").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p17D').css("background-color", "red");
        $('#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間13
if (localStorage.getItem('Total_memo') == 13) {
    $(function () {
        $("#p18D").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p18D').css("background-color", "red");
        $('#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間14
if (localStorage.getItem('Total_memo') == 14) {
    $(function () {
        $("#p19D").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p19D').css("background-color", "red");
        $('#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間15
if (localStorage.getItem('Total_memo') == 15) {
    $(function () {
        $("#p19E").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p19E').css("background-color", "red");
        $('#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間16
if (localStorage.getItem('Total_memo') == 16) {
    $(function () {
        $("#p18E").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p18E').css("background-color", "red");
        $('#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間17
if (localStorage.getItem('Total_memo') == 17) {
    $(function () {
        $("#p18F").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p18F').css("background-color", "red");
        $('#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間18
if (localStorage.getItem('Total_memo') == 18) {
    $(function () {
        $("#p19F").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p19F').css("background-color", "red");
        $('#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間19
if (localStorage.getItem('Total_memo') == 19) {
    $(function () {
        $("#p19G").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p19G').css("background-color", "red");
        $('#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間20
if (localStorage.getItem('Total_memo') == 20) {
    $(function () {
        $("#p18G").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p18G').css("background-color", "red");
        $('#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間21
if (localStorage.getItem('Total_memo') == 21) {
    $(function () {
        $("#p17G").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p17G').css("background-color", "red");
        $('#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間22
if (localStorage.getItem('Total_memo') == 22) {
    $(function () {
        $("#p16G").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p16G').css("background-color", "red");
        $('#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間23
if (localStorage.getItem('Total_memo') == 23) {
    $(function () {
        $("#p15I").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p15I').css("background-color", "red");
        $('#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間24
if (localStorage.getItem('Total_memo') == 24) {
    $(function () {
        $("#p14I").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p14I').css("background-color", "red");
        $('#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間25
if (localStorage.getItem('Total_memo') == 25) {
    $(function () {
        $("#p13I").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p13I').css("background-color", "red");
        $('#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間26
if (localStorage.getItem('Total_memo') == 26) {
    $(function () {
        $("#p13J").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p13J').css("background-color", "red");
        $('#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間27
if (localStorage.getItem('Total_memo') == 27) {
    $(function () {
        $("#p14J").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p14J').css("background-color", "red");
        $('#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間28
if (localStorage.getItem('Total_memo') == 28) {
    $(function () {
        $("#p15J").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p15J').css("background-color", "red");
        $('#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間29
if (localStorage.getItem('Total_memo') == 29) {
    $(function () {
        $("#p15K").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p15K').css("background-color", "red");
        $('#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間30
if (localStorage.getItem('Total_memo') == 30) {
    $(function () {
        $("#p14K").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p14K').css("background-color", "red");
        $('#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間31
if (localStorage.getItem('Total_memo') == 31) {
    $(function () {
        $("#p13K").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p13K').css("background-color", "red");
        $('#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間32
if (localStorage.getItem('Total_memo') == 32) {
    $(function () {
        $("#p13L").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p13L').css("background-color", "red");
        $('#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間33
if (localStorage.getItem('Total_memo') == 33) {
    $(function () {
        $("#p14L").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p14L').css("background-color", "red");
        $('#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間34
if (localStorage.getItem('Total_memo') == 34) {
    $(function () {
        $("#p15L").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p15L').css("background-color", "red");
        $('#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間35
if (localStorage.getItem('Total_memo') == 35) {
    $(function () {
        $("#p17L").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p17L').css("background-color", "red");
        $('#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間36
if (localStorage.getItem('Total_memo') == 36) {
    $(function () {
        $("#p17K").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p17K').css("background-color", "red");
        $('#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間37
if (localStorage.getItem('Total_memo') == 37) {
    $(function () {
        $("#p17J").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p17J').css("background-color", "red");
        $('#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間38
if (localStorage.getItem('Total_memo') == 38) {
    $(function () {
        $("#p17I").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p17I').css("background-color", "red");
        $('#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間39
if (localStorage.getItem('Total_memo') == 39) {
    $(function () {
        $("#p18I").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p18I').css("background-color", "red");
        $('#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間40
if (localStorage.getItem('Total_memo') == 40) {
    $(function () {
        $("#p18J").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p18J').css("background-color", "red");
        $('#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間41
if (localStorage.getItem('Total_memo') == 41) {
    $(function () {
        $("#p18K").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p18K').css("background-color", "red");
        $('#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間42
if (localStorage.getItem('Total_memo') == 42) {
    $(function () {
        $("#p18L").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p18L').css("background-color", "red");
        $('#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間43
if (localStorage.getItem('Total_memo') == 43) {
    $(function () {
        $("#p18M").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p18M').css("background-color", "red");
        $('#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間44
if (localStorage.getItem('Total_memo') == 44) {
    $(function () {
        $("#p17M").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p17M').css("background-color", "red");
        $('#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間45
if (localStorage.getItem('Total_memo') == 45) {
    $(function () {
        $("#p15M").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p15M').css("background-color", "red");
        $('#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間46
if (localStorage.getItem('Total_memo') == 46) {
    $(function () {
        $("#p14M").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p14M').css("background-color", "red");
        $('#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間47
if (localStorage.getItem('Total_memo') == 47) {
    $(function () {
        $("#p13M").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p13M').css("background-color", "red");
        $('#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間48
if (localStorage.getItem('Total_memo') == 48) {
    $(function () {
        $("#p13N").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p13N').css("background-color", "red");
        $('#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間49
if (localStorage.getItem('Total_memo') == 49) {
    $(function () {
        $("#p14N").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p14N').css("background-color", "red");
        $('#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間50
if (localStorage.getItem('Total_memo') == 50) {
    $(function () {
        $("#p15N").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p15N').css("background-color", "red");
        $('#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間51
if (localStorage.getItem('Total_memo') == 51) {
    $(function () {
        $("#p15O").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p15O').css("background-color", "red");
        $('#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間52
if (localStorage.getItem('Total_memo') == 52) {
    $(function () {
        $("#p14O").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p14O').css("background-color", "red");
        $('#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間53
if (localStorage.getItem('Total_memo') == 53) {
    $(function () {
        $("#p13O").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p13O').css("background-color", "red");
        $('#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間54
if (localStorage.getItem('Total_memo') == 54) {
    $(function () {
        $("#p13P").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p13P').css("background-color", "red");
        $('#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間55
if (localStorage.getItem('Total_memo') == 55) {
    $(function () {
        $("#p12P").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p12P').css("background-color", "red");
        $('#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間56
if (localStorage.getItem('Total_memo') == 56) {
    $(function () {
        $("#p12Q").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p12Q').css("background-color", "red");
        $('#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間57
if (localStorage.getItem('Total_memo') == 57) {
    $(function () {
        $("#p13Q").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p13Q').css("background-color", "red");
        $('#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間58
if (localStorage.getItem('Total_memo') == 58) {
    $(function () {
        $("#p14Q").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p14Q').css("background-color", "red");
        $('#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間59
if (localStorage.getItem('Total_memo') == 59) {
    $(function () {
        $("#p14P").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p14P').css("background-color", "red");
        $('#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間60
if (localStorage.getItem('Total_memo') == 60) {
    $(function () {
        $("#p15P").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p15P').css("background-color", "red");
        $('#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間61
if (localStorage.getItem('Total_memo') == 61) {
    $(function () {
        $("#p16P").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p16P').css("background-color", "red");
        $('#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間62
if (localStorage.getItem('Total_memo') == 62) {
    $(function () {
        $("#p16O").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p16O').css("background-color", "red");
        $('#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間63
if (localStorage.getItem('Total_memo') == 63) {
    $(function () {
        $("#p17O").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p17O').css("background-color", "red");
        $('#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間64
if (localStorage.getItem('Total_memo') == 64) {
    $(function () {
        $("#p17P").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p17P').css("background-color", "red");
        $('#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間65
if (localStorage.getItem('Total_memo') == 65) {
    $(function () {
        $("#p17Q").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p17Q').css("background-color", "red");
        $('#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間66
if (localStorage.getItem('Total_memo') == 66) {
    $(function () {
        $("#p17R").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p17R').css("background-color", "red");
        $('#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間67
if (localStorage.getItem('Total_memo') == 67) {
    $(function () {
        $("#p16R").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p16R').css("background-color", "red");
        $('#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間68
if (localStorage.getItem('Total_memo') == 68) {
    $(function () {
        $("#p16Q").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p16Q').css("background-color", "red");
        $('#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間69
if (localStorage.getItem('Total_memo') == 69) {
    $(function () {
        $("#p15Q").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p15Q').css("background-color", "red");
        $('#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間70
if (localStorage.getItem('Total_memo') == 70) {
    $(function () {
        $("#p15R").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p15R').css("background-color", "red");
        $('#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間71
if (localStorage.getItem('Total_memo') == 71) {
    $(function () {
        $("#p14R").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p14R').css("background-color", "red");
        $('#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間72
if (localStorage.getItem('Total_memo') == 72) {
    $(function () {
        $("#p13R").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p13R').css("background-color", "red");
        $('#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間73
if (localStorage.getItem('Total_memo') == 73) {
    $(function () {
        $("#p12R").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p12R').css("background-color", "red");
        $('#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間74
if (localStorage.getItem('Total_memo') == 74) {
    $(function () {
        $("#p12S").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p12S').css("background-color", "red");
        $('#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間75
if (localStorage.getItem('Total_memo') == 75) {
    $(function () {
        $("#p13S").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p13S').css("background-color", "red");
        $('#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間76
if (localStorage.getItem('Total_memo') == 76) {
    $(function () {
        $("#p14S").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p14S').css("background-color", "red");
        $('#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間77
if (localStorage.getItem('Total_memo') == 77) {
    $(function () {
        $("#p15S").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p15S').css("background-color", "red");
        $('#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間78
if (localStorage.getItem('Total_memo') == 78) {
    $(function () {
        $("#p16S").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p16S').css("background-color", "red");
        $('#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間79
if (localStorage.getItem('Total_memo') == 79) {
    $(function () {
        $("#p16T").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p16T').css("background-color", "red");
        $('#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間80
if (localStorage.getItem('Total_memo') == 80) {
    $(function () {
        $("#p15T").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p15T').css("background-color", "red");
        $('#p16T,#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間81
if (localStorage.getItem('Total_memo') == 81) {
    $(function () {
        $("#p14T").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p14T').css("background-color", "red");
        $('#p15T,#p16T,#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間82
if (localStorage.getItem('Total_memo') == 82) {
    $(function () {
        $("#p13T").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p13T').css("background-color", "red");
        $('#p14T,#p15T,#p16T,#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間83
if (localStorage.getItem('Total_memo') == 83) {
    $(function () {
        $("#p12T").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p12T').css("background-color", "red");
        $('#p13T,#p14T,#p15T,#p16T,#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間84
if (localStorage.getItem('Total_memo') == 84) {
    $(function () {
        $("#p12U").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p12U').css("background-color", "red");
        $('#p12T,#p13T,#p14T,#p15T,#p16T,#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間85
if (localStorage.getItem('Total_memo') == 85) {
    $(function () {
        $("#p13U").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p13U').css("background-color", "red");
        $('#p12U,#p12T,#p13T,#p14T,#p15T,#p16T,#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間86
if (localStorage.getItem('Total_memo') == 86) {
    $(function () {
        $("#p14U").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p14U').css("background-color", "red");
        $('#p13U,#p12U,#p12T,#p13T,#p14T,#p15T,#p16T,#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間87
if (localStorage.getItem('Total_memo') == 87) {
    $(function () {
        $("#p15U").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p15U').css("background-color", "red");
        $('#p14U,#p13U,#p12U,#p12T,#p13T,#p14T,#p15T,#p16T,#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間88
if (localStorage.getItem('Total_memo') == 88) {
    $(function () {
        $("#p16U").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p16U').css("background-color", "red");
        $('#p15U,#p14U,#p13U,#p12U,#p12T,#p13T,#p14T,#p15T,#p16T,#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間89
if (localStorage.getItem('Total_memo') == 89) {
    $(function () {
        $("#p17U").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p17U').css("background-color", "red");
        $('#p16U,#p15U,#p14U,#p13U,#p12U,#p12T,#p13T,#p14T,#p15T,#p16T,#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間90
if (localStorage.getItem('Total_memo') == 90) {
    $(function () {
        $("#p17V").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p17V').css("background-color", "red");
        $('#p17U,#p16U,#p15U,#p14U,#p13U,#p12U,#p12T,#p13T,#p14T,#p15T,#p16T,#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間90
if (localStorage.getItem('Total_memo') == 90) {
    $(function () {
        $("#p17V").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p17V').css("background-color", "red");
        $('#p17U,#p16U,#p15U,#p14U,#p13U,#p12U,#p12T,#p13T,#p14T,#p15T,#p16T,#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間91
if (localStorage.getItem('Total_memo') == 91) {
    $(function () {
        $("#p16V").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p16V').css("background-color", "red");
        $('#p17V,#p17U,#p16U,#p15U,#p14U,#p13U,#p12U,#p12T,#p13T,#p14T,#p15T,#p16T,#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間92
if (localStorage.getItem('Total_memo') == 92) {
    $(function () {
        $("#p15V").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p15V').css("background-color", "red");
        $('#p16V,#p17V,#p17U,#p16U,#p15U,#p14U,#p13U,#p12U,#p12T,#p13T,#p14T,#p15T,#p16T,#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間93
if (localStorage.getItem('Total_memo') == 93) {
    $(function () {
        $("#p14V").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p14V').css("background-color", "red");
        $('#p15V,#p16V,#p17V,#p17U,#p16U,#p15U,#p14U,#p13U,#p12U,#p12T,#p13T,#p14T,#p15T,#p16T,#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間94
if (localStorage.getItem('Total_memo') == 94) {
    $(function () {
        $("#p13V").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p13V').css("background-color", "red");
        $('#p14V,#p15V,#p16V,#p17V,#p17U,#p16U,#p15U,#p14U,#p13U,#p12U,#p12T,#p13T,#p14T,#p15T,#p16T,#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間95
if (localStorage.getItem('Total_memo') == 95) {
    $(function () {
        $("#p12V").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p12V').css("background-color", "red");
        $('#p13V,#p14V,#p15V,#p16V,#p17V,#p17U,#p16U,#p15U,#p14U,#p13U,#p12U,#p12T,#p13T,#p14T,#p15T,#p16T,#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間96
if (localStorage.getItem('Total_memo') == 96) {
    $(function () {
        $("#p12W").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p12W').css("background-color", "red");
        $('#p12V,#p13V,#p14V,#p15V,#p16V,#p17V,#p17U,#p16U,#p15U,#p14U,#p13U,#p12U,#p12T,#p13T,#p14T,#p15T,#p16T,#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間97
if (localStorage.getItem('Total_memo') == 97) {
    $(function () {
        $("#p13W").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p13W').css("background-color", "red");
        $('#p12W,#p12V,#p13V,#p14V,#p15V,#p16V,#p17V,#p17U,#p16U,#p15U,#p14U,#p13U,#p12U,#p12T,#p13T,#p14T,#p15T,#p16T,#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間98
if (localStorage.getItem('Total_memo') == 98) {
    $(function () {
        $("#p14W").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p14W').css("background-color", "red");
        $('#p13W,#p12W,#p12V,#p13V,#p14V,#p15V,#p16V,#p17V,#p17U,#p16U,#p15U,#p14U,#p13U,#p12U,#p12T,#p13T,#p14T,#p15T,#p16T,#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間99
if (localStorage.getItem('Total_memo') == 99) {
    $(function () {
        $("#p15W").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p15W').css("background-color", "red");
        $('#p14W,#p13W,#p12W,#p12V,#p13V,#p14V,#p15V,#p16V,#p17V,#p17U,#p16U,#p15U,#p14U,#p13U,#p12U,#p12T,#p13T,#p14T,#p15T,#p16T,#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間100
if (localStorage.getItem('Total_memo') == 100) {
    $(function () {
        $("#p16W").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p16W').css("background-color", "red");
        $('#p15W,#p14W,#p13W,#p12W,#p12V,#p13V,#p14V,#p15V,#p16V,#p17V,#p17U,#p16U,#p15U,#p14U,#p13U,#p12U,#p12T,#p13T,#p14T,#p15T,#p16T,#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間101
if (localStorage.getItem('Total_memo') == 101) {
    $(function () {
        $("#p17W").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p17W').css("background-color", "red");
        $('#p16W,#p15W,#p14W,#p13W,#p12W,#p12V,#p13V,#p14V,#p15V,#p16V,#p17V,#p17U,#p16U,#p15U,#p14U,#p13U,#p12U,#p12T,#p13T,#p14T,#p15T,#p16T,#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間102
if (localStorage.getItem('Total_memo') == 102) {
    $(function () {
        $("#p16X").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p16X').css("background-color", "red");
        $('#p17W,#p16W,#p15W,#p14W,#p13W,#p12W,#p12V,#p13V,#p14V,#p15V,#p16V,#p17V,#p17U,#p16U,#p15U,#p14U,#p13U,#p12U,#p12T,#p13T,#p14T,#p15T,#p16T,#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間103
if (localStorage.getItem('Total_memo') == 103) {
    $(function () {
        $("#p15X").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p15X').css("background-color", "red");
        $('#p16X,#p17W,#p16W,#p15W,#p14W,#p13W,#p12W,#p12V,#p13V,#p14V,#p15V,#p16V,#p17V,#p17U,#p16U,#p15U,#p14U,#p13U,#p12U,#p12T,#p13T,#p14T,#p15T,#p16T,#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間104
if (localStorage.getItem('Total_memo') == 104) {
    $(function () {
        $("#p14X").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p14X').css("background-color", "red");
        $('#p15X,#p16X,#p17W,#p16W,#p15W,#p14W,#p13W,#p12W,#p12V,#p13V,#p14V,#p15V,#p16V,#p17V,#p17U,#p16U,#p15U,#p14U,#p13U,#p12U,#p12T,#p13T,#p14T,#p15T,#p16T,#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間105
if (localStorage.getItem('Total_memo') == 105) {
    $(function () {
        $("#p13X").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p13X').css("background-color", "red");
        $('#p14X,#p15X,#p16X,#p17W,#p16W,#p15W,#p14W,#p13W,#p12W,#p12V,#p13V,#p14V,#p15V,#p16V,#p17V,#p17U,#p16U,#p15U,#p14U,#p13U,#p12U,#p12T,#p13T,#p14T,#p15T,#p16T,#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間106
if (localStorage.getItem('Total_memo') == 106) {
    $(function () {
        $("#p12X").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p12X').css("background-color", "red");
        $('#p13X,#p14X,#p15X,#p16X,#p17W,#p16W,#p15W,#p14W,#p13W,#p12W,#p12V,#p13V,#p14V,#p15V,#p16V,#p17V,#p17U,#p16U,#p15U,#p14U,#p13U,#p12U,#p12T,#p13T,#p14T,#p15T,#p16T,#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間107
if (localStorage.getItem('Total_memo') == 107) {
    $(function () {
        $("#p11X").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p11X').css("background-color", "red");
        $('#p12X,#p13X,#p14X,#p15X,#p16X,#p17W,#p16W,#p15W,#p14W,#p13W,#p12W,#p12V,#p13V,#p14V,#p15V,#p16V,#p17V,#p17U,#p16U,#p15U,#p14U,#p13U,#p12U,#p12T,#p13T,#p14T,#p15T,#p16T,#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間108
if (localStorage.getItem('Total_memo') == 108) {
    $(function () {
        $("#p11W").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p11W').css("background-color", "red");
        $('#p11X,#p12X,#p13X,#p14X,#p15X,#p16X,#p17W,#p16W,#p15W,#p14W,#p13W,#p12W,#p12V,#p13V,#p14V,#p15V,#p16V,#p17V,#p17U,#p16U,#p15U,#p14U,#p13U,#p12U,#p12T,#p13T,#p14T,#p15T,#p16T,#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間109
if (localStorage.getItem('Total_memo') == 109) {
    $(function () {
        $("#p11V").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p11V').css("background-color", "red");
        $('#p11W,#p11X,#p12X,#p13X,#p14X,#p15X,#p16X,#p17W,#p16W,#p15W,#p14W,#p13W,#p12W,#p12V,#p13V,#p14V,#p15V,#p16V,#p17V,#p17U,#p16U,#p15U,#p14U,#p13U,#p12U,#p12T,#p13T,#p14T,#p15T,#p16T,#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間110
if (localStorage.getItem('Total_memo') == 110) {
    $(function () {
        $("#p11U").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p11U').css("background-color", "red");
        $('#p11V,#p11W,#p11X,#p12X,#p13X,#p14X,#p15X,#p16X,#p17W,#p16W,#p15W,#p14W,#p13W,#p12W,#p12V,#p13V,#p14V,#p15V,#p16V,#p17V,#p17U,#p16U,#p15U,#p14U,#p13U,#p12U,#p12T,#p13T,#p14T,#p15T,#p16T,#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間111
if (localStorage.getItem('Total_memo') == 111) {
    $(function () {
        $("#p10U").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p10U').css("background-color", "red");
        $('#p11U,#p11V,#p11W,#p11X,#p12X,#p13X,#p14X,#p15X,#p16X,#p17W,#p16W,#p15W,#p14W,#p13W,#p12W,#p12V,#p13V,#p14V,#p15V,#p16V,#p17V,#p17U,#p16U,#p15U,#p14U,#p13U,#p12U,#p12T,#p13T,#p14T,#p15T,#p16T,#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間112
if (localStorage.getItem('Total_memo') == 112) {
    $(function () {
        $("#p10V").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p10V').css("background-color", "red");
        $('#p10U,#p11U,#p11V,#p11W,#p11X,#p12X,#p13X,#p14X,#p15X,#p16X,#p17W,#p16W,#p15W,#p14W,#p13W,#p12W,#p12V,#p13V,#p14V,#p15V,#p16V,#p17V,#p17U,#p16U,#p15U,#p14U,#p13U,#p12U,#p12T,#p13T,#p14T,#p15T,#p16T,#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間113
if (localStorage.getItem('Total_memo') == 113) {
    $(function () {
        $("#p10W").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p10W').css("background-color", "red");
        $('#p10V,#p10U,#p11U,#p11V,#p11W,#p11X,#p12X,#p13X,#p14X,#p15X,#p16X,#p17W,#p16W,#p15W,#p14W,#p13W,#p12W,#p12V,#p13V,#p14V,#p15V,#p16V,#p17V,#p17U,#p16U,#p15U,#p14U,#p13U,#p12U,#p12T,#p13T,#p14T,#p15T,#p16T,#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間114
if (localStorage.getItem('Total_memo') == 114) {
    $(function () {
        $("#p10X").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p10X').css("background-color", "red");
        $('#p10W,#p10V,#p10U,#p11U,#p11V,#p11W,#p11X,#p12X,#p13X,#p14X,#p15X,#p16X,#p17W,#p16W,#p15W,#p14W,#p13W,#p12W,#p12V,#p13V,#p14V,#p15V,#p16V,#p17V,#p17U,#p16U,#p15U,#p14U,#p13U,#p12U,#p12T,#p13T,#p14T,#p15T,#p16T,#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間115
if (localStorage.getItem('Total_memo') == 115) {
    $(function () {
        $("#p9X").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p9X').css("background-color", "red");
        $('#p10X,#p10W,#p10V,#p10U,#p11U,#p11V,#p11W,#p11X,#p12X,#p13X,#p14X,#p15X,#p16X,#p17W,#p16W,#p15W,#p14W,#p13W,#p12W,#p12V,#p13V,#p14V,#p15V,#p16V,#p17V,#p17U,#p16U,#p15U,#p14U,#p13U,#p12U,#p12T,#p13T,#p14T,#p15T,#p16T,#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間116
if (localStorage.getItem('Total_memo') == 116) {
    $(function () {
        $("#p9W").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p9W').css("background-color", "red");
        $('#p9X,#p10X,#p10W,#p10V,#p10U,#p11U,#p11V,#p11W,#p11X,#p12X,#p13X,#p14X,#p15X,#p16X,#p17W,#p16W,#p15W,#p14W,#p13W,#p12W,#p12V,#p13V,#p14V,#p15V,#p16V,#p17V,#p17U,#p16U,#p15U,#p14U,#p13U,#p12U,#p12T,#p13T,#p14T,#p15T,#p16T,#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間117
if (localStorage.getItem('Total_memo') == 117) {
    $(function () {
        $("#p9V").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p9V').css("background-color", "red");
        $('#p9W,#p9X,#p10X,#p10W,#p10V,#p10U,#p11U,#p11V,#p11W,#p11X,#p12X,#p13X,#p14X,#p15X,#p16X,#p17W,#p16W,#p15W,#p14W,#p13W,#p12W,#p12V,#p13V,#p14V,#p15V,#p16V,#p17V,#p17U,#p16U,#p15U,#p14U,#p13U,#p12U,#p12T,#p13T,#p14T,#p15T,#p16T,#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間118
if (localStorage.getItem('Total_memo') == 118) {
    $(function () {
        $("#p9U").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p9U').css("background-color", "red");
        $('#p9V,#p9W,#p9X,#p10X,#p10W,#p10V,#p10U,#p11U,#p11V,#p11W,#p11X,#p12X,#p13X,#p14X,#p15X,#p16X,#p17W,#p16W,#p15W,#p14W,#p13W,#p12W,#p12V,#p13V,#p14V,#p15V,#p16V,#p17V,#p17U,#p16U,#p15U,#p14U,#p13U,#p12U,#p12T,#p13T,#p14T,#p15T,#p16T,#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間119
if (localStorage.getItem('Total_memo') == 119) {
    $(function () {
        $("#p8U").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p8U').css("background-color", "red");
        $('#p9U,#p9V,#p9W,#p9X,#p10X,#p10W,#p10V,#p10U,#p11U,#p11V,#p11W,#p11X,#p12X,#p13X,#p14X,#p15X,#p16X,#p17W,#p16W,#p15W,#p14W,#p13W,#p12W,#p12V,#p13V,#p14V,#p15V,#p16V,#p17V,#p17U,#p16U,#p15U,#p14U,#p13U,#p12U,#p12T,#p13T,#p14T,#p15T,#p16T,#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間120
if (localStorage.getItem('Total_memo') == 120) {
    $(function () {
        $("#p8V").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p8V').css("background-color", "red");
        $('#p8U,#p9U,#p9V,#p9W,#p9X,#p10X,#p10W,#p10V,#p10U,#p11U,#p11V,#p11W,#p11X,#p12X,#p13X,#p14X,#p15X,#p16X,#p17W,#p16W,#p15W,#p14W,#p13W,#p12W,#p12V,#p13V,#p14V,#p15V,#p16V,#p17V,#p17U,#p16U,#p15U,#p14U,#p13U,#p12U,#p12T,#p13T,#p14T,#p15T,#p16T,#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間121
if (localStorage.getItem('Total_memo') == 121) {
    $(function () {
        $("#p8W").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p8W').css("background-color", "red");
        $('#p8V,#p8U,#p9U,#p9V,#p9W,#p9X,#p10X,#p10W,#p10V,#p10U,#p11U,#p11V,#p11W,#p11X,#p12X,#p13X,#p14X,#p15X,#p16X,#p17W,#p16W,#p15W,#p14W,#p13W,#p12W,#p12V,#p13V,#p14V,#p15V,#p16V,#p17V,#p17U,#p16U,#p15U,#p14U,#p13U,#p12U,#p12T,#p13T,#p14T,#p15T,#p16T,#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間122
if (localStorage.getItem('Total_memo') == 122) {
    $(function () {
        $("#p8X").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p8X').css("background-color", "red");
        $('#p8W,#p8V,#p8U,#p9U,#p9V,#p9W,#p9X,#p10X,#p10W,#p10V,#p10U,#p11U,#p11V,#p11W,#p11X,#p12X,#p13X,#p14X,#p15X,#p16X,#p17W,#p16W,#p15W,#p14W,#p13W,#p12W,#p12V,#p13V,#p14V,#p15V,#p16V,#p17V,#p17U,#p16U,#p15U,#p14U,#p13U,#p12U,#p12T,#p13T,#p14T,#p15T,#p16T,#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間123
if (localStorage.getItem('Total_memo') == 123) {
    $(function () {
        $("#p7X").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p7X').css("background-color", "red");
        $('#p8X,#p8W,#p8V,#p8U,#p9U,#p9V,#p9W,#p9X,#p10X,#p10W,#p10V,#p10U,#p11U,#p11V,#p11W,#p11X,#p12X,#p13X,#p14X,#p15X,#p16X,#p17W,#p16W,#p15W,#p14W,#p13W,#p12W,#p12V,#p13V,#p14V,#p15V,#p16V,#p17V,#p17U,#p16U,#p15U,#p14U,#p13U,#p12U,#p12T,#p13T,#p14T,#p15T,#p16T,#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間124
if (localStorage.getItem('Total_memo') == 124) {
    $(function () {
        $("#p7W").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p7W').css("background-color", "red");
        $('#p7X,#p8X,#p8W,#p8V,#p8U,#p9U,#p9V,#p9W,#p9X,#p10X,#p10W,#p10V,#p10U,#p11U,#p11V,#p11W,#p11X,#p12X,#p13X,#p14X,#p15X,#p16X,#p17W,#p16W,#p15W,#p14W,#p13W,#p12W,#p12V,#p13V,#p14V,#p15V,#p16V,#p17V,#p17U,#p16U,#p15U,#p14U,#p13U,#p12U,#p12T,#p13T,#p14T,#p15T,#p16T,#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間125
if (localStorage.getItem('Total_memo') == 125) {
    $(function () {
        $("#p7V").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p7V').css("background-color", "red");
        $('#p7W,#p7X,#p8X,#p8W,#p8V,#p8U,#p9U,#p9V,#p9W,#p9X,#p10X,#p10W,#p10V,#p10U,#p11U,#p11V,#p11W,#p11X,#p12X,#p13X,#p14X,#p15X,#p16X,#p17W,#p16W,#p15W,#p14W,#p13W,#p12W,#p12V,#p13V,#p14V,#p15V,#p16V,#p17V,#p17U,#p16U,#p15U,#p14U,#p13U,#p12U,#p12T,#p13T,#p14T,#p15T,#p16T,#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間126
if (localStorage.getItem('Total_memo') == 126) {
    $(function () {
        $("#p7U").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p7U').css("background-color", "red");
        $('#p7V,#p7W,#p7X,#p8X,#p8W,#p8V,#p8U,#p9U,#p9V,#p9W,#p9X,#p10X,#p10W,#p10V,#p10U,#p11U,#p11V,#p11W,#p11X,#p12X,#p13X,#p14X,#p15X,#p16X,#p17W,#p16W,#p15W,#p14W,#p13W,#p12W,#p12V,#p13V,#p14V,#p15V,#p16V,#p17V,#p17U,#p16U,#p15U,#p14U,#p13U,#p12U,#p12T,#p13T,#p14T,#p15T,#p16T,#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間127
if (localStorage.getItem('Total_memo') == 127) {
    $(function () {
        $("#p5U").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p5U').css("background-color", "red");
        $('#p7U,#p7V,#p7W,#p7X,#p8X,#p8W,#p8V,#p8U,#p9U,#p9V,#p9W,#p9X,#p10X,#p10W,#p10V,#p10U,#p11U,#p11V,#p11W,#p11X,#p12X,#p13X,#p14X,#p15X,#p16X,#p17W,#p16W,#p15W,#p14W,#p13W,#p12W,#p12V,#p13V,#p14V,#p15V,#p16V,#p17V,#p17U,#p16U,#p15U,#p14U,#p13U,#p12U,#p12T,#p13T,#p14T,#p15T,#p16T,#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間128
if (localStorage.getItem('Total_memo') == 128) {
    $(function () {
        $("#p4U").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p4U').css("background-color", "red");
        $('#p5U,#p7U,#p7V,#p7W,#p7X,#p8X,#p8W,#p8V,#p8U,#p9U,#p9V,#p9W,#p9X,#p10X,#p10W,#p10V,#p10U,#p11U,#p11V,#p11W,#p11X,#p12X,#p13X,#p14X,#p15X,#p16X,#p17W,#p16W,#p15W,#p14W,#p13W,#p12W,#p12V,#p13V,#p14V,#p15V,#p16V,#p17V,#p17U,#p16U,#p15U,#p14U,#p13U,#p12U,#p12T,#p13T,#p14T,#p15T,#p16T,#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間129
if (localStorage.getItem('Total_memo') == 129) {
    $(function () {
        $("#p3U").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p3U').css("background-color", "red");
        $('#p4U,#p5U,#p7U,#p7V,#p7W,#p7X,#p8X,#p8W,#p8V,#p8U,#p9U,#p9V,#p9W,#p9X,#p10X,#p10W,#p10V,#p10U,#p11U,#p11V,#p11W,#p11X,#p12X,#p13X,#p14X,#p15X,#p16X,#p17W,#p16W,#p15W,#p14W,#p13W,#p12W,#p12V,#p13V,#p14V,#p15V,#p16V,#p17V,#p17U,#p16U,#p15U,#p14U,#p13U,#p12U,#p12T,#p13T,#p14T,#p15T,#p16T,#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間130
if (localStorage.getItem('Total_memo') == 130) {
    $(function () {
        $("#p2U").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p2U').css("background-color", "red");
        $('#p3U,#p4U,#p5U,#p7U,#p7V,#p7W,#p7X,#p8X,#p8W,#p8V,#p8U,#p9U,#p9V,#p9W,#p9X,#p10X,#p10W,#p10V,#p10U,#p11U,#p11V,#p11W,#p11X,#p12X,#p13X,#p14X,#p15X,#p16X,#p17W,#p16W,#p15W,#p14W,#p13W,#p12W,#p12V,#p13V,#p14V,#p15V,#p16V,#p17V,#p17U,#p16U,#p15U,#p14U,#p13U,#p12U,#p12T,#p13T,#p14T,#p15T,#p16T,#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間131
if (localStorage.getItem('Total_memo') == 131) {
    $(function () {
        $("#p2V").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p2V').css("background-color", "red");
        $('#p2U,#p3U,#p4U,#p5U,#p7U,#p7V,#p7W,#p7X,#p8X,#p8W,#p8V,#p8U,#p9U,#p9V,#p9W,#p9X,#p10X,#p10W,#p10V,#p10U,#p11U,#p11V,#p11W,#p11X,#p12X,#p13X,#p14X,#p15X,#p16X,#p17W,#p16W,#p15W,#p14W,#p13W,#p12W,#p12V,#p13V,#p14V,#p15V,#p16V,#p17V,#p17U,#p16U,#p15U,#p14U,#p13U,#p12U,#p12T,#p13T,#p14T,#p15T,#p16T,#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間132
if (localStorage.getItem('Total_memo') == 132) {
    $(function () {
        $("#p3V").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p3V').css("background-color", "red");
        $('#p2V,#p2U,#p3U,#p4U,#p5U,#p7U,#p7V,#p7W,#p7X,#p8X,#p8W,#p8V,#p8U,#p9U,#p9V,#p9W,#p9X,#p10X,#p10W,#p10V,#p10U,#p11U,#p11V,#p11W,#p11X,#p12X,#p13X,#p14X,#p15X,#p16X,#p17W,#p16W,#p15W,#p14W,#p13W,#p12W,#p12V,#p13V,#p14V,#p15V,#p16V,#p17V,#p17U,#p16U,#p15U,#p14U,#p13U,#p12U,#p12T,#p13T,#p14T,#p15T,#p16T,#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間133
if (localStorage.getItem('Total_memo') == 133) {
    $(function () {
        $("#p4V").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p4V').css("background-color", "red");
        $('#p3V,#p2V,#p2U,#p3U,#p4U,#p5U,#p7U,#p7V,#p7W,#p7X,#p8X,#p8W,#p8V,#p8U,#p9U,#p9V,#p9W,#p9X,#p10X,#p10W,#p10V,#p10U,#p11U,#p11V,#p11W,#p11X,#p12X,#p13X,#p14X,#p15X,#p16X,#p17W,#p16W,#p15W,#p14W,#p13W,#p12W,#p12V,#p13V,#p14V,#p15V,#p16V,#p17V,#p17U,#p16U,#p15U,#p14U,#p13U,#p12U,#p12T,#p13T,#p14T,#p15T,#p16T,#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間134
if (localStorage.getItem('Total_memo') == 134) {
    $(function () {
        $("#p5V").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p5V').css("background-color", "red");
        $('#p4V,#p3V,#p2V,#p2U,#p3U,#p4U,#p5U,#p7U,#p7V,#p7W,#p7X,#p8X,#p8W,#p8V,#p8U,#p9U,#p9V,#p9W,#p9X,#p10X,#p10W,#p10V,#p10U,#p11U,#p11V,#p11W,#p11X,#p12X,#p13X,#p14X,#p15X,#p16X,#p17W,#p16W,#p15W,#p14W,#p13W,#p12W,#p12V,#p13V,#p14V,#p15V,#p16V,#p17V,#p17U,#p16U,#p15U,#p14U,#p13U,#p12U,#p12T,#p13T,#p14T,#p15T,#p16T,#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間135
if (localStorage.getItem('Total_memo') == 135) {
    $(function () {
        $("#p5W").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p5W').css("background-color", "red");
        $('#p5V,#p4V,#p3V,#p2V,#p2U,#p3U,#p4U,#p5U,#p7U,#p7V,#p7W,#p7X,#p8X,#p8W,#p8V,#p8U,#p9U,#p9V,#p9W,#p9X,#p10X,#p10W,#p10V,#p10U,#p11U,#p11V,#p11W,#p11X,#p12X,#p13X,#p14X,#p15X,#p16X,#p17W,#p16W,#p15W,#p14W,#p13W,#p12W,#p12V,#p13V,#p14V,#p15V,#p16V,#p17V,#p17U,#p16U,#p15U,#p14U,#p13U,#p12U,#p12T,#p13T,#p14T,#p15T,#p16T,#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間136
if (localStorage.getItem('Total_memo') == 136) {
    $(function () {
        $("#p4W").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p4W').css("background-color", "red");
        $('#p5W,#p5V,#p4V,#p3V,#p2V,#p2U,#p3U,#p4U,#p5U,#p7U,#p7V,#p7W,#p7X,#p8X,#p8W,#p8V,#p8U,#p9U,#p9V,#p9W,#p9X,#p10X,#p10W,#p10V,#p10U,#p11U,#p11V,#p11W,#p11X,#p12X,#p13X,#p14X,#p15X,#p16X,#p17W,#p16W,#p15W,#p14W,#p13W,#p12W,#p12V,#p13V,#p14V,#p15V,#p16V,#p17V,#p17U,#p16U,#p15U,#p14U,#p13U,#p12U,#p12T,#p13T,#p14T,#p15T,#p16T,#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間137
if (localStorage.getItem('Total_memo') == 137) {
    $(function () {
        $("#p3W").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p3W').css("background-color", "red");
        $('#p4W,#p5W,#p5V,#p4V,#p3V,#p2V,#p2U,#p3U,#p4U,#p5U,#p7U,#p7V,#p7W,#p7X,#p8X,#p8W,#p8V,#p8U,#p9U,#p9V,#p9W,#p9X,#p10X,#p10W,#p10V,#p10U,#p11U,#p11V,#p11W,#p11X,#p12X,#p13X,#p14X,#p15X,#p16X,#p17W,#p16W,#p15W,#p14W,#p13W,#p12W,#p12V,#p13V,#p14V,#p15V,#p16V,#p17V,#p17U,#p16U,#p15U,#p14U,#p13U,#p12U,#p12T,#p13T,#p14T,#p15T,#p16T,#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間138
if (localStorage.getItem('Total_memo') == 138) {
    $(function () {
        $("#p2W").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p2W').css("background-color", "red");
        $('#p3W,#p4W,#p5W,#p5V,#p4V,#p3V,#p2V,#p2U,#p3U,#p4U,#p5U,#p7U,#p7V,#p7W,#p7X,#p8X,#p8W,#p8V,#p8U,#p9U,#p9V,#p9W,#p9X,#p10X,#p10W,#p10V,#p10U,#p11U,#p11V,#p11W,#p11X,#p12X,#p13X,#p14X,#p15X,#p16X,#p17W,#p16W,#p15W,#p14W,#p13W,#p12W,#p12V,#p13V,#p14V,#p15V,#p16V,#p17V,#p17U,#p16U,#p15U,#p14U,#p13U,#p12U,#p12T,#p13T,#p14T,#p15T,#p16T,#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間139
if (localStorage.getItem('Total_memo') == 139) {
    $(function () {
        $("#p2X").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p2X').css("background-color", "red");
        $('#p2W,#p3W,#p4W,#p5W,#p5V,#p4V,#p3V,#p2V,#p2U,#p3U,#p4U,#p5U,#p7U,#p7V,#p7W,#p7X,#p8X,#p8W,#p8V,#p8U,#p9U,#p9V,#p9W,#p9X,#p10X,#p10W,#p10V,#p10U,#p11U,#p11V,#p11W,#p11X,#p12X,#p13X,#p14X,#p15X,#p16X,#p17W,#p16W,#p15W,#p14W,#p13W,#p12W,#p12V,#p13V,#p14V,#p15V,#p16V,#p17V,#p17U,#p16U,#p15U,#p14U,#p13U,#p12U,#p12T,#p13T,#p14T,#p15T,#p16T,#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間140
if (localStorage.getItem('Total_memo') == 140) {
    $(function () {
        $("#p3X").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p3X').css("background-color", "red");
        $('#p2X,#p2W,#p3W,#p4W,#p5W,#p5V,#p4V,#p3V,#p2V,#p2U,#p3U,#p4U,#p5U,#p7U,#p7V,#p7W,#p7X,#p8X,#p8W,#p8V,#p8U,#p9U,#p9V,#p9W,#p9X,#p10X,#p10W,#p10V,#p10U,#p11U,#p11V,#p11W,#p11X,#p12X,#p13X,#p14X,#p15X,#p16X,#p17W,#p16W,#p15W,#p14W,#p13W,#p12W,#p12V,#p13V,#p14V,#p15V,#p16V,#p17V,#p17U,#p16U,#p15U,#p14U,#p13U,#p12U,#p12T,#p13T,#p14T,#p15T,#p16T,#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間141
if (localStorage.getItem('Total_memo') == 141) {
    $(function () {
        $("#p4X").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p4X').css("background-color", "red");
        $('#p3X,#p2X,#p2W,#p3W,#p4W,#p5W,#p5V,#p4V,#p3V,#p2V,#p2U,#p3U,#p4U,#p5U,#p7U,#p7V,#p7W,#p7X,#p8X,#p8W,#p8V,#p8U,#p9U,#p9V,#p9W,#p9X,#p10X,#p10W,#p10V,#p10U,#p11U,#p11V,#p11W,#p11X,#p12X,#p13X,#p14X,#p15X,#p16X,#p17W,#p16W,#p15W,#p14W,#p13W,#p12W,#p12V,#p13V,#p14V,#p15V,#p16V,#p17V,#p17U,#p16U,#p15U,#p14U,#p13U,#p12U,#p12T,#p13T,#p14T,#p15T,#p16T,#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間142
if (localStorage.getItem('Total_memo') == 142) {
    $(function () {
        $("#p5X").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p5X').css("background-color", "red");
        $('#p4X,#p3X,#p2X,#p2W,#p3W,#p4W,#p5W,#p5V,#p4V,#p3V,#p2V,#p2U,#p3U,#p4U,#p5U,#p7U,#p7V,#p7W,#p7X,#p8X,#p8W,#p8V,#p8U,#p9U,#p9V,#p9W,#p9X,#p10X,#p10W,#p10V,#p10U,#p11U,#p11V,#p11W,#p11X,#p12X,#p13X,#p14X,#p15X,#p16X,#p17W,#p16W,#p15W,#p14W,#p13W,#p12W,#p12V,#p13V,#p14V,#p15V,#p16V,#p17V,#p17U,#p16U,#p15U,#p14U,#p13U,#p12U,#p12T,#p13T,#p14T,#p15T,#p16T,#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間143
if (localStorage.getItem('Total_memo') == 143) {
    $(function () {
        $("#p5Y").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p5Y').css("background-color", "red");
        $('#p5X,#p4X,#p3X,#p2X,#p2W,#p3W,#p4W,#p5W,#p5V,#p4V,#p3V,#p2V,#p2U,#p3U,#p4U,#p5U,#p7U,#p7V,#p7W,#p7X,#p8X,#p8W,#p8V,#p8U,#p9U,#p9V,#p9W,#p9X,#p10X,#p10W,#p10V,#p10U,#p11U,#p11V,#p11W,#p11X,#p12X,#p13X,#p14X,#p15X,#p16X,#p17W,#p16W,#p15W,#p14W,#p13W,#p12W,#p12V,#p13V,#p14V,#p15V,#p16V,#p17V,#p17U,#p16U,#p15U,#p14U,#p13U,#p12U,#p12T,#p13T,#p14T,#p15T,#p16T,#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間144
if (localStorage.getItem('Total_memo') == 144) {
    $(function () {
        $("#p4Y").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p4Y').css("background-color", "red");
        $('#p5Y,#p5X,#p4X,#p3X,#p2X,#p2W,#p3W,#p4W,#p5W,#p5V,#p4V,#p3V,#p2V,#p2U,#p3U,#p4U,#p5U,#p7U,#p7V,#p7W,#p7X,#p8X,#p8W,#p8V,#p8U,#p9U,#p9V,#p9W,#p9X,#p10X,#p10W,#p10V,#p10U,#p11U,#p11V,#p11W,#p11X,#p12X,#p13X,#p14X,#p15X,#p16X,#p17W,#p16W,#p15W,#p14W,#p13W,#p12W,#p12V,#p13V,#p14V,#p15V,#p16V,#p17V,#p17U,#p16U,#p15U,#p14U,#p13U,#p12U,#p12T,#p13T,#p14T,#p15T,#p16T,#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間145
if (localStorage.getItem('Total_memo') == 145) {
    $(function () {
        $("#p3Y").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p3Y').css("background-color", "red");
        $('#p4Y,#p5Y,#p5X,#p4X,#p3X,#p2X,#p2W,#p3W,#p4W,#p5W,#p5V,#p4V,#p3V,#p2V,#p2U,#p3U,#p4U,#p5U,#p7U,#p7V,#p7W,#p7X,#p8X,#p8W,#p8V,#p8U,#p9U,#p9V,#p9W,#p9X,#p10X,#p10W,#p10V,#p10U,#p11U,#p11V,#p11W,#p11X,#p12X,#p13X,#p14X,#p15X,#p16X,#p17W,#p16W,#p15W,#p14W,#p13W,#p12W,#p12V,#p13V,#p14V,#p15V,#p16V,#p17V,#p17U,#p16U,#p15U,#p14U,#p13U,#p12U,#p12T,#p13T,#p14T,#p15T,#p16T,#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間146
if (localStorage.getItem('Total_memo') == 146) {
    $(function () {
        $("#p2Y").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p2Y').css("background-color", "red");
        $('#p3Y,#p4Y,#p5Y,#p5X,#p4X,#p3X,#p2X,#p2W,#p3W,#p4W,#p5W,#p5V,#p4V,#p3V,#p2V,#p2U,#p3U,#p4U,#p5U,#p7U,#p7V,#p7W,#p7X,#p8X,#p8W,#p8V,#p8U,#p9U,#p9V,#p9W,#p9X,#p10X,#p10W,#p10V,#p10U,#p11U,#p11V,#p11W,#p11X,#p12X,#p13X,#p14X,#p15X,#p16X,#p17W,#p16W,#p15W,#p14W,#p13W,#p12W,#p12V,#p13V,#p14V,#p15V,#p16V,#p17V,#p17U,#p16U,#p15U,#p14U,#p13U,#p12U,#p12T,#p13T,#p14T,#p15T,#p16T,#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間147
if (localStorage.getItem('Total_memo') == 147) {
    $(function () {
        $("#p21B").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p21B').css("background-color", "red");
        $('#p2Y,#p3Y,#p4Y,#p5Y,#p5X,#p4X,#p3X,#p2X,#p2W,#p3W,#p4W,#p5W,#p5V,#p4V,#p3V,#p2V,#p2U,#p3U,#p4U,#p5U,#p7U,#p7V,#p7W,#p7X,#p8X,#p8W,#p8V,#p8U,#p9U,#p9V,#p9W,#p9X,#p10X,#p10W,#p10V,#p10U,#p11U,#p11V,#p11W,#p11X,#p12X,#p13X,#p14X,#p15X,#p16X,#p17W,#p16W,#p15W,#p14W,#p13W,#p12W,#p12V,#p13V,#p14V,#p15V,#p16V,#p17V,#p17U,#p16U,#p15U,#p14U,#p13U,#p12U,#p12T,#p13T,#p14T,#p15T,#p16T,#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間148
if (localStorage.getItem('Total_memo') == 148) {
    $(function () {
        $("#p22B").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p22B').css("background-color", "red");
        $('#p21B,#p2Y,#p3Y,#p4Y,#p5Y,#p5X,#p4X,#p3X,#p2X,#p2W,#p3W,#p4W,#p5W,#p5V,#p4V,#p3V,#p2V,#p2U,#p3U,#p4U,#p5U,#p7U,#p7V,#p7W,#p7X,#p8X,#p8W,#p8V,#p8U,#p9U,#p9V,#p9W,#p9X,#p10X,#p10W,#p10V,#p10U,#p11U,#p11V,#p11W,#p11X,#p12X,#p13X,#p14X,#p15X,#p16X,#p17W,#p16W,#p15W,#p14W,#p13W,#p12W,#p12V,#p13V,#p14V,#p15V,#p16V,#p17V,#p17U,#p16U,#p15U,#p14U,#p13U,#p12U,#p12T,#p13T,#p14T,#p15T,#p16T,#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}
// 累計時間149
if (localStorage.getItem('Total_memo') == 149) {
    $(function () {
        $("#p24A").html('<img src="img/SUGO.png" alt="アイコンの画像">');
        $('#p24A').css("background-color", "red");
        $('#p22B,#p21B,#p2Y,#p3Y,#p4Y,#p5Y,#p5X,#p4X,#p3X,#p2X,#p2W,#p3W,#p4W,#p5W,#p5V,#p4V,#p3V,#p2V,#p2U,#p3U,#p4U,#p5U,#p7U,#p7V,#p7W,#p7X,#p8X,#p8W,#p8V,#p8U,#p9U,#p9V,#p9W,#p9X,#p10X,#p10W,#p10V,#p10U,#p11U,#p11V,#p11W,#p11X,#p12X,#p13X,#p14X,#p15X,#p16X,#p17W,#p16W,#p15W,#p14W,#p13W,#p12W,#p12V,#p13V,#p14V,#p15V,#p16V,#p17V,#p17U,#p16U,#p15U,#p14U,#p13U,#p12U,#p12T,#p13T,#p14T,#p15T,#p16T,#p16S,#p15S,#p14S,#p13S,#p12S,#p12R,#p13R,#p14R,#p15R,#p15Q,#p16Q,#p16R,#p17R,#p17Q,#p17P,#p17O,#p16O,#p16P,#p15P,#p14P,#p14Q,#p13Q,#p12Q,#p12P,#p13P,#p13O,#p14O,#p15O,#p15N,#p14N,#p13N,#p13M,#p14M,#p15M,#p17M,#p18M,#p18L,#p18K,#p18J,#p18I,#p17I,#p17J,#p17K,#p17L,#p15L,#p14L,#p13L,#p13K,#p14K,#p15K,#p15J,#p14J,#p13J,#p13I,#p14I,#p15I,#p16G,#p17G,#p18G,#p19G,#p19F,#p18F,#p18E,#p19E,#p19D,#p18D,#p17D,#p17E,#p15G,#p15F,#p15E,#p15D,#p15C,#p16C,#p16D,#p16E,#p16F,#p17F')
            .css("background-color", "yellow");
    });
}


