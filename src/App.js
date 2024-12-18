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
    <>
      <Logo />
      <LoginForm />
      <AccountSetup/>
      <NumberVerification/>
      <QrDashboard/>
      <RegistrationPage/>
      <HeroLayout />
      <CategoryList />
      <QRDetailsForm />
      <QRCodeManager />
      <QRDetails />
      <RewardForm />
      <RewardList />
      <Profile/>
    </>
  );
}

export default App;
