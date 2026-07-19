import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import BottomNav from './components/BottomNav';
import './index.css';

import HealthDashboard from './pages/HealthDashboard';
import MedicineCabinet from './pages/MedicineCabinet';
import AiAssistantChat from './pages/AiAssistantChat';
import HealthProfileMemory from './pages/HealthProfileMemory';
import AddMedicine from './pages/AddMedicine';
import AdherenceReports from './pages/AdherenceReports';
import EmergencyMode from './pages/EmergencyMode';
import LocalModeSettings from './pages/LocalModeSettings';
import ExpandedReminderView from './pages/ExpandedReminderView';
import ExpandedReminderWithCountdown from './pages/ExpandedReminderWithCountdown';
import MedicineReminderNotification from './pages/MedicineReminderNotification';
import MissedDoseGuidance from './pages/MissedDoseGuidance';

function MainLayout() {
  return (
    <div className="bg-background text-on-background font-body-md min-h-screen pb-32">
      <Outlet />
      <BottomNav />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HealthDashboard />} />
          <Route path="/medicines" element={<MedicineCabinet />} />
          <Route path="/chat" element={<AiAssistantChat />} />
          <Route path="/profile" element={<HealthProfileMemory />} />
        </Route>
        
        {/* Pages without bottom nav (full screen or modals) */}
        <Route path="/add-medicine" element={<AddMedicine />} />
        <Route path="/adherence-reports" element={<AdherenceReports />} />
        <Route path="/emergency-mode" element={<EmergencyMode />} />
        <Route path="/local-mode-settings" element={<LocalModeSettings />} />
        <Route path="/reminder" element={<ExpandedReminderView />} />
        <Route path="/reminder-countdown" element={<ExpandedReminderWithCountdown />} />
        <Route path="/notification" element={<MedicineReminderNotification />} />
        <Route path="/missed-dose" element={<MissedDoseGuidance />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
