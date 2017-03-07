<?php
    function init_db() {
        try {
            // 이 부분들을 적절하게 바꿔줘야 합니다.
            $servername = "127.0.0.1";
            $username = "root";
            // 계정 비밀번호
            $password = "Qawsedrf1234";
            // 데이터베이스 이름
            $dbname = "kweb_board";

            $conn = new PDO("mysql:host=$servername;dbname=$dbname;charset=utf8;", $username, $password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            return $conn;

        } catch(PDOException $e) {
            echo "데이터베이스 오류: " . $e->getMessage();
            exit;
        }
    }
?>
