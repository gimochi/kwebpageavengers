<?php
    if(empty($url)) {
        $url = "./submit.php";
    }
?>

<!DOCTYPE html>
<html lang="ko">
  <head>
    <?php include_once('meta.php'); ?>
    <?php if($value): ?>
    <title>글 수정하기</title>
    <?php else: ?>
    <title>새 글 작성하기</title>
    <?php endif; ?>
  </head>
  <body>
    <div class="container">
      <?php if($value): ?><h2>글 수정하기</h2><?php else: ?><h2>새 글 작성하기</h2><?php endif; ?>
      <form method="POST" action="<?php echo $url; ?>">
        <input type="hidden" name="article_id" value="<?php echo $display; ?>">
        제목 : <input type="text" name="title" class="form-control" placeholder="제목을 입력하세요." value="<?php echo $value['title']; ?>"><br>
        내용 : <br><textarea name="content" class="form-control" rows="10" cols="100" value="<?php echo $value['content']; ?>"></textarea>
        <div class="form-group">
          <label for="username">작성자 이름</label>
          <input type="text" class="form-control" id="username" name="username" value="<?php echo $value['username']; ?>">
        </div>
        <div class="form-group">
          <label for="password">암호 (글 수정 및 삭제시 사용됩니다.)</label>
          <input type="password" class="form-control" id="password" name="userpwd">
        </div>
        <button type="submit" class="btn btn-default">제출</button>
      </form>
    </div>
  </body>
</html>
