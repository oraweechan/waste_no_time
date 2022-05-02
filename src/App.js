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
import React, { useEffect, useState } from 'react'


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

<NavBar />
<Routes>
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
