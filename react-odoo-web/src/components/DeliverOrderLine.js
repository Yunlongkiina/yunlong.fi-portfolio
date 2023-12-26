import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';

const DeliverOrderLine = ({deliverOrderLine,setOrderLine}) => {
    const [doneQty, setDoneQty] = useState(deliverOrderLine.qtyDone);
    const [checked, setChecked] = useState(deliverOrderLine.checked_by_picker);

    // useEffect(() => {
    //     if(deliverOrderLine.checked_by_picker){
    //         setDoneQty(deliverOrderLine.qtyDone);
    //     }else{
    //         setDoneQty(deliverOrderLine.demand);
    //     }
	//   }, [deliverOrderLine.checked_by_picker,deliverOrderLine.qtyDone,deliverOrderLine.demand]);

    return (
		<React.Fragment>
            <tr style={{backgroundColor:checked? '#7dd87d': null}}>
                <td>{deliverOrderLine.sequence}</td>
                <td style={{textAlign: 'justify'}}>{deliverOrderLine.pickingCode}</td>
                <td style={{textAlign:'justify'}}>{deliverOrderLine.proName}</td>
                <td>{deliverOrderLine.demand}</td>
                <td style={{width:'100px'}}>
                    <input
                        style={{width:'100px',textAlign:'center'}}
                        type="number"
                        value={doneQty}
                        onChange={e => setDoneQty(e.target.value)}
                        readOnly={checked? true:false}
                    />
                </td>
                <td>{deliverOrderLine.UoM}</td>
                <th><Button 
                    variant="outline-secondary"
                    onClick={()=>{
                        setChecked(!checked)
                        if(!checked){
                            deliverOrderLine.qtyDone = Number(doneQty);
                            deliverOrderLine.checked_by_picker = true;
                            setOrderLine(deliverOrderLine);
                        }else{
                            deliverOrderLine.checked_by_picker = false;
                            setOrderLine(deliverOrderLine);
                        }
                    }}
                >{checked? 'Edit':'Checked'}</Button></th>
            </tr>
		</React.Fragment>
	)
}

export default DeliverOrderLine;