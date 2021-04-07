import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const LogoutButton = () => { 

    return (
        <button type="button" className="btn btn-info btn-md">
			Cerrar sesión
		</button>
    );
};