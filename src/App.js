import "./App.css";
import SignIn from "./pages/SignIn";
import EventForm from "./pages/EventForm";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      {/* <SignIn /> */}
      {/* <EventForm /> */}
      <Footer />
    </div>
  );
}

export default App;
