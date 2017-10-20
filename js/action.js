$("#submit").click(
	function() {
		// 获取用户名
		var usernameValue = $("#username").val();
		// 获取密码
		var passwordValue = $("#password").val();

		// 检测是否为空
		if (usernameValue == "") {
			alert("用户名为空！");
			return;
		} else if (passwordValue == "") {
			alert("密码为空！");
			return;
		}

		// 发送请求
		$.ajax({
			url: "http://localhost:10086/LoginDemo/LoginServlet",
			type: "POST",
			contentType: "applilcation/json",
			data: {
				username: usernameValue,
				password: passwordValue
			},
			dataType: "jsonp",
			success: function(data) {},
			complete: function() {}
		});
	}
);