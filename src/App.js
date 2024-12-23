import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Logo from "./components/logo/Logo";
import "./App.css";
import LoginForm from "./components/loginForm/LoginForm";
import AccountSetup from "./components/accountSetup/AccountSetup";
import NumberVerification from "./components/numberVerification/NumberVerification";
import QrDashboard from "./components/qrDashboard/QrDashboard";
import { RegistrationPage } from "./components/registrationForm/RegistrationPage";
import { HeroLayout } from "./components/heroLayout/HeroLayout";
import CategoryList from "./components/category/CategoryList";
import QRDetailsForm from "./components/qrDetailsForm/QRDetailsForm";
import QRCodeManager from "./components/qrManager/QRCodeManager";
import { QRDetails } from "./components/qrDetails/QRDetails";
import RewardForm from "./components/rewardForm/RewardForm";
import RewardList from "./components/rewardList/RewardList";
import Profile from "./components/profile/Profile";
import ProfilePage from "./components/profileEdit/ProfilePage";
import { Navigation } from "./components/navigation/Navigation";
import SettingsLayout from "./components/settings/SettingsLayout";
import DeleteAccountForm from "./components/deleteAccount/DeleteAccountForm";

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <Logo />
        </header>
        <main className="app-content">
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/account-setup" element={<AccountSetup />} />
            <Route
              path="/number-verification"
              element={<NumberVerification />}
            />
            <Route path="/dashboard" element={<QrDashboard />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/scan-qr" element={<HeroLayout />} />
            <Route path="/categories" element={<CategoryList />} />
            <Route path="/qr-details-form" element={<QRDetailsForm />} />
            <Route path="/qr-manager" element={<QRCodeManager />} />
            <Route path="/qr-details" element={<QRDetails />} />
            {/* <Route path="/reward-form" element={<RewardForm />} /> pop up */}
            {/* <Route path="/rewards" element={<RewardList />} /> internal component */}
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile-edit" element={<ProfilePage />} />
            <Route path="/settings" element={<SettingsLayout />} />
            <Route path="/delete-account" element={<DeleteAccountForm />} />
          </Routes>
        </main>
        <footer className="app-footer">
          <Navigation />
        </footer>
      </div>
    </Router>
  );
}

export default App;
