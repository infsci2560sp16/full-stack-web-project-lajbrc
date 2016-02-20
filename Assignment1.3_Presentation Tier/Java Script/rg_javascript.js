function form_submit() {
		var userName = document.getElementById("username").value;
		if (userName == "" || userName == null) {
			alert("Please input your username!");
			document.getElementById("username").focus();
			return false;
		}

		var strPass = document.getElementById("password").value;
		if (strPass == "" || strPass == null) {
			alert("Please input your password!");
			document.getElementById("password").focus();
			return false;
		}

		document.getElementById("loginForm").submit();
	}

	function form_reset() {
		document.getElementById("loginForm").reset();
	}
