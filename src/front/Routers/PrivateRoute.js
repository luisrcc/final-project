import React, { useContext, useState, useEffect } from "react";
import { Context } from "../js/store/appContext";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
	const { store } = useContext(Context);
	const token = store.user ? store.user.token : null;
	return <Route {...rest} render={props => (token ? <Component {...props} /> : <Redirect to="/login" />)} />;
};

export default PrivateRoute;
