import React from "react";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import "./Confirmation.css";
import { useNavigate } from "react-router-dom";
import PacmanLoader from "react-spinners/PacmanLoader";
import { useState, useEffect } from "react";
function Confirmation() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  const pageChangeHandler = (e) => {
    navigate("/Confirmation/Details");
  };
  return (
    <div>
      {loading ? (
        <PacmanLoader
          color="#2c1252"
          cssOverride={{
            display: "block",
            margin: "0 auto",
            borderColor: "red",
            marginTop: "50vh",
          }}
        />
      ) : (
        <>
        <div className="confirmation">
          <CheckCircleRoundedIcon sx={{ color: "green", fontSize: "7rem" }} />
          <h3>Thank you for providing the feedback</h3>
          <p> We will work towards improving your experience </p>
          <button className="btn2" onClick={pageChangeHandler}>
            Close
          </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Confirmation;
