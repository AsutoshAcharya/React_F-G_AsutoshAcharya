import { TableHead } from "@mui/material";
import React from "react";
import { useMemo } from "react";
import { useTable } from "react-table";
function Details() {
  function allStorage() {
    var values = [],
      keys = Object.keys(localStorage),
      i = keys.length;

    while (i--) {
      values.push(JSON.parse(localStorage.getItem(keys[i])));
    }

    return values;
  }
  const data = allStorage();
  console.log(data);
  console.log(data.length);

  const columns = useMemo(() => {
    return [
      {
        header: "formDetails",
        accessor: "view details",
      },
      {
        header: "Customer Name",
        accessor: "name",
      },
      {
        header: "Email",
        accessor: "email",
      },
      {
        header: "Phone",
        accessor: "phone",
      },
      {
        header: "Please rate the quality of service you recived from host",
        accessor: "qualityOfService",
      },
      {
        header: "Please rate the quality of beverage",
        accessor: "beverage",
      },
      {
        header: "Please rate the overall dining experience",
        accessor: "diningExperience",
      },
      {
        header: "Was our restaurant clean?",
        accessor: "cleanliness",
      },
    ];
  });

  // const tableInstance = useTable({ columns, data });
  // const[getTableProps,getTableBodyProps,headerGroups,rows,prepareRow]=tableInstance;
  // return <Table {...getTableBodyProps}>
  //   <TableHead>
  //     {headerGroups.map(headerGroup=>)}
  //   </TableHead>
  // </Table>
  <div></div>;
}

export default Details;
