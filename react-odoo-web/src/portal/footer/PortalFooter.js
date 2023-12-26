import React from "react";
// import { Container } from "react-bootstrap";

const PortalFooter = () => {
    return (
        <React.Fragment>
            {/* <footer className="bg-light border-top py-3 fixed-bottom"> */}
            <footer className="bg-light fixed-bottom">
                <div style={{'textAlign': 'center'}}>
                    &copy; Goldencrop 2023
                </div>
            </footer>
        </React.Fragment>
    );
}

export default PortalFooter;