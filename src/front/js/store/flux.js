const URL = process.env.BACKEND_URL;
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			user: null,
			appointment: null,
			appointments: []
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
				fetch(process.env.BACKEND_URL + "/api/login", {
					method: "POST",
					body: JSON.stringify(user),
					headers: { "Content-type": "application/json; charset=UTF-8" }
				})
					.then(resp => resp.json())
					.then(data => {
						console.log("--data--", data);
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
							history.push("/profile");
						}
					})
					.catch(error => console.log("Error loading message from backend", error));

				// fetch(URL + "/api/login", {
				// 	method: "POST",
				// 	body: JSON.stringify(user),
				// 	headers: { "Content-type": "application/json; charset=UTF-8" }
				// })
				// 	.then(resp => resp.json())
				// 	.then(data => {
				// 		if (!data.msg) {
				// 			console.log("--data--", data);
				// 			setStore({ user: data });

				// 			if (typeof Storage !== "undefined") {
				// 				// cambiar a sessionStorage
				// 				localStorage.setItem("token", data.token);
				// 				localStorage.setItem("user", JSON.stringify(data.user));
				// 			} else {
				// 				// LocalStorage no soportado en este navegador
				// 			}
				// 			history.push("/dasboard");
				// 		}
				// 	})
				// 	.catch(error => console.log("Error loading message from backend", error));
			},

			setRegister: async (request, history) => {
				fetch("https://3001-green-reptile-n7zbsap7.ws-us03.gitpod.io/api/register", {
					method: "POST",
					body: JSON.stringify(request),
					headers: { "Content-type": "application/json; charset=UTF-8" }
				})
					.then(resp => resp.json())
					.then(data => {
						alert("Registro Exitoso");
						history.push("/login");
					})
					.catch(error => console.log("Error loading message from backend", error));
			},

			createNewAppointment: async request => {
				const settings = {
					method: "POST",
					headers: { "Content-type": "application/json; charset=UTF-8" },
					body: JSON.stringify(request)
				};
				const response = await fetch(process.env.BACKEND_URL + "/api/reservar", settings);

				if (response) {
					history.push("/profile");
				}
			},

			deleteAppointment: async request => {
				const settings = {
					method: "DELETE",
					headers: { "Content-type": "application/json; charset=UTF-8" },
					body: JSON.stringify(request)
				};
				const response = await fetch(process.env.BACKEND_URL + "/api/reservar", settings);
			},

			editAppointment: async request => {
				const settings = {
					method: "PUT",
					headers: { "Content-type": "application/json; charset=UTF-8" },
					body: JSON.stringify(request)
				};
				const response = await fetch(process.env.BACKEND_URL + "/api/reservar", settings);
			},

			getAppointment: async id => {
				const settings = {
					method: "GET",
					headers: { "Content-type": "application/json; charset=UTF-8" },
					body: JSON.stringify(id)
				};
				const response = await fetch(process.env.BACKEND_URL + "/api/reservar", settings);
				const json = await response.json();
				setStore({ appointment: json });
			}

			// getMessage: () => {
			// 	fetch(process.env.BACKEND_URL + "/api/hello")
			// 		.then(resp => resp.json())
			// 		.then(data => setStore({ message: data.message }))
			// 		.catch(error => console.log("Error loading message from backend", error));
			//}
		}
	};
};

export default getState;
