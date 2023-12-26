import React,{useState, useRef} from 'react';
import goldencropapi from '../../api/goldencropapi';
import { useReactToPrint } from 'react-to-print';
import { ShowPrintableProducts } from './ShowPrintableProducts';
import HslaColorSlider from '../../components/HslaColorSlider';

const ProductLable = () => {
    // Testing Barcode
    // 8422315550001
    // 8801043055628
    //MUltibarcode test
    // 6922507845509
    // Additional Barcodes	
    // 8801068360226
    // 9310432080305
    // 8717624004070
    const [currentBarcode,setCurrentBarcode] = useState('');
    const [productToPrint, setProductToPrint] = useState([]);
    const [err, setErr] = useState(false);
    const [lableFontSize, setLableFontSize] = useState(28);
    const [lableWidth, setLablewidth] = useState(90);
    const [barcodeWidth, setBarcodewidth] = useState(4);
    const [barcodeHeight, setBarcodeHeight] = useState(50);
    const [colroH, setColorH] = useState(0);
    const [colroS, setColorS] = useState(0);
    const [colroL, setColorL] = useState(0);
    const [colroA, setColorA] = useState(1);

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        // onBeforeGetContent: ()=>{setPrintStart(true)}
    });

    const getProductLableInfo=(barcode)=>{
        goldencropapi.get(`api/v15/productlableinfo/${barcode}`)
        .then((res)=>{
            if(res.data.length!==0){       
                const result =checkElementExist(productToPrint, res.data)
                if(result){
                    setProductToPrint([...productToPrint, res.data]);
                }else{
                    setErr('duplicate Products is found!!!')
                }
            }
            else{
                setErr('Nothing to be found!!!')
            }
        }).catch((err)=>{
            setErr(err)
        })
    }

    const checkElementExist=(currentProducts, newProduct)=>{
        const newProSku = newProduct.sku;
        for (let pro of currentProducts){ // Use "of" to loop through an array
            if(pro.sku === newProSku){
                return false
            }
        }
        return true
    }

    // const [screenSize, setScreenSize] = useState(undefined);

    // const handleResize = () => setScreenSize(window.innerWidth);

    // useEffect(() => {
    //     window.addEventListener("resize", handleResize);
    //     handleResize();

    //     return () => window.removeEventListener("resize", handleResize)
    // }, [])

    // return screenSize;

    const printLableContainer={
        marginTop: '75px',
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    }

    // const deleteProduct=(sku)=>{
    //     const removeItem = productToPrint.filter((pro) => {
    //         return pro.sku !== sku;
    //       });
    //       setProductToPrint(removeItem);
    // }
    const firstRow={
        width:'100%'
    }
    return (
		<React.Fragment>
          {err?<p>{err}</p>:<></>}
          <div style={printLableContainer}>
            <div style={firstRow}>
                <input
                    style={{width:'70%'}}
                    value={currentBarcode} onChange={e=>setCurrentBarcode(e.target.value)}/>               
                <button
                    onClick={()=>getProductLableInfo(currentBarcode)}
                    style={{width:'10%'}}
                >Search</button>
                <button onClick={handlePrint} style={{marginLeft:'3px',width:'10%'}}>Print  </button>

            </div>
            <div style={firstRow}>
                <label>Lable FontSize
                    <input
                        placeholder='Lable FontSize'
                        value={lableFontSize}
                        type="range"
                        min="20"
                        max="100"
                        className="slider"
                        onChange={(e)=>setLableFontSize(e.target.value)}/>
                    <p>{lableFontSize}</p>
                </label>
                <label>Lable Width
                    <input
                        placeholder='Lable width'
                        value={lableWidth}
                        type="range"
                        min="30"
                        max="100"
                        className="slider"
                        onChange={(e)=>setLablewidth(e.target.value)}/>
                        <p>{lableWidth}</p>
                </label>
                <label>Barcode Width
                    <input
                        placeholder='Barcode width'
                        value={barcodeWidth}
                        type="range"
                        min="1"
                        max="4"
                        step={1}
                        className="slider"
                        onChange={(e)=>setBarcodewidth(e.target.value)}/>
                        <p>{barcodeWidth}</p>
                </label>
                {/* barcodeHeight, setBarcodeHeight */}
                <label>Barcode Height
                    <input
                        placeholder='Barcode Height'
                        value={barcodeHeight}
                        type="range"
                        min="50"
                        max="500"
                        step={1}
                        className="slider"
                        onChange={(e)=>setBarcodeHeight(e.target.value)}/>
                        <p>{barcodeHeight}</p>
                </label>

                <HslaColorSlider
                    colroH={colroH}
                    setColorH={setColorH}
                    colroS={colroS}
                    setColorS={setColorS}
                    colroL={colroL}
                    setColorL={setColorL}
                    colroA={colroA}
                    setColorA={setColorA}
                />
            </div>
            <div style={{width:'100%'}}>
            {   productToPrint.length!==0?
                    <ShowPrintableProducts
                        ref={componentRef}
                        products={productToPrint}
                        lableFontSize={lableFontSize}
                        lableWidth={lableWidth}
                        barcodeWidth={barcodeWidth}
                        barcodeHeight={barcodeHeight}
                        colroH={colroH}
                        colroS={colroS}
                        colroL={colroL}
                        colroA={colroA}
                        // deleteProduct={deleteProduct}
                    />
                :null
            }
            </div>
          </div>
		</React.Fragment>
	)
}
export default ProductLable;