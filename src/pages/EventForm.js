import { useState } from "react"
import Step1 from "../components/Forms/Step1"
import Step2 from "../components/Forms/Step2"
import Step3 from "../components/Forms/Step3"
import Step4 from "../components/Forms/Step4"


export default function EventForm() {
  
  return (
    <div>
      <Step1 />
      <Step2 />
      <Step3 />
      <Step4 />
    </div>
  )
}
