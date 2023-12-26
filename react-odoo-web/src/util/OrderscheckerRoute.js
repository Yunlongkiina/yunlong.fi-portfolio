import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context as AuthContext } from '../context/AuthContext';

const OrderscheckerRoute = (props) => {

    const navigate = useNavigate();
    const [allowWarehouse, setAllowWarehouse] = useState(false);
    const { state } = useContext(AuthContext);

    useEffect(() => {
        if (!state.role.depatmentId) {
                setAllowWarehouse(false);
            return navigate('/auth/login');
        // ********Production config****************
        //  13: 	Products Checker department id
        //  8:    IT and Technic department id
        }else if(state.role.depatmentId === 13 ||  state.role.depatmentId === 8){
                setAllowWarehouse(true);
            }
    }, [allowWarehouse,navigate, state.role.depatmentId]);
    
    return (
        <React.Fragment>
            {
                allowWarehouse ? props.children : null
            }
        </React.Fragment>
    );
}

export default OrderscheckerRoute;