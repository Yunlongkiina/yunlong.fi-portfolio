import React,{useState, Fragment} from 'react';
import { Container,Button } from 'react-bootstrap';
import LoadingSpinner from '../../loadingSpinner/loadingspinner';
import ProductRow from './ProductRow';

const StockChecking = () => {
	const [wholeSaleProducts, setWholeSaleProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [filter, setFilter] = useState("All");
	const [initProducts, setInitProducts] = useState([]);

    const FILTER_MAP = {
        All: () => true,
        Fresh: (product) => product.pickingcode &&  product.pickingcode.startsWith('CC'),
        Frozen: (product) => product.pickingcode &&  product.pickingcode.startsWith('FZ'),
        Dry: (product) => product.pickingcode &&  product.pickingcode.startsWith('V'),
      };

    const FILTER_NAMES = Object.keys(FILTER_MAP);

    const filterList = FILTER_NAMES.map((name) => (
        <FilterButton
            key={name}
            name={name}
            isPressed={name === filter}
            setFilter={setFilter}
        />
    ));
    const filterButtonstyle = {
        backgroundColor: 'darkslategray',
        color:'white',
        width: '15vw',
    }


    function FilterButton(props) {
        return (
          <Button
            style={filterButtonstyle}
            variant="outline-secondary"
            type="button"
            className="btn toggle-btn"
            aria-pressed={props.isPressed}
            onClick={ ()=>{
                setFilter(props.name)
                const response = initProducts.filter(FILTER_MAP[props.name])
                const sorted_data = [...response].sort((a,b)=>{
                    return a.pickingcode >b.pickingcode ? 1: -1
                })
                setWholeSaleProducts(sorted_data)
            }}>
            <span className="visually-hidden">Show </span>
            <span>{props.name}</span>
            {/* <span className="visually-hidden"> tasks</span> */}
          </Button>
        );
      }

    const uTagstyle = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 'unset',
        justifyContent: 'space-around',
    }

    const button_group_container={
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'sticky',
        top: '72px',
        marginBottom:'25px'
    }
    // testing Url
    //const get_magneto_url = "http://localhost:3001/magento_allproduct"
    //const post_magento_url = "http://localhost:3001/postmagento_allproduct"

    // Product Url
    const get_magneto_url_pro = "http://94.237.119.161:3001/magento_allproduct"
    const post_magento_url_pro = "http://94.237.119.161:3001/postmagento_allproduct"

    const LoadingOverlay = ({loaded})=>{

        const loadingOverlaystyle = {
            display: loaded ? 'block':'none', /* Hidden by default */
            position: 'fixed', /* Stay in place */
            zIndex: '999', /* Sit on top */
            left: '0',
            top: '0',
            width: '100vw', /* Full width */
            height: '100vh',
            overflow: 'auto',
            // backgroundColor: 'rgb(0, 0, 0)', 
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            
        }

        return(
            <Fragment>
                <div style={loadingOverlaystyle}>
                   <LoadingSpinner />
                </div>
            </Fragment>
        )
    }

    // get_magneto_url
    const handleClick = async()=>{
        try {
            const response = await( await fetch(get_magneto_url_pro,{
                headers: {
                    'token': 'magento',
                    'Content-Type': 'application/json',
                }})).json()
            setInitProducts(response)
            setWholeSaleProducts(response)

    } catch (err) {console.log(err.message)}
    }

    // post_magento_url
    const submitChecking = async() =>{
        try {
                setLoaded(true)
                const response = await fetch(post_magento_url_pro,{
                    method: "POST",
                    headers: {
                        'token': 'magento',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(wholeSaleProducts),
                }
                )
                if(response.ok){
                    setLoaded(false)
                }
        } catch (err) {
            console.log(err.message)
        }
    }

	return (
		<React.Fragment>
			<Container className='py-5' fluid>
                <div style={button_group_container}>
                    {filterList}
                    <Button
                        style={filterButtonstyle}
                        variant="outline-secondary"
                        onClick={handleClick}
                    >Start Checking</Button>
                    <Button
                        style={filterButtonstyle}
                        variant="outline-secondary"
                        onClick={submitChecking}
                    >Submit checking</Button>

                </div>
                <LoadingOverlay loaded = {loaded}/>
                <ul style = {uTagstyle}>
                    {wholeSaleProducts.map((product, index) => {
                    return (<ProductRow 
                                key={index}
                                index={index}
                                name={product.name}
                                sku={product.sku}
                                pickingcode={product.pickingcode}
                                image = {product.image}
                                inStock = {product.inStock}
                                wholeSaleProducts={wholeSaleProducts}
                                setWholeSaleProducts={setWholeSaleProducts}
                            />);
                    })}
                </ul>
			</Container>
		</React.Fragment>
	)
}

export default StockChecking;

//////*********************Under Testing ****************************/