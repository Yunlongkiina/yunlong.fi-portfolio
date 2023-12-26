import React, { useState,useContext } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
// import goldencropapi from "../api/goldencropapi";
import { Context as AuthContext } from '../context/AuthContext';

export default function PinPad() {
  const [pin, setPin] = useState("");
  const navigate = useNavigate();
  const { signin } = useContext(AuthContext);

  const login_success_redirect=(depatmentId)=>{
      setTimeout(() => {
        if(depatmentId === 13){
          navigate('/deliveryorders');
        }else if(depatmentId === 15){
          navigate('/stockchecking');
        }else{
          navigate('/');
        }
      },500)
  }

// const logIn=(pin)=>{
//     goldencropapi.post("/api/v15/gcappsignin", {params:{"username":pin}})
//     .then((response) => {
//         const data = response.data;
//         let valid_response;
//         if(data){
//             valid_response = data.result.valid_result
//             console.log(valid_response);
//             if(valid_response.allisGood){
//                 localStorage.clear();
//                 localStorage.setItem('department-name', valid_response.role.departmentName);
//                 localStorage.setItem('department-id', valid_response.role.depatmentId);
//                 localStorage.setItem('user-id', pin);
//                 setTimeout(() => {
//                     if(Number(valid_response.role.depatmentId) === 13){
//                         navigate('/deliveryorders');
//                     }else if(Number(valid_response.role.depatmentId) === 14){
//                         navigate('/stockchecking');
//                     }else{
//                         navigate('/');
//                     }
//                 }, 500);
                
//             }else{
//                 alert('Unable to login. Please try after some time.');
//                 return;    
//             }
//         }
//     }).catch((error) => {
//         // btnPointer.innerHTML = 'Login';
//         // btnPointer.removeAttribute('disabled');
//         alert(`Oops! Some error occured.${error}`);
//     });

//   }

  // const numberPadButtonStyle={
  //   maxWidth: '150px',
  //   maxHeight:'150px',
  //   width: '30vw',
  //   height: '30vw',
  //   margin: '0 10px 10px 10px',
  //   borderRadius: '80px',
  //   fontSize: '40px'
  // };

    const numberPadButtonStyle={
      maxWidth: '150px',
      maxHeight:'150px',
      width: '30vw',
      height: '30vw',
      margin: '0 10px 10px 10px',
      borderRadius: '80px',
      fontSize: '40px',
      boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',
      color: '#000',
      backgroundColor: '#fff',
      border: 'none',
      transition: 'all 0.3s ease 0s',
      outline: 'none',
    
  };
  const loginBtn = {
    backgroundColor:'green',
    maxWidth: '150px',
    maxHeight:'150px',
    width: '30vw',
    height: '30vw',
    margin: '0 10px 10px 10px',
    borderRadius: '80px',
    fontSize: '40px',
    boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',
    color: '#000',
    border: 'none',
    transition: 'all 0.3s ease 0s',
    outline: 'none',
  }
  const backwardButton = {
    maxWidth: '150px',
    maxHeight:'150px',
    width: '30vw',
    height: '30vw',
    margin: '0 10px 10px 10px',
    borderRadius: '80px',
    fontSize: '40px',
    boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',
    color: '#000',
    backgroundColor: 'red',
    border: 'none',
    transition: 'all 0.3s ease 0s',
    outline: 'none',
  }
  const numberPadContainers={
    height: '90vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  };
  const numberPadButtonContainer={
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const numberPadButtonRow={
    width: 'fit-content',
    display: 'flex',
    flexDirection: 'row'
  };
  const showPin={
    width: '100%',
    borderWidth: '1px',
    border:'unset',
    // height: '20px',
    borderColor: 'black',
    textAlign: 'center',
    // marginBottom: '20px',
    fontSize: '40px'
  };

  return (
    <div style={numberPadContainers}>
      <div style={showPin}>{pin}</div>

      {/* <input 
        style={showPin}
        type="password"
        defaultValue=""
        value={pin}
      /> */}
      {/* <div style={showPin}>{pin}</div> */}
      <div style={numberPadButtonContainer}>
        <div style={numberPadButtonRow}>
          <button style={numberPadButtonStyle} onClick={() => setPin((pin) => `${pin}1`)}>1</button>
          <button style={numberPadButtonStyle} onClick={() => setPin((pin) => `${pin}2`)}>2</button>
          <button style={numberPadButtonStyle} onClick={() => setPin((pin) => `${pin}3`)}>3</button>
        </div>
        <div>
          <button style={numberPadButtonStyle} onClick={() => setPin((pin) => `${pin}4`)}>4</button>
          <button style={numberPadButtonStyle} onClick={() => setPin((pin) => `${pin}5`)}>5</button>
          <button style={numberPadButtonStyle} onClick={() => setPin((pin) => `${pin}6`)}>6</button>
        </div>
        <div>
          <button style={numberPadButtonStyle} onClick={() => setPin((pin) => `${pin}7`)}>7</button>
          <button style={numberPadButtonStyle} onClick={() => setPin((pin) => `${pin}8`)}>8</button>
          <button style={numberPadButtonStyle} onClick={() => setPin((pin) => `${pin}9`)}>9</button>
        </div>
        <div>
          <button style={backwardButton} onClick={() => setPin((pin) => pin.slice(0, pin.length - 1))}>
           C
          </button>
          <button style={numberPadButtonStyle} onClick={() => setPin((pin) => `${pin}0`)}>0</button>
          <button style={loginBtn} onClick={() => signin(pin,login_success_redirect)}>E</button>
        </div>
      </div>
    </div>
  );
}