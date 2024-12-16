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
                result = "死にま";
            } else if (colour === "睡眠" && number === 4) {
                result = "寝不足で";
            } else if (colour === "睡眠" && number === 8) {
                result = "健康体で";
            } 
                

            document.getElementById('result-output').innerText = （"あなたは"　+ result + "す"）;
        }
