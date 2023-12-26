import React from 'react';

const PickerCheckerShow = ({lable,selectInit, selectValue,setSelection})=>{
    const selectStyle = {
        borderWidth: '0px',
        // borderRadius: '10px',
        borderBottomWidth: '1px',
        paddingTop: '2px',
        paddingBottom: '2px'
    }

    return(
        <React.Fragment>
             <label>{lable}
                <select
                    style={selectStyle}
                    value={selectValue}
                    onChange={e => setSelection(e.target.value)}>
                    <option key={9999} id={9999} value={''}>{''}</option>
                    {selectInit.map(item=><option key={item.id} id={item.id} value={item.name}>{item.name}</option>)}
                </select>
            </label>           
        </React.Fragment>
    )
}

export default PickerCheckerShow;