        function checkFortune() {
            var colour = document.getElementById('colour-select').value;
            var number = parseInt(document.getElementById('number-input').value, 10);
            var result = "ただの人"; // デフォルトの値

            if (colour === "勉強" && number === 0) {
                result = "頭が悪い";
            } else if (colour === "勉強" && number === 1) {
                result = "頭がいい";
            } else if (colour === "勉強" && number === 2) {
                result = "秀才";
            } else if (colour === "運動" && number === 0) {
                result = "中吉";
            } else if (colour === "運動" && number === 1) {
                result = "中吉";
            } else if (colour === "運動" && number === 2) {
                result = "大凶";
            } else if (colour === "オレンジ" && number === 0) {
                result = "凶";
            } else if (colour === "オレンジ" && number === 1) {
                result = "大吉";
            } else if (colour === "オレンジ" && number === 2) {
                result = "中吉";
            }
                

            document.getElementById('result-output').innerText = "あなたは【" + result + "】です";
        }
