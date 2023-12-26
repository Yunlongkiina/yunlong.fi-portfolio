import React,{useState} from 'react';
// import { Container,Button } from 'react-bootstrap';

const ProductRow = ({index,name,sku, image,inStock, pickingcode,wholeSaleProducts, setWholeSaleProducts})=>{
    const [inStockNow, setInstockNow] = useState(inStock);
    
    const handlesetStock =()=>{
        wholeSaleProducts[index] ={
            'sku':sku,
            'name':name,
            'inStock':!inStockNow
           }
        
        setWholeSaleProducts(wholeSaleProducts)
        setInstockNow(!inStockNow)
    }
    const imgestyle = {
        height: '100%',
        width:'30%',
    }
    const productNamestyle={
        paddingLeft: '10px',
        overflow: 'hidden',
    }
    const listyle = {
        border: '10px solid',
        borderRadius: '2em',
        marginTop: '5px',
        listStyle: "none",
        fontSize: '1.3vw',
        padding: '10px',
        height: '11vw',
        width: '30vw',
        display: 'flex',
        flexDirection: 'inherit',
        color: inStockNow === true ? 'green':'red'
    }

    const pickingcodeStyle = {
        backgroundColor: 'black',
        color: 'white'
    }
    return(<li
                key={name}
                onClick={handlesetStock}
                style={listyle}
            >
    <img src={image} alt="golf" style={imgestyle}/>
    <span style={productNamestyle}>[ {sku}] {name}</span>
    <span style={pickingcodeStyle}>{pickingcode}</span>
    <div className='instockBtn'></div>
    </li>
    )
}
export default ProductRow