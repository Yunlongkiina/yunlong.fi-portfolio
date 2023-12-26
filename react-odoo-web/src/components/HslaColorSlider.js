import React from 'react';

const HslaColorSlider = ({colroH,colroS,colroL,colroA,setColorH,setColorS,setColorL,setColorA}) => {

    const colorContainer={

 }
    return (
		<React.Fragment>
            <div style={colorContainer}>
                <label>Color H
                    <input
                        placeholder='Color H'
                        value={colroH}
                        type="range"
                        min="0"
                        max="360"
                        className="slider"
                        onChange={(e)=>setColorH(e.target.value)}/>
                        <p>{colroH}</p>
                </label>
                <label>Color S
                    <input
                        placeholder='Color S'
                        value={colroS}
                        type="range"
                        min="0"
                        max="100"
                        className="slider"
                        onChange={(e)=>setColorS(e.target.value)}/>
                        <p>{colroS}{'%'}</p>
                </label>
                <label>Color L
                    <input
                        placeholder='Color L'
                        value={colroL}
                        type="range"
                        min="0"
                        max="100"
                        className="slider"
                        onChange={(e)=>setColorL(e.target.value)}/>
                        <p>{colroL}{'%'}</p>
                </label>
                <label>Color A
                    <input
                        placeholder='Color A'
                        value={colroA}
                        type="range"
                        min="0"
                        max="1"
                        step="0.1"
                        className="slider"
                        onChange={(e)=>setColorA(e.target.value)}/>
                        <p>{colroA}</p>
                </label>
            </div>
		</React.Fragment>
	)
}
export default HslaColorSlider;