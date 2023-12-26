import React from 'react';
import Table from 'react-bootstrap/Table';
import DeliverOrderLine from './DeliverOrderLine';

const RenderTable=({deliverOrderLines, setOrderLine})=>{
	return(
		<React.Fragment>
			{
				deliverOrderLines?
					<Table striped bordered hover>
						<thead><tr>
                            <th></th>
                            <th>Code</th>
                            <th>Product Name</th>
                            <th>Demand</th>
                            <th>DoneQty</th>
                            <th>UoM</th>
                            <th>Action</th>
							</tr></thead>
						<tbody>
							{
                                deliverOrderLines.map( 
                                    item=>
                                        < DeliverOrderLine
                                            key={item.sequence}
                                            deliverOrderLine = {item}
                                            setOrderLine = {setOrderLine}
                                        />
                                )
                            }
						</tbody>
				</Table>:<div></div>
			}

		</React.Fragment>
	)
}


export default RenderTable;