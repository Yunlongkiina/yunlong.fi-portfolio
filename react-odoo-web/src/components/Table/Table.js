import { useState,useEffect } from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

const Table = ({realTimeStockData}) => {
  const [tableData, setTableData] = useState(realTimeStockData);

  useEffect(() => {
    setTableData(realTimeStockData);
}, [realTimeStockData]);

    const columns = [
    { label: "Product Name", accessor: "name" },
    { label: "Onhand V", accessor: "whvQty" },
    { label: "Onhand H", accessor: "whhQtyOnhand" },
    { label: "Unreserved H", accessor: "whhQtyUnreserved" },
    { label: "7Days Sold", accessor: "soldIn30Days" },
    ];

 const handleSorting = (sortField, sortOrder) => {
    if (sortField) {
      const sorted = [...tableData].sort((a, b) => {
      if (a[sortField] === null) return 1;
      if (b[sortField] === null) return -1;
      if (a[sortField] === null && b[sortField] === null) return 0;
      return (
       a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
        numeric: true,
       }) * (sortOrder === "asc" ? 1 : -1)
      );
     });
     setTableData(sorted);
    }
   };

 return (
  <>
   <table className="table" style={{marginTop: '70px'}}>
    <caption>
        End Here!
    </caption>
    <TableHead columns={columns} handleSorting={handleSorting}/>
    {tableData?
        <TableBody columns={columns} realtimeTableData={tableData} />
        :<></>
    }
   </table>
  </>
 );
};

export default Table;
