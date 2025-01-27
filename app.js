
      function checkFortune() {
    var colour = document.getElementById('colour-select').value;
    var number = parseInt(document.getElementById('number-input').value, 10);
    var result = "ただの人で"; // デフォルトの値

    if (colour === "勉強" && number === 0) {
        result = "頭が悪いで";
    } else if (colour === "勉強" && number === 4) {
        result = "頭がいいで";
    } else if (colour === "勉強" && number === 8) {
        result = "秀才で";
    } else if (colour === "運動" && number === 0) {
        result = "運動不足で";
    } else if (colour === "運動" && number === 4) {
        result = "動ける身体を持っている";
    } else if (colour === "運動" && number === 8) {
        result = "スポーツマンで";
    } else if (colour === "睡眠" && number === 0) {
        result = "睡眠障害で";
    } else if (colour === "睡眠" && number === 4) {
        result = "寝不足で";
    } else if (colour === "睡眠" && number === 8) {
        result = "健康体で";
    }

    document.getElementById('result-output').innerText = "あなたは" + result + "す";
}

function checkFinalResult() {
    var result2 = document.getElementById('result2-select').value;
    var scene = document.getElementById('scene-select').value;
    var final = "そのまま"; // デフォルトの結果

    // 最終結果の判定
    if (result2 === "秀才" && scene === "受験") {
        final = "国内有数の大学に受かった";
    } else if (result2 === "秀才" && scene === "体育") {
        final = "運動科学について興味を持った";
    } else if (result2 === "秀才" && scene === "休憩") {
        final = "勉強効率を上げるために休んだ";
    } else if (result2 === "頭がいい" && scene === "受験") {
        final = "中堅大学に入学した";
    } else if (result2 === "頭がいい" && scene === "体育") {
        final = "運動が苦手かも";
    } else if (result2 === "頭がいい" && scene === "休憩") {
        final = "勉強に疲れて休んだ";
    } else if (result2 === "頭が悪い" && scene === "受験") {
        final = "受験に落ちてしまった";
    } else if (result2 === "頭が悪い" && scene === "体育") {
        final = "運動に希望を見出した";
    } else if (result2 === "頭が悪い" && scene === "休憩") {
        final = "勉強に集中できなくて休んだ";
    } else if (result2 === "スポーツマン" && scene === "体育") {
        final = "優秀な成績を修めた";
    } else if (result2 === "スポーツマン" && scene === "受験") {
        final = "スポーツ推薦で大学に入学した";
    } else if (result2 === "スポーツマン" && scene === "休憩") {
        final = "元気がみなぎってきた";
    } else if (result2 === "動ける身体を持っている" && scene === "体育") {
        final = "滞りなく運動をこなした";
    } else if (result2 === "動ける身体を持っている" && scene === "受験") {
        final = "息抜きに運動した";
    } else if (result2 === "動ける身体を持っている" && scene === "休憩") {
        final = "体を休めた";
    } else if (result2 === "運動不足" && scene === "受験") {
        final = "受験を乗り越える体力がなかった";
    } else if (result2 === "運動不足" && scene === "体育") {
        final = "授業の後疲れ果てた";
    } else if (result2 === "運動不足" && scene === "休憩") {
        final = "運動に嫌気がさした";
    } else if (result2 === "健康体" && scene === "体育") {
        final = "元気に授業に臨んだ";
    } else if (result2 === "健康体" && scene === "受験") {
        final = "受験に万全の体調で臨んだ";
    } else if (result2 === "健康体" && scene === "休憩") {
        final = "息抜きの天才だ";
    } else if (result2 === "寝不足" && scene === "体育") {
        final = "頭痛に見舞われた";
    } else if (result2 === "寝不足" && scene === "受験") {
        final = "途中で集中力を切らしてしまった";
    } else if (result2 === "寝不足" && scene === "休憩") {
        final = "眠った";
    } else if (result2 === "睡眠障害" && scene === "体育") {
        final = "倒れてしまった";
    } else if (result2 === "睡眠障害" && scene === "受験") {
        final = "倒れてしまった";
    } else if (result2 === "睡眠障害" && scene === "休憩") {
        final = "ぐっすり眠った";
    } else if (result2 === "ただの人" && scene === "受験") {
        final = "大学に合格した";
    } else if (result2 === "ただの人" && scene === "体育") {
        final = "運動をこなした";
    } else if (result2 === "ただの人" && scene === "休憩") {
        final = "体を休めた";
    }

    document.getElementById('final-output').innerText = "あなたは" + final + "。";
}



