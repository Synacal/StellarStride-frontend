import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from "./screens/login-page";
import SignupPage from './screens/signup-page';
import AppBarComponent from './components/Common/appbar';
import ProfilePage from './screens/profile-page';
import BookingFirstPhase from './screens/booking-form-01';
import BookingSecondPhase from './screens/booking-form-02';
import BookingThirdPhase from './screens/booking-form-03';

function App() {
  const user = false
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
