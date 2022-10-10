import React from "react";
import Card from "../Card/Card";
import ErrorOutlineTwoToneIcon from "@mui/icons-material/ErrorOutlineTwoTone";
function PhoneValidation() {
  return (
    <Card>
      <ErrorOutlineTwoToneIcon sx={{ fontSize: "large" }} />
      Please enter phone number
    </Card>
  );
}

export default PhoneValidation;
