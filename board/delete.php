<?php
    $method = $_SERVER['REQUEST_METHOD'];
    $tablename = "board";

    if($method === "GET") {
        $display = $_GET['article_id'];
        if(empty($display)) {
            echo "<script>alert('해당 글이 존재하지 않습니다.');history.go(-1);</script>";
        }
    } else if($method === "POST") {
        $display = false;

        include_once('./common.php');

        if(validate_post() {
            $stmt = make_statement("DELETE FROM $tablename WHERE `id`=:id AND `userpwd`=:userpwd");
            $stmt->bindParam(":id", $_POST['article_id']);
            $stmt->bindParam(":userpwd", $_POST['userpwd']);
            $stmt->execute();

            if($stmt->rowCount() > 0) {
                echo "<script>alert('삭제 완료');window.location.href='/';</script>";
            } else {
                echo "<script>alert('올바르지 않은 글 번호이거나 비밀번호가 다릅니다.');history.go(-1);</script>";
            }
        }
    }
?>

<?php if($display): ?>
<!DOCTYPE html>
<html lang="ko">
    <head>
      <?php include_once('meta.php'); ?>
      <title>글 삭제하기</title>
    </head>
    <body>
        <div class="container">
          <h2>글 삭제하기</h2>
          <form method="POST" action="./delete.php">
            <input type="hidden" name="article_id" value="<?php echo $display; ?>">
            <div class="form-group">
              <label for="password">글 비밀번호 입력</label>
              <input type="password" class="form-control" id="password" name="password">
            </div>
            <button type="submit" class="btn btn-default">삭제하기</button>
          </form>
        </div>
    </body>
</html>
<?php endif; ?>
