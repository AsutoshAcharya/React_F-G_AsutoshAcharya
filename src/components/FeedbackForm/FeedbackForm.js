import React from "react";
import "./FeedbackForm.css";
const FeedbackForm = (props) => {
  return (
    <div>
      <header>
        <h1>Aromatic Bar</h1>
      </header>
      <form className="review-form">
        <div className="form left">
          <label htmlFor="name">
            Customer Name<sup>*</sup>
          </label>
          <input type="text" placeholder="E.g.Jon Snow" required />
          <label htmlFor="phone">
            Phone<sup>*</sup>
          </label>
          <input type="number" required placeholder="9999999999" />
          <label htmlFor="quality">
            Please rate the quality of service you recived from your host.
            <sup>*</sup>
          </label>
          <div>
            <input
              type="radio"
              name="quality"
              value={"Excellent"}
              id="quality"
            />
            <span>Excellent</span>
            <input type="radio" name="quality" id="quality" value={"Good"} />
            <span>Good</span>
            <input type="radio" name="quality" value={"Fair"} id="quality" />
            <span>Fair</span>
            <input type="radio" name="quality" value={"Bad"} id="quality" />
            <span>Bad</span>
          </div>
          <label htmlFor="service">
            Was our restaurant clean?<sup>*</sup>
          </label>
          <div>
            <input
              type="radio"
              name="service"
              value={"Excellent"}
              id="service"
            />
            <span>Excellent</span>
            <input type="radio" name="service" id="service" value={"Good"} />
            <span>Good</span>
            <input type="radio" name="service" value={"Fair"} id="service" />
            <span>Fair</span>
            <input type="radio" name="service" value={"Bad"} id="service" />
            <span>Bad</span>
          </div>
        </div>
        <div className="form right">
          <label htmlFor="email">
            Email<sup>*</sup>
          </label>
          <input type="email" required placeholder="E.g:abc@gmail.com" />
          <label htmlFor="beverage">
            please rate the quality of beverage.<sup>*</sup>
          </label>
          <div>
            <input
              type="radio"
              name="beverage"
              value={"Excellent"}
              id="beverage"
            />
            <span>Excellent</span>
            <input type="radio" name="beverage" id="beverage" value={"Good"} />
            <span>Good</span>
            <input type="radio" name="beverage" value={"Fair"} id="beverage" />
            <span>Fair</span>
            <input type="radio" name="beverage" value={"Bad"} id="beverage" />
            <span>Bad</span>
          </div>
          <label htmlFor="experience">
            Please rate your dining experience.<sup>*</sup>
          </label>
          <div>
            <input
              type="radio"
              name="experience"
              value={"Excellent"}
              id="experience"
            />
            <span>Excellent</span>
            <input
              type="radio"
              name="experience"
              id="experience"
              value={"Good"}
            />
            <span>Good</span>
            <input
              type="radio"
              name="experience"
              value={"Fair"}
              id="experience"
            />
            <span>Fair</span>
            <input
              type="radio"
              name="experience"
              value={"Bad"}
              id="experience"
            />
            <span>Bad</span>
          </div>
          <div>
            <button type="submit">Submit Review</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FeedbackForm;
