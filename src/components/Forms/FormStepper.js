import Stepper from "react-stepper-horizontal";

export default function FormStepper({ step }) {
  return (
    <Stepper
      activeColor={"#4CA76A"}
      completeTitleColor={"#4CA76A"}
      completeColor={"#4CA76A"}
      circleFontSize={"0"}
      steps={[{ title: "" }, { title: "" }, { title: "" }, { title: "" }]}
      activeStep={step}
    />
  );
}
