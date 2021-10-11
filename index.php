<?php
header("cache-control: no-store")

?>

<!DOCTYPE html>
<html lang="jp">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ドラクエ</title>
    <link rel="stylesheet" href="./style.css?t=100">
    <link rel="stylesheet" href="/font/css/all.min.css">
</head>
<body>
    <script src="./jquery-3.6.0.min.js"></script>
    <script src="./typed.min.js"></script>
    <script src="./script.js?t=4"></script>
    <main>
        <div id="wrapper">
            <div id="ctrl">
                <div class="typed_wrap">
                    <span class="typed"></span>
                </div>
                <div class="now link" id="1"><a href="https://www.youtube.com/watch?v=_n-zh-zj-g4">ゲリラ演奏　　　　　午前の部</a></div>
                <div class="link" id="2"><a href="https://www.youtube.com/watch?v=389_ynitjKs">オータムコンサート　午前の部</a></div>
                <div class="link" id="3"><a href="https://www.youtube.com/watch?v=l0PDc6lmgvg">ゲリラ演奏　　　　　午後の部</a></div>
                <div class="link" id="4"><a href="https://www.youtube.com/watch?v=GxlfawvUqYc">オータムコンサート　午後の部</a></div>
            </div>
        </div>
        <div id="s_wrap">
            <div id="panel">
                <div id="up">
                    <i class="fas fa-arrow-up fa-3x"></i>
                </div>
                <div id="down">
                    <i class="fas fa-arrow-down fa-3x"></i>
                </div>
                <div id="jump">
                    <i class="far fa-circle fa-3x"></i>
                </div>
            </div>
        </div>
    </main>
</body>
</html>