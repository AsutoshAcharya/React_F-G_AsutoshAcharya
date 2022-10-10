import React from "react";
import Card from "../Card/Card";
import ErrorOutlineTwoToneIcon from "@mui/icons-material/ErrorOutlineTwoTone";

function NameValidation() {
  return (
    <Card>
      <ErrorOutlineTwoToneIcon sx={{ fontSize: "large" }} />
      Please enter your full name
    </Card>
  );
}

export default NameValidation;
