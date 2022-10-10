import React from "react";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import "./Confirmation.css";
import { useNavigate } from "react-router-dom";
function Confirmation() {
  const navigate = useNavigate();

  const pageChangeHandler = (e) => {
    navigate("/Confirmation/Details");
  };
  return (
    <div className="confirmation">
      <CheckCircleRoundedIcon sx={{ color: "green", fontSize: "7rem" }} />
      <h3>Thank you for providing the feedback</h3>
      <p> We will work towards improving your experience </p>
      <button className="btn2" onClick={pageChangeHandler}>
        Close
      </button>
    </div>
  );
}

export default Confirmation;
