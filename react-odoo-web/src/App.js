import React, { useEffect, useState,useContext } from "react";
import { Outlet } from "react-router-dom";
import PortalFooter from "./portal/footer/PortalFooter";
import PortalNavbar from "./portal/navbar/PortalNavbar";
import { Context as AuthContext } from './context/AuthContext';

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

    const { state } = useContext(AuthContext);
    useEffect(() => {
        state.allisGood ? setIsLoggedIn(true):setIsLoggedIn(false)
    }, [isLoggedIn, state.allisGood]);
	return (
		<React.Fragment>
			{isLoggedIn && <PortalNavbar />}
			    <Outlet />
			{isLoggedIn && <PortalFooter />}
		</React.Fragment>
	);
}

export default App;
