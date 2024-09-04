import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import About from './pages/About';
import Home from './pages/Home';
import PlatformComplaint from './pages/PlatformComplaint';
import TrainComplaint from './pages/TrainComplaint';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/platform-complaint" element={<PlatformComplaint />} />
          <Route path="/train-complaint" element={<TrainComplaint />} />
          <Route path="/track-complaint" element={<div>Track Complaint Page</div>} />
          <Route path="/chat-with-passengers" element={<div>Chat with Passengers Page</div>} />
          <Route path="/parcel-complaint" element={<div>Parcel Complaint Page</div>} />
          <Route path="/track-parcel" element={<div>Track Parcel Page</div>} />
          <Route path="/feedbacks" element={<div>Feedbacks Page</div>} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
