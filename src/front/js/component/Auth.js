class Auth {
	constructor() {
		this.authenticated = false;
	}

	login(cb) {
		this.authenticated = true;
		cb();
	}
	logout(cb) {
		this.authenticated = false;
		cb();
	}

	isAuthenticated() {
		if (localStorage.getItem("token") != null || localStorage.getItem("token") != undefined) {
			return !this.authenticated;
		} else {
			return this.authenticated;
		}
	}
}

export default Auth;