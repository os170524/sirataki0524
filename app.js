<script>
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
                result = "動ける身体を持っていま";
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
            var final = "そのままだよ"; // デフォルトの結果

            if (result2 === "秀才" && scene === "受験") {
                final = "受験に受かった";
            } else if (result2 === "スポーツマン" && scene === "体育") {
                final = "体育で活躍した";
            } else if (result2 === "健康体" && scene === "休憩") {
                final = "休憩中に元気いっぱい";
            }

            document.getElementById('final-output').innerText = "あなたは" + final + "！";
        }
    </script>
</body>
</html>



