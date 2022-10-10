import React from "react";
import Card from "../Card/Card";
import ErrorOutlineTwoToneIcon from "@mui/icons-material/ErrorOutlineTwoTone";
function Validations() {
  return (
    <Card>
      <ErrorOutlineTwoToneIcon sx={{ fontSize: "large" }} />
      Please enter the value of the above field
    </Card>
  );
}
export default Validations;
