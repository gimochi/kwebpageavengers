<?php
    include_once('./common.php');
    $method = $_SERVER['REQUEST_METHOD'];
    $tablename = "board";

    if($method === "GET") {
        $display = $_GET['article_id'];
        if(empty($display)) {
            echo "<script>alert('해당 글이 존재하지 않습니다.');history.go(-1);</script>";
        }

        $stmt = make_statement("SELECT * FROM $tablename WHERE `id`=:id");
        $stmt->bindParam(":id", $display);
        $stmt->execute();

        // 결과 레코드들 중 처음 하나만 가져오는 코드
        $value = $stmt->fetch();
        $url = "./update.php";
        include_once('./write.php');

    } else if($method === "POST") {
        $display = false;

        if(validate_post()) {
            $title = $_POST['title'];
            $content = $_POST['content'];
            $username = $_POST['username'];

            $stmt = make_statement("UPDATE $tablename SET `title`=:title, `content`=:content, `username`=:username WHERE `id`=:id AND `userpwd`=:userpwd");
            $stmt->bindParam(":id", $_POST['article_id']);
            $stmt->bindParam(":userpwd", $_POST['userpwd']);
            $stmt->bindParam(":title", $title);
            $stmt->bindParam(":content", $content);
            $stmt->bindParam(":username", $username);
            $stmt->execute();

            if($stmt->rowCount() > 0) {
                echo "<script>alert('수정 완료');window.location.href='/';</script>";
            } else {
                echo "<script>alert('올바르지 않은 글 번호이거나 비밀번호가 다릅니다.');history.go(-1);</script>";
            }
        }
    }
?>
