import React,{useState, useEffect} from 'react';
import goldencropapi from '../../api/goldencropapi';
import Table from '../../components/Table/Table';

const RealtimeStock = () => {

    useEffect(() => {
        getRealTimeStock();
    }, []);
    const [stock, setStock] = useState();
    const [err, setErr] = useState(false);

    const getRealTimeStock=()=>{
        goldencropapi.get('api/v15/productsqtylocationhandv')
        .then((res)=>{
            setStock(res.data);
        }).catch((err)=>{
            setErr(err)
        })
    }
    return (
		<React.Fragment>
            {stock?
                <Table realTimeStockData={stock} />:<></>
            }
          {err?<text>{err}</text>:<></>}
		</React.Fragment>
	)
}
export default RealtimeStock;