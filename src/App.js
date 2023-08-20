import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from "./screens/login_page";
import SignupPage from './screens/signup_page';
import AppBarComponent from './components/Common/appbar';
import ProfilePage from './screens/profile_page';
import BookingFirstPhase from './screens/booking_form_01';
import BookingSecondPhase from './screens/booking_form_02';
import BookingThirdPhase from './screens/booking_form_03';
import { Explore } from '@mui/icons-material';
import ExplorePage from './screens/explore-page';

function App() {
  const user = true
  return (
    <div>
      <Router>
        {user ? (
          <>

            <div>
              <AppBarComponent />
              <Routes>

                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/booking-phase-1" element={<BookingFirstPhase />} />
                <Route path="/booking-phase-2" element={<BookingSecondPhase />} />
                <Route path="/booking-phase-3" element={<BookingThirdPhase />} />
                <Route path="/explore" element={<ExplorePage />} />
              </Routes>

            </div>
          </>
        ) : (
          <>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
            </Routes>
          </>
        )
        }
      </Router>
    </div>
  );
}

export default App;
