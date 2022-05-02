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
import React, { useState, useEffect } from "react";
import SingleEvent from "./pages/EventPage";
import UserContext from "./context/userContext";
import axios from "axios";

function App() {
  const [selectedEvent, setSelectedEvent] = useState("");
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenResponse = await axios.post(
        "https://waste-no-time.herokuapp.com/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenResponse.data) {
        const userRes = await axios.get(
          "https://waste-no-time.herokuapp.com/users/",
          {
            headers: { "x-auth-token": token },
          }
        );
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };
    checkLoggedIn();
  }, []);

  return (
    <>
      <div>
      <UserContext.Provider value={{ userData, setUserData }}>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/form" element={<EventForm />} />
          <Route exact path="/form-submitted" element={<FinalPage />} />
          <Route
            exact
            path="/events"
            element={<EventList setSelectedEvent={setSelectedEvent} />}
          />
          <Route
            exact
            path="/event/:eventId"
            element={<SingleEvent eventId={selectedEvent} />}
          />
          <Route exact path="/sign-in" element={<SignIn />} />
          <Route exact path="/sign-up" element={<Signup />} />
        </Routes>

        <Footer />
        </UserContext.Provider>
      </div>
    </>
  );
}
export default App;
