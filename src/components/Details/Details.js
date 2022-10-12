import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DetailsHeader from "../DetailsHeader/DetailsHeader";

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
  const rows = allStorage();

  return (
    <div>
      <DetailsHeader data={rows}/>
    <TableContainer component={Paper} >
      <Table sx={{ width:'150%', height: "40vh" }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{backgroundColor:'rgb(239, 233, 251)'}}>
            <TableCell align="center">
              <input type="checkbox" name="" id="" />
            </TableCell>
            <TableCell align="center">Form Details</TableCell>
            <TableCell align="center">Customer Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Phone</TableCell>
            <TableCell align="center">
              Please rate the quality of service you received from host
            </TableCell>
            <TableCell align="center">
              Please rate the quality of beverage
            </TableCell>
            <TableCell align="center">
              Please rate the quality of overall dining experience
            </TableCell>
            <TableCell align="center">Was our restaurant clean?</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>
                <input type="checkbox" name="" id="" />
              </TableCell>
              <TableCell sx={{color:''}}>View Details</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell component="th" scope="row">
                {row.email}
              </TableCell>
              <TableCell align="center">{row.phone}</TableCell>
              <TableCell align="center">{row.qualityOfService}</TableCell>
              <TableCell align="center">{row.beverage}</TableCell>
              <TableCell align="center">{row.diningExperience}</TableCell>
              <TableCell align="center">{row.cleanliness}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default Details;
