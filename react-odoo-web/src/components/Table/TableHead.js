import { useState } from "react";

const TableHead = ({ columns,handleSorting }) => {
    const [sortField, setSortField] = useState("");
    const [order, setOrder] = useState("asc");

    const handleSortingChange = (accessor) => {
        const sortOrder =
         accessor === sortField && order === "asc" ? "desc" : "asc";
        setSortField(accessor);
        setOrder(sortOrder);
        handleSorting(accessor, sortOrder);
       };

    const th_style={
        textAlign: 'center',
    }
    const theadStyle={
        position: 'sticky',
        top: '56px',
        background: 'white',
        }
    return (
     <thead style={theadStyle}>
      <tr>
       {columns.map(({ label, accessor }) => {
        return <th
            style={th_style}
            key={accessor}
            onClick={() => handleSortingChange(accessor)}>{label}</th>;
       })}
      </tr>
     </thead>
    );
   };
   
   export default TableHead;