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
			url: "localhost:10086",
			type: "POST",
			contentType: "applilcation/json",
			data: {},
			dataType: json,
			success: function(data) {},
			complete: function() {}
		});
	}
);