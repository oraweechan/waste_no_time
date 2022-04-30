import FirstStep from "../components/Forms/FirstStep";
import SecondStep from "../components/Forms/SecondStep";
import ThirdStep from "../components/Forms/ThirdStep";
import FourthStep from "../components/Forms/FourthStep";
import FormHeader from "../components/Forms/FormHeader"
import { useState } from "react";

export default function EventForm() {
  const [formData, setFormData] = useState({
    termsAndConditions: "",
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
  const [step, setStep] = useState(0);

  const handleChange = (name) => (e) => {
    e.preventDefault();
    setFormData({ ...formData, [name]: e.target.value });
  };

  // console.log(formData);
  // console.log(step);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("https://waste-no-time.herokuapp.com/events", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(formData),
      });
    } catch (error) {
      console.log("error", error.message);
    }
  };

  const FormDisplay = () => {
    if (step === 1) {
      return (
        <SecondStep
          formData={formData}
          step={step}
          setStep={setStep}
          handleChange={handleChange}
        />
      );
    }
    if (step === 2) {
      return (
        <ThirdStep
          formData={formData}
          step={step}
          setStep={setStep}
          handleChange={handleChange}
        />
      );
    }
    if (step === 3) {
      return (
        <FourthStep
          formData={formData}
          step={step}
          setStep={setStep}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      );
    } else {
      return (
        <FirstStep step={step} setStep={setStep} handleChange={handleChange} />
      );
    }
  };

  return (
    <div className="form">
      <FormHeader />
      {FormDisplay()}
     
    </div>
  );
}
