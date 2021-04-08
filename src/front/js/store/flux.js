const URL = process.env.BACKEND_URL;
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

			setLogin: (user, history) => {
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
								sessionStorage.setItem("token", data.token);
								sessionStorage.setItem("user", JSON.stringify(data.user));
							} else {
								// LocalStorage no soportado en este navegador
							}
							history.push("/profile");
						}
					})
					.catch(error => console.log("Error loading message from backend", error));
			},

			setRegister: async (request, history) => {
				fetch(process.env.BACKEND_URL + "/api/register", {
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
				const response = await fetch(process.env.BACKEND_URL + "api/reservar", settings);
			}
		}
	};
};

export default getState;
