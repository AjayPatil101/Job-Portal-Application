// App.jsx
import './App.css';
import { createTheme, Divider, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/tiptap/styles.css';

import { Route, Routes, useLocation } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import FindJobs from './Pages/FindJobs';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import FindTalentPage from './Pages/FindTalentPage';
import TalentProfile from './Pages/TalentProfile';
import PostJobPage from './Pages/PostJobPage';
import JobDescPage from './Pages/JobDescPage';
import ApplyJobPage from './Pages/ApplyJobPage';
import CompanyPage from './Pages/CompanyPage';
import PostedJobPage from './Pages/PostedJobPage';
import JobHistoryPage from './Pages/JobHistoryPage';
import SignUpPage from './Pages/SignUpPage';

function App() {
  const location = useLocation();

  const theme = createTheme({
    colors: {
      brightSun: ['#fffbeb', '#fff3c6', '#ffe588', '#ffd149', '#ffbd20', '#f99b07', '#dd7302', '#b75006', '#943c0c', '#7a330d', '#461902'],
      mineShaft: ['#f6f6f6', '#e7e7e7', '#d1d1d1', '#b0b0b0', '#888888', '#6d6d6d', '#5d5d5d', '#4f4f4f', '#454545', '#3d3d3d', '#2d2d2d']
    },
    fontFamily: 'poppins, sans-serif',
    focusRing: 'never',
    primaryColor: 'brightSun',
    primaryShade: 4,
  });

  return (
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      <div className="relative">
        {location.pathname !== '/signup' && <Header />}
        <Divider size="xs" mx="md" />

        <Routes>
          <Route path="/find-jobs" element={<FindJobs />} />
          <Route path="/apply-job" element={<ApplyJobPage />} />
          <Route path="/find-talent" element={<FindTalentPage />} />
          <Route path="/jobs" element={<JobDescPage />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/talent-profile" element={<TalentProfile />} />
          <Route path="/post-job" element={<PostJobPage />} />
          <Route path="/posted-job" element={<PostedJobPage />} />
          <Route path="/job-history" element={<JobHistoryPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>

        {location.pathname !== '/signup' && <Footer />}
      </div>
    </MantineProvider>
  );
}

export default App;
