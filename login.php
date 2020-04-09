<?php

header('content-type:text/html;charset="utf-8"');

$username = $_POST['username'];
$password = $_POST['password'];

//对密码加密
$password = md5(md5($password."aaa")."bbb");

$responddata = array("code"=>"","message"=>"");

//创建数据库

//链接数据库
$link = mysql_connect("localhost","root","123456");

if(!$link){
    $responddata['code'] = 0;
    $responddata['message'] = "数据库链接失败";
    echo json_encode($responddata);
    exit;
}


mysql_set_charset("utf8");

mysql_select_db("test");

// $sql = "SELECT * FROM users WHERE username='{$username}'";
// $res = mysql_query($sql);
// $row = mysql_fetch_assoc($res);

// if($row){
//     $responddata['code'] = 1;
//     $responddata['message'] = "用户名重复";
//     echo json_encode($responddata);
//     exit;
// }

$sql1 = "SELECT * FROM users WHERE username='{$username}' AND password='{$password}'";
$res1 = mysql_query($sql1);
$row1 = mysql_fetch_assoc($res1);

if(!$row1){
    $responddata['code'] = 1;
    $responddata['message'] = "用户名或密码错误";
    echo json_encode($responddata);
    exit;
}else{
    $responddata['code'] = 2;
    $responddata['message'] = "登录成功";
    echo json_encode($responddata);
}

mysql_close();

?>