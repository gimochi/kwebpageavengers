<?php
    // C의 #include와 완전 똑같음.
    include_once('./database.php');
    $tablename = "board";

    function validate_form() {
        // TODO
    }

    try {
        $conn = init_db();

        $title = $_POST['title'];
        $content = $_POST['content'];
        $username = $_POST['username'];
        $userpwd = $_POST['userpwd'];

        validate_form($_POST);

        $stmt = $conn->prepare("INSERT INTO $tablename
        (`title`, `content`, `username`, `userpwd`, `hit_count`, `created_at`)
        VALUES (:title, :content, :username, :userpwd, 0, NOW())");

        $stmt->bindParam(':title', $title);
        $stmt->bindParam(':content', $content);
        $stmt->bindParam(':username', $username);
        $stmt->bindParam(':userpwd', $userpwd);

        $stmt->execute();

        echo "<script>alert('정상적으로 등록되었습니다.');location.href = '/';</script>";
    } catch(PDOException $e) {
        echo "데이터베이스 오류: " . $e->getMessage();
    }
?>
