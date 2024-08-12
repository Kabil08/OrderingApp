import React, { createContext } from "react";

// To create a context use it everywhere, use createContext.
const LoginContext =  createContext({
    loggedInUser: "Kabil.N",
});

export default LoginContext;