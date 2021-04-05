const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			user: null
		},
		actions: {
			getToken: () => {
				const tokenLocal = localStorage.getItem("token");
				const userLocal = JSON.parse(localStorage.getItem("user"));
				setStore({
					user: {
						token: tokenLocal,
						user: userLocal
					}
				});
				console.log("-->", tokenLocal);
				console.log("-->", JSON.stringify(userLocal));
			},

			setLogin: user => {
				//cambiar nombre especifico a su uso
				// const additionalSettings = {
				// 	method: "POST",
				// 	headers: {
				// 		"Content-Type": "application/json"
				// 	},
				// 	body: JSON.stringify(user)
				// };

				fetch(process.env.BACKEND_URL + "/api/login", {
					method: "POST",
					body: JSON.stringify(user),
					headers: { "Content-type": "application/json; charset=UTF-8" }
				})
					.then(resp => resp.json())
					.then(data => {
						if (!data.msg) {
							console.log("--data--", data);
							setStore({ user: data });

							if (typeof Storage !== "undefined") {
								// cambiar a sessionStorage
								localStorage.setItem("token", data.token);
								localStorage.setItem("user", JSON.stringify(data.user));
							} else {
								// LocalStorage no soportado en este navegador
							}
							history.push("/dasboard");
						}
					})
					.catch(error => console.log("Error loading message from backend", error));
			},

			setRegister: async (request, history) => {
				const settings = {
					method: "POST",
					header: {
						"Content-Type": "application/json"
					},
					body: request
				};
				const response = await fetch(
					"https://3001-peach-marten-7nw4z8wi.ws-us03.gitpod.io/api/register",
					settings
				);
				const json = await response.json();
				history.push("/dasboard");
			},
			createNewAppointment: async request => {
				const settings = {
					method: "POST"
				};
				const response = await fetch(
					"https://3001-yellow-kite-xee0xamh.ws-us03.gitpod.io/api/reservar",
					settings
				);
				const json = await response.json();
			},

			getMessage: () => {
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			}
		}
	};
};

export default getState;
