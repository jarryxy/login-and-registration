

/**
 * 现在所有错误已经改过来了-_-
 * ajax.js:33 
 * POST http://localhost:8888/php/register.php 405 
 * (Method Not Allowed)
 * 这个应该是跨域问题
 * 数据库的端口号是80
 * gulp创建的临时服务器的端口是8888
 * 现在我把文件移到，80端口的服务器下
 */
window.onload = function () {
    var oinputs = document.getElementsByTagName("input");
    var btn = document.getElementById("btn");

    btn.onclick = function () {
        //做个简单的验证，输入内容不能为空
        var time = new Date();
        var ale = document.getElementById("alert");
        if ((!oinputs[0].value || !oinputs[1].value)) {
            alert("输入内容不能为空");
        } else {
            // method = "get", url, data, success, error
            // alert(121);

            $ajax({
                method : "post",
                url : ".././php/register.php",
                data : {
                    username : oinputs[0].value,
                    password : oinputs[1].value,
                    create_time : time.getTime()//获取到毫秒数
                },
                success : function(result){
                    var res = JSON.parse(result);
                    // alert(res);
                    if(res.code == 3){
                        ale.className = "alert-success";
                        ale.innerHTML = res.message;
                        ale.style.display = "block";
                    }else{
                        ale.className = "alert-warning";
                        ale.innerHTML = res.message;
                        ale.style.display = "block";
                    }
                },
                error : function(msg){
                    console.log(msg);
                }
            });
        }
    }
}