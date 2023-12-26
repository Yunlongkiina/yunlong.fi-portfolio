import React from 'react';

const CheckerMistakes = ({lable,value,setMistakes})=>{
    const selectStyle = {
        width:'40px',
        borderWidth: '0px',
        borderBottomWidth: '1px',
        paddingLeft: '10px'
    }
    return(
        <React.Fragment>
             <label style={{display:'flex',flexDirection:'row'}}>{lable}
             <input
                style={selectStyle}
                type="number"
                value={value} // ...force the input's value to match the state variable...
                onChange={e => setMistakes(e.target.value)} // ... and update the state variable on any edits!
            />             
            </label> 
        </React.Fragment>
    )
}

export default CheckerMistakes;