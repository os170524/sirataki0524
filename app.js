        function checkFortune() {
            var colour = document.getElementById('colour-select').value;
            var number = parseInt(document.getElementById('number-input').value, 10);
            var result = "ただの人"; // デフォルトの値

            if (colour === "勉強" && number === 0) {
                result = "頭が悪い";
            } else if (colour === "勉強" && number === 4) {
                result = "頭がいい";
            } else if (colour === "勉強" && number === 8) {
                result = "秀才";
            } else if (colour === "運動" && number === 0) {
                result = "運動不足";
            } else if (colour === "運動" && number === 4) {
                result = "動ける身体を持っている人";
            } else if (colour === "運動" && number === 8) {
                result = "スポーツマン";
            } else if (colour === "オレンジ" && number === 0) {
                result = "凶";
            } else if (colour === "オレンジ" && number === 4) {
                result = "大吉";
            } else if (colour === "オレンジ" && number === 8) {
                result = "中吉";
            }
                

            document.getElementById('result-output').innerText = "あなたは【" + result + "】です";
        }
