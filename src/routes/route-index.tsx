import { Routes, Route, Navigate } from "react-router-dom";
import DashboardPage from "../pages/dashboard/page";
import AudioAnalysisPage from "../pages/audio-analysis/page";

const RouteIndex = () => {
  return (
    <Routes>
      {/* Redirect from root to the portfolio page */}
      <Route path="/" element={<Navigate replace to="/dashboard" />} />

      {/* Define nested routes */}
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/audio-analysis" element={<AudioAnalysisPage />} />
    </Routes>
  );
};

export default RouteIndex;
