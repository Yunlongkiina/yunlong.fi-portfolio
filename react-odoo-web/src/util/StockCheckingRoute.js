import React, { useEffect, useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context as AuthContext } from '../context/AuthContext';

const StockCheckingRoute = (props) => {

    const navigate = useNavigate();
    const [allowChecker, setAllowChecker] = useState(false);
    const { state } = useContext(AuthContext);

    useEffect(() => {
        if (!state.role.depatmentId) {
            setAllowChecker(false);
        return navigate('/auth/login');

    // ********Production config****************
    //  15: B2B website Products Checker department id in production
    //  8:  IT and Technic department id
    
    // ********Test config****************
    }else if(state.role.depatmentId === 15 ||  state.role.depatmentId === 8){
        setAllowChecker(true);
        }
    }, [setAllowChecker,navigate,state.role.depatmentId]);

    return (
        <React.Fragment>
            {
                allowChecker ? props.children : null
            }
        </React.Fragment>
    );
}

export default StockCheckingRoute;