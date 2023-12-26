const TableBody = ({ realtimeTableData, columns }) => {
    return (
     <tbody>
        {realtimeTableData.map((data, index) => {
            let color = data['whhQtyUnreserved'] < 10 && data['whvQty']>0? 'yellow':null;

            return (
                <tr
                    style={{backgroundColor:color}}
                    key={index}>
                    {columns.map(({ accessor }) => {
                    let tData;
                    if(data[accessor]){
                        if(accessor === 'soldIn30Days'){
                            tData = data[accessor]/4;
                        }else{
                            tData = data[accessor]
                        }
                    }else{
                        tData = '0'
                    }
                    // const tData = data[accessor] ? data[accessor] : "0";
                    return <td key={accessor} style={{fontWeight:'bold',textAlign:'justify'}}>{tData}</td>;
                    })}
                </tr>
            );
        }
    )
    }
     </tbody>
    );
   };
   
   export default TableBody;