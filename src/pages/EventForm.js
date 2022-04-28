import Step1 from "../components/Forms/Step1";
import Step2 from "../components/Forms/Step2";
import Step3 from "../components/Forms/Step3";
import Step4 from "../components/Forms/Step4";
import FinalPage from "../components/Forms/FinalPage";
import { useState } from "react";


export default function EventForm() {
  const [step, setstep] = useState(1);

  // function getStepContent(step) {
  //   switch (step) {
  //     case 0:
  //       return <Step1 />;
  //     case 1:
  //       return  <Step2 />;
  //     case 2:
  //       return <Step3 />;
  //     case 3:
  //       return  <Step4 />;
  //     case 4:
  //       return <FinalPage />;
  //     default:
  //       throw new Error('Unknown step');
  //   }
  // }
  
  return (
    <div>
      <Step1 />
      <Step2 />
      <Step3 />
      <Step4 />
     <FinalPage />
    </div>
  )
}
