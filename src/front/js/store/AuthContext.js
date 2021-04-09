import React, { createContext } from "react";

export const AuthContext = createContext({
	isLoggedIn: false,
	token: null,
	login: () => {},
	logout: () => {}
});

// export const AuthContext = React.createContext();

//     const Auth = () => {(
//         isLoggedIn: false,
//         token: null,
//         login: () => {},
//         logout: () => {}
//     )};
//     return (

//             <AuthContext.Provider value={isLoggedIn: isLoggedIn, login: login, logout: logout}>
//                 <Authentication/>
//             </AuthContext.Provider>
//     );
// };
