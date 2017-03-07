<?php
    include_once('./database.php');
    function validate_post() {
      if(empty($_POST['article_id']) || empty($_POST['userpwd'])) {
          echo "<script>alert('글 번호와 비밀번호를 입력해 주세요.');history.go(-1);</script>";
          return FALSE;
      } else {
          return TRUE;
      }
    }

    function make_statement($sql) {
        $conn = init_db();
        $stmt = $conn->prepare($sql);
        return $stmt;
    }
?>
