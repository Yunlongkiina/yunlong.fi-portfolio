import React, { useEffect, useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context as AuthContext } from '../context/AuthContext';

const ProtectedRoute = (props) => {

    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { state } = useContext(AuthContext);

    useEffect(() => {
        if(state.allisGood){
            setIsLoggedIn(true);
        }else{
            setIsLoggedIn(false);
            return navigate('/auth/login');
        }
    }, [isLoggedIn,navigate,state.allisGood]);

    return (
        <React.Fragment>{isLoggedIn ? props.children : null}
        </React.Fragment>
    );
}

export default ProtectedRoute;