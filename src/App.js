import "./App.css";
import SignIn from "./pages/SignIn";
import EventForm from "./pages/EventForm";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import FinalPage from "./components/Forms/FinalPage";
import EventList from "./pages/EventList";
import Signup from "./pages/Signup";
<<<<<<< HEAD
import EventReport from "./pages/EventReport";
=======
import React, { useEffect, useState } from 'react'

>>>>>>> 6ed29c179e4bb55250fcab0ee772fb06406b1cbe

function App() {
  const [eventData, setEventData] = useState();
  console.log(eventData)


  const MakeAPICall = async () => {
    const res = await fetch('https://waste-no-time.herokuapp.com/events');
    const data = await res.json();
    setEventData(data)
  }

useEffect(() => {
    MakeAPICall();
  }, [])
  

  return (
    <>
<<<<<<< HEAD
      <NavBar />
      <EventReport />
      <Routes>
=======

<NavBar />
<Routes>
>>>>>>> 6ed29c179e4bb55250fcab0ee772fb06406b1cbe
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/form" element={<EventForm />} />
        <Route exact path="/form-submitted" element={<FinalPage />} />
        <Route exact path="/events" element={<EventList eventData={eventData}/>} />
        <Route exact path="/event/:eventId" element={<EventList />} />
        <Route exact path="/sign-in" element={<SignIn />} />
        <Route exact path="/sign-up" element={<Signup />} />
      </Routes>


  
     
      
      <Footer />
    </>
  );
}
export default App;
