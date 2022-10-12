// import { TableHead } from "@mui/material";
import React from "react";
// import { useMemo } from "react";
// import { useTable } from "react-table";
// import MaterialTable from '@mui/icons-material';

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

  const columns = [
    
    {
      title: "Customer Name",
      field: "name",
    },
    {
      title: "Email",
      field: "email",
    },
    {
      title: "Phone",
      field: "phone",
    },
    {
      title: "Please rate the quality of service you recived from host",
      field: "qualityOfService",
    },
    {
      title: "Please rate the quality of beverage",
      field: "beverage",
    },
    {
      title: "Please rate the overall dining experience",
      field: "diningExperience",
    },
    {
      title: "Was our restaurant clean?",
      field: "cleanliness",
    },
  ];
  return <div>
    sdsadsd
{/* <MaterialTable data={data} columns={columns}/> */}

  </div>;
}

export default Details;
