import React, { useState } from "react";
import FormField from "../components/Forms/FormField";
import { useNavigate } from "react-router-dom";


export default function EventReport1() {
  const [reportData, setReportData] = useState({
    "cleanUpReport.numOfVolunteers": "",
    "cleanUpReport.numOfBags": "",
    "cleanUpReport.imgBefore": "",
    "cleanUpReport.imgAfter": "",
  });
  let navigate = useNavigate();



  const handleChange = (name) => (e) => {
    e.preventDefault();
    setReportData({ ...reportData, [name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("https://waste-no-time.herokuapp.com/events/626f0ee3bd8c763730b5803e", {
        method: "PUT",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(reportData),
      });
    } catch (error) {
      console.log("error", error.message);
    }
    navigate(`/form-submitted`);
  };

  return (
    <div className="eventReportBody">
      <FormField
        value={reportData["cleanUpReport.numOfBags"]}
        handleChange={handleChange}
        htmlFor="cleanUpReport.numOfBags"
        label=" Number of Bags Collected*"
        id="cleanUpReport.numOfBags"
        handleChangeInput="cleanUpReport.numOfBags"
      />
      <FormField
        value={reportData["cleanUpReport.numOfVolunteers"]}
        handleChange={handleChange}
        htmlFor="cleanUpReport.numOfVolunteers"
        label="  Number of Volunteers"
        id="cleanUpReport.numOfVolunteers"
        handleChangeInput="cleanUpReport.numOfVolunteers"
      />
      <FormField
        value={reportData["cleanUpReport.imgBefore"]}
        handleChange={handleChange}
        htmlFor="cleanUpReport.imgBefore"
        label=" Pictures from before"
        id="cleanUpReport.imgBefore"
        handleChangeInput="cleanUpReport.imgBefore"
      />
      <FormField
        value={reportData["cleanUpReport.imgAfter"]}
        handleChange={handleChange}
        htmlFor="cleanUpReport.imgAfter"
        label="  Pictures from after"
        id="cleanUpReport.imgAfter"
        handleChangeInput="cleanUpReport.imgAfter"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
