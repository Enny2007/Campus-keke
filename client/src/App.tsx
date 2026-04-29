import { Routes, Route } from "react-router-dom";
import HeaderNav from "./layouts/HeaderNav";
import Home from "./pages/Home";
import StudentLogin from "./pages/student/StudentLogin";
import DriverLogin from "./pages/driver/DriverLogin";
import StudentSignUp from "./pages/student/StudentSignUp";
import StudentDashboard from "./pages/student/StudentDashboard";
import DriverDashboard from "./pages/driver/DriverDashboard";
import RideStatus from "./pages/student/RideStatus";

function App() {
  return (
    <>
      <HeaderNav />

      <main className="pt-[64px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student-login" element={<StudentLogin />} />
          <Route path="/driver-login" element={<DriverLogin />} />
          <Route path="/student-sign-up" element={<StudentSignUp />} />
          <Route path="/driver-dashboard" element={<DriverDashboard />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route
            path="/student-dashboard/student-ride-status"
            element={<RideStatus />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
