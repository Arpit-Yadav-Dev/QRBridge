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

function App() {
  return (
    <Router>
      <Logo /> {/* Can be placed outside Routes for a persistent header */}
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/account-setup" element={<AccountSetup />} />
        <Route path="/number-verification" element={<NumberVerification />} />
        <Route path="/dashboard" element={<QrDashboard />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/scan-qr" element={<HeroLayout />} />
        <Route path="/categories" element={<CategoryList />} />
        <Route path="/qr-details-form" element={<QRDetailsForm />} />
        <Route path="/qr-manager" element={<QRCodeManager />} />
        <Route path="/qr-details" element={<QRDetails />} />
        <Route path="/reward-form" element={<RewardForm />} />
        <Route path="/rewards" element={<RewardList />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
