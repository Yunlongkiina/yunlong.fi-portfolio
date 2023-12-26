import React from 'react';
import Barcode from 'react-barcode';

export const ShowPrintableProducts = React.forwardRef(({
    products,lableFontSize,lableWidth,barcodeWidth,barcodeHeight,
    colroH,colroS,colroL,colroA,
    }, ref) => {

    const productNameStyle={
        fontSize:parseInt(lableFontSize),
        color:`hsla(${colroH},${colroS}%,${colroL}%,${colroA})`,
        // height:'30%'
    }

    const lableBorder ={
        borderStyle: 'solid',
        borderWidth: '2px',
        width: `${lableWidth}%`,
        borderColor: 'black',
        marginTop: '10px',
        marginBottom: '10px'
    }
    const lableContainerstyle={
        display: 'flex',
        marginTop:'10px',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    }
    const imageBarcodeStyle={
        display: 'flex',
        alignItems: 'center',
        // height:'70%'
    }
    const imageStyle={
        width: '30%'
    }
    const barcodeCaonterStyle={
        display: 'flex',
        justifyContent: 'left',
        flexDirection: 'column',
        alignItems: 'center',
        width: '70%'
    }
    // const svgBarcodeStyle={
    //     backgroundColor:'red',
    //     width:'100px'
    // }
    return (
      <div ref={ref} style={lableContainerstyle}>
        {products.map(product=>{
                return(<div key={product.sku} style={lableBorder}>
                    {/* {printStart?null:
                        <button
                            style={{fontSize:'40px'}}
                            onClick={()=>deleteProduct(product.sku)}>X</button>                
                    } */}
                        <div style={productNameStyle}>{product.name}</div>
                        <div style={imageBarcodeStyle}>
                            {product.image?
                                    <img
                                        alt ={product.sku}
                                        style={imageStyle}
                                        src={`data:image/jpeg;base64,${product.image}`}
                                />:null}

                        <div style={barcodeCaonterStyle}>
                            <Barcode
                                width={barcodeWidth}
                                height={barcodeHeight}
                                key={product.barcode}
                                value={product.barcode}
                                format={"EAN13"}
                                />
                            {product.additionalBarcode? product.additionalBarcode.map(barcode=>{return(
                                <Barcode
                                    width={barcodeWidth}
                                    height={barcodeHeight}        
                                    key={{barcode}}
                                    value={barcode}
                                    format={"EAN13"} />)
                                        }
                            ):null}
                        </div>
                      </div>
                </div>)
            })}

    </div>
    );
  });
