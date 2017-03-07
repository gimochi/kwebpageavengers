<?php
    // C의 #include와 완전 똑같음.
    include_once('./database.php');
    $tablename = "board";
    $conn = init_db();

    $stmt = $conn->prepare("SELECT * FROM $tablename ORDER BY created_at DESC");
    $stmt->execute();
    $list = $stmt->fetchAll();
?>

<!DOCTYPE html>
<html lang="ko">
    <head>
      <?php include_once('meta.php'); ?>
      <title>게시판 글 보기</title>
    </head>
    <body>
      <div class="container">
        <h2>게시글 보기</h2>
        <table class="table">
          <tr>
            <th>#</th>
            <th>조회수</th>
            <th style="width: 50%;">제목</th>
            <th>작성자</th>
            <th>날짜</th>
          </tr>
          <?php foreach($list as $item): ?>
          <tr>
            <td><?php echo $item['id']; ?></td>
            <td><?php echo $item['hit_count']; ?></td>
            <td><a href="view.php?id=<?php echo $item['id']; ?>"><?php echo $item['title']; ?></a></td>
            <td><?php echo $item['username']; ?></td>
            <td><?php echo $item['created_at']; ?></td>
          </tr>
          <?php endforeach; ?>
        </table>
        <a href="write.php">새 글 작성하기</a>
      </div>
    </body>
</html>
