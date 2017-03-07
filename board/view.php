<?php
    if(empty($_GET['id']) || $_GET['id'] < 0) {
        header("Location: /");
    }

    // C의 #include와 완전 똑같음.
    include_once('./database.php');
    $tablename = "board";
    $conn = init_db();

    $stmt = $conn->prepare("SELECT * FROM $tablename WHERE `id`=:id");
    $stmt->bindParam(":id", $_GET['id']);
    $stmt->execute();

    // 결과 레코드들 중 처음 하나만 가져오는 코드
    $item = $stmt->fetch();
?>

<!DOCTYPE html>
<html lang="ko">
    <head>
      <?php include_once('meta.php'); ?>
      <title>게시판 글 보기</title>
      <style>
        .content {
          border: 1px solid #ccc;
          min-height: 300px;
          width: 100%;
          margin-bottom: 10px;
          padding: 20px;
        }

        .tr {
          text-align: right;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h2><?php echo $item['title']; ?></h2>
        <div class="tr">조회수 : <?php echo $item['hit_count']; ?></div>
        <div class="tr">작성자 : <?php echo $item['username']; ?></div>
        <div class="tr">작성일 : <?php echo $item['created_at']; ?></div>
        <div class="content"><?php echo $item['content']; ?></div>
        <a href="#" onclick="history.go(-1);">뒤로 가기 </a>
        <a href="write.html">새 글 작성하기</a>
        <a href="update.php?article_id=<?php echo $item['id']; ?>">글 수정하기</a>
        <a href="delete.php?article_id=<?php echo $item['id']; ?>">글 삭제하기</a>
      </div>
    </body>
</html>
