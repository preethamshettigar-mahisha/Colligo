import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentDashboard from "./components/Studentdashboard";
import StudyMaterials from "./components/Studymaterials";
import BusTracker from "./components/BusTracker";
import Navbar from "./components/Navbar";
import LostFound from "./components/LostFound";
import CanteenMenu from "./components/CanteenMenu";
import SignInPage from "./components/SignInPage";
import SignUpPage from "./components/SignUpPage";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<StudentDashboard />} />
        <Route path="/materials" element={<StudyMaterials />} />
        <Route path="/bus" element={<BusTracker />} />
        <Route path="/lostfound" element={<LostFound />} />
        <Route path="/canteen" element={<CanteenMenu />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />



      </Routes>
    </Router>
  );
}

export default App;
