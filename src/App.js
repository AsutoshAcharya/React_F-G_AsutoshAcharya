import Confirmation from "./components/ConfirmationPage/Confirmation";
import FeedbackForm from "./components/FeedbackForm/FeedbackForm";
import React from "react";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FeedbackForm />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </div>
  );
}

export default App;
