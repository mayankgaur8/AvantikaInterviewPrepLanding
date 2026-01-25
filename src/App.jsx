import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProProvider } from "./auth/ProContext";

import Home from "./pages/Home";
import PricingPage from "./pages/PricingPage.jsx";
import McqTopicsPage from "./pages/McqTopicsPage";
import McqPage from "./pages/McqPage";
import TopicPage from "./pages/TopicPage";
import ProRoute from "./auth/ProRoute";
import InterviewBot from "./pages/InterviewBot";
import ResumeBuilder from "./pages/ResumeBuilder";
import CodingExercise from "./pages/CodingExercise";
import SiteFrame from "./components/SiteFrame";

export default function App() {
  return (
    <ProProvider>
      <BrowserRouter>
        <SiteFrame>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<PricingPage />} />

            {/* Optional topic page */}
            <Route path="/topic/:topicId" element={<TopicPage />} />

            {/* Protected MCQ listing + topic pages */}
            <Route
              path="/mcq"
              element={
                <ProRoute>
                  <McqTopicsPage />
                </ProRoute>
              }
            />

            <Route
              path="/mcq/:topicId"
              element={
                <ProRoute>
                  <McqPage />
                </ProRoute>
              }
            />

            {/* Interview Bot for Pro users */}
            <Route
              path="/pro/interview"
              element={
                <ProRoute>
                  <InterviewBot />
                </ProRoute>
              }
            />

            {/* Resume Builder (Pro) */}
            <Route
              path="/pro/resume"
              element={
                <ProRoute>
                  <ResumeBuilder />
                </ProRoute>
              }
            />

            {/* Coding Exercise (Pro) */}
            <Route
              path="/pro/coding-exercise"
              element={
                <ProRoute>
                  <CodingExercise />
                </ProRoute>
              }
            />

            {/* Fallback */}
            <Route path="*" element={<div style={{ padding: 24 }}>Not found</div>} />
          </Routes>
        </SiteFrame>
      </BrowserRouter>
    </ProProvider>
  );
}
