import './FormHeader.css'

export default function FormHeader({ text="" }) {
  return (
    <div className="formHeader">
      <h3>{text}</h3>
    </div>
  );
}
