import FirstStep from "../components/Forms/FirstStep";
import SecondStep from "../components/Forms/SecondStep";
import ThirdStep from "../components/Forms/ThirdStep";
import FourthStep from "../components/Forms/FourthStep";
import FinalPage from "../components/Forms/FinalPage";
import { useState } from "react";
import FormHeader from "../components/Forms/FormHeader";
import { Paper, Box, Container, Button } from "@mui/material";
import { Routes, Route } from "react-router-dom";

export default function EventForm() {
  const [formData, setFormData] = useState({
    'termsAndConditions': "",
    organizationName: "",
    eventName: "",
    cleanupLocation: "",
    "primaryContact.firstName": "",
    "primaryContact.lastName": "",
    "primaryContact.address": "",
    "primaryContact.mobilePhone": "",
    "primaryContact.email": "",
    "secondaryContact.firstName": "",
    "secondaryContact.lastName": "",
    "secondaryContact.address": "",
    "secondaryContact.mobilePhone": "",
    "secondaryContact.email": "",
    "dateCleanup.date": "",
    "dateCleanup.startTime": "",
    "dateCleanup.endTime": "",
    "rainDate.date": "",
    "rainDate.startTime": "",
    "rainDate.endTime": "",
    "mainStreetCleaning1.mainStreet": "",
    "mainStreetCleaning1.crossStreet1": "",
    "mainStreetCleaning1.crossStreet2": "",
    "mainStreetCleaning2.mainStreet": "",
    "mainStreetCleaning2.crossStreet1": "",
    "mainStreetCleaning2.crossStreet2": "",
    "mainStreetCleaning3.mainStreet": "",
    "mainStreetCleaning3.crossStreet1": "",
    "mainStreetCleaning3.crossStreet2": "",
    "bagPickupLocation1.bagPickupLocation": "",
    "bagPickupLocation1.atIntersection": "",
    "bagPickupLocation1.inFront": "",
    "bagPickupLocation2.bagPickupLocation": "",
    "bagPickupLocation2.atIntersection": "",
    "bagPickupLocation2.inFront": "",
    "bagPickupLocation3.bagPickupLocation": "",
    "bagPickupLocation3.atIntersection": "",
    "bagPickupLocation3.inFront": "",
    litter: "",
    largerItems: "",
    requiredSupplies: "",
    brooms: "",
    shovels: "",
    rakes: "",
    litterPickers: "",
    gloves: "",
    volunteerCount: "",
    consentToPublic: "",
  });
  const [step, setStep] = useState(1);
  const handleChange = (name) => (e) => {
    setFormData({ ...formData, [name]: e.target.value });
  };

  console.log(formData)

  return (
    <div className="form">
      <div className="progressbar">
        <div
          style={{ width: step === 0 ? "33.3%" : step == 1 ? "66.6%" : "100%" }}
        ></div>
      </div>
      <div className="form-container">
        <FormHeader />
        <Routes>
          <Route
            element={
              <FirstStep step={step} setStep={setStep}  handleChange={handleChange} />
            }
            path="/form/1"
            exact={true}
          />
          <Route
            element={
              <SecondStep step={step} setStep={setStep} handleChange={handleChange} />
            }
            path="/form/2"
          />
          <Route
            element={<ThirdStep handleChange={handleChange} />}
            path="/form/3"
          />
          <Route
            element={<FourthStep handleChange={handleChange} />}
            path="/form/4"
          />
          <Route
            element={<FinalPage handleChange={handleChange} />}
            path="/form/finished"
          />
        </Routes>
      </div>
    </div>
  );
}
