function validate() {
	var user = document.getElementById('mail');
	var pass = document.getElementById('psw');
	var userVal = user.value;
	var passVal = pass.value;

	var checkLogin = {
		email : document.getElementById('emailBox'),
		pass : document.getElementById('passBox'),
		btn : document.getElementById('login'),
		errorEmail : function () {
			this.btn.innerHTML = 'Login';
			this.email.className = 'error';
		},
		errorPass : function () {
			this.btn.innerHTML = 'Login';
			this.pass.className = 'error';
		},
		emailOK : function(){
			this.email.className = 'success';
			this.email.classList.remove('error');
		},
		passOK : function(){
			this.pass.className = 'success';
			this.pass.classList.remove('error');
		},
		success : function () {
			this.btn.innerHTML = '<i class="fa fa-refresh fa-spin fa-3x fa-fw"></i>';
		}
	};

	if (userVal == "" || userVal == null) {
		console.log('empty user');
		checkLogin.errorEmail();
	} else {
		console.log('login');
		checkLogin.emailOK();
	}

	if ( passVal == "" || passVal == null ) {
		console.log('empty email');
		checkLogin.errorPass();
	} else {
		console.log('login');
		checkLogin.passOK();
	}

	if ( passVal == "" || passVal == null || userVal == "" || userVal == null ) {
		//null;
	} else {
		checkLogin.success();
	}
	
}