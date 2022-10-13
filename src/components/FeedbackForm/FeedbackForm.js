import React, { useState, useEffect } from "react";
import "./FeedbackForm.css";
import { useNavigate } from "react-router-dom";
import Validations from "../formValidations/Validations";
import NameValidation from "../formValidations/NameValidation";
import PhoneValidation from "../formValidations/PhoneValidation";

import PacmanLoader from "react-spinners/PacmanLoader";


const FeedbackForm = (props) => {
  // const [quality, setQuality] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  let name, value;
  const [data, setData] = useState({
    name: "",
    phone: "",
    qualityOfService: "",
    cleanliness: "",
    email: "",
    beverage: "",
    diningExperience: "",
    id: Math.random(),
  });

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setData({ ...data, [name]: value });
  };

  const navigate = useNavigate();

  const pageChangeHandler = (event) => {
    event.preventDefault();
    if (
      data.name !== "" &&
      data.phone !== "" &&
      data.qualityOfService !== "" &&
      data.cleanliness !== "" &&
      data.email !== "" &&
      data.beverage !== "" &&
      data.diningExperience !== ""
    ) {
      if (data.email.includes("@")) {
        // storing data in local storage
        localStorage.setItem(data.id, JSON.stringify(data));

        // navigation

        navigate("/Confirmation");
      }
    }
  };

  return (
    <div>
      {loading === true ? (
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
          <header className="header">
            <h1>Aromatic Bar</h1>
          </header>
          <form className="review-form">
            <div className="form left">
              <label htmlFor="name" className="label">
                Customer Name<sup>*</sup>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="E.g.Jon Snow"
                required
                value={data.name}
                onChange={handleInputs}
              />
              <br />
              {data.name === "" && <NameValidation />}
              <label htmlFor="phone" className="label">
                Phone<sup>*</sup>
              </label>
              <input
                id="phone"
                name="phone"
                type="number"
                required
                placeholder="9999999999"
                value={data.phone}
                onChange={handleInputs}
              />
              <br />
              {data.phone === "" && <PhoneValidation />}
              <label htmlFor="qualityOfService" className="label">
                Please rate the quality of service you received from your host.
                <sup>*</sup>
              </label>
              <div>
                <input
                  type="radio"
                  name="qualityOfService"
                  id="quality"
                  value={"Excellent"}
                  onChange={handleInputs}
                />

                <span className="span">Excellent</span>
                <input
                  type="radio"
                  name="qualityOfService"
                  id="quality"
                  value={"Good"}
                  onChange={handleInputs}
                />

                <span className="span">Good</span>
                <input
                  type="radio"
                  name="qualityOfService"
                  id="quality"
                  value={"Fair"}
                  onChange={handleInputs}
                />

                <span className="span">Fair</span>
                <input
                  type="radio"
                  name="qualityOfService"
                  id="quality"
                  value={"Bad"}
                  onChange={handleInputs}
                />

                <span className="span">Bad</span>
              </div>
              <label htmlFor="cleanliness" className="label">
                Was our restaurant clean?<sup>*</sup>
              </label>
              <div>
                <input
                  type="radio"
                  name="cleanliness"
                  id="cleanliness"
                  value={"Excellent"}
                  onChange={handleInputs}
                />
                <span className="span">Excellent</span>
                <input
                  type="radio"
                  name="cleanliness"
                  id="cleanliness"
                  value={"Good"}
                  onChange={handleInputs}
                />
                <span className="span">Good</span>
                <input
                  type="radio"
                  name="cleanliness"
                  id="cleanliness"
                  value={"Fair"}
                  onChange={handleInputs}
                />
                <span className="span">Fair</span>
                <input
                  type="radio"
                  name="cleanliness"
                  id="cleanliness"
                  value={"Bad"}
                  onChange={handleInputs}
                />
                <span className="span">Bad</span>
              </div>
            </div>
            <div className="form right">
              <label htmlFor="email" className="label">
                Email<sup>*</sup>
              </label>
              <input
                name="email"
                id="email"
                type="email"
                required
                placeholder="E.g:abc@gmail.com"
                value={data.email}
                onChange={handleInputs}
              />
              {data.email === "" && <Validations />}
              <label htmlFor="beverage" className="label">
                please rate the quality of beverage.<sup>*</sup>
              </label>
              <div>
                <input
                  type="radio"
                  name="beverage"
                  id="beverage"
                  value={"Excellent"}
                  onChange={handleInputs}
                />
                <span className="span">Excellent</span>
                <input
                  type="radio"
                  name="beverage"
                  id="beverage"
                  value={"Good"}
                  onChange={handleInputs}
                />
                <span className="span">Good</span>
                <input
                  type="radio"
                  name="beverage"
                  id="beverage"
                  value={"Fair"}
                  onChange={handleInputs}
                />
                <span className="span">Fair</span>
                <input
                  type="radio"
                  name="beverage"
                  id="beverage"
                  value={"Bad"}
                  onChange={handleInputs}
                />
                <span className="span">Bad</span>
              </div>
              <label htmlFor="diningExperience" className="label">
                Please rate your dining experience.<sup>*</sup>
              </label>
              <div>
                <input
                  type="radio"
                  name="diningExperience"
                  id="experience"
                  value={"Excellent"}
                  onChange={handleInputs}
                />
                <span className="span">Excellent</span>
                <input
                  type="radio"
                  name="diningExperience"
                  id="experience"
                  value={"Good"}
                  onChange={handleInputs}
                />
                <span className="span">Good</span>
                <input
                  type="radio"
                  name="diningExperience"
                  id="experience"
                  value={"Fair"}
                  onChange={handleInputs}
                />
                <span className="span">Fair</span>
                <input
                  type="radio"
                  name="diningExperience"
                  id="experience"
                  value={"Bad"}
                  onChange={handleInputs}
                />
                <span className="span">Bad</span>
              </div>
              <div className="btn">
                <button
                  type="submit"
                  className="button"
                  onClick={pageChangeHandler}
                >
                  Submit Review
                </button>
              </div>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default FeedbackForm;
