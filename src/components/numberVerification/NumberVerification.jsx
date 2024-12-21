import * as React from "react";
import NumberInput from "./NumberInput";
import { Header } from "../loginForm/Header";
import { useCustomNavigate } from "../../functions/navigate";

function NumberVerification() {
  const navigate = useCustomNavigate();
  const [verificationCode, setVerificationCode] = React.useState([
    "",
    "",
    "",
    "",
  ]);
  const [cooldown, setCooldown] = React.useState(0); // Track cooldown in seconds
  const [expire, setExpire] = React.useState(false);
  // Handle individual digit input
  const handleChange = (index, value) => {
    const updatedCode = [...verificationCode];
    updatedCode[index] = value;
    setVerificationCode(updatedCode);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!expire) {
      setExpire(true);
      alert("Submit again to move ahead");
      return;
    }
    navigate("/dashboard");
    const otp = verificationCode.join(""); // Combine digits into a string
    console.log("Submitted OTP:", otp);
    // Add your verification logic here
  };

  // Resend OTP logic
  const handleResendOTP = () => {
    console.log("Resend OTP triggered");

    // Simulate sending OTP and start the cooldown timer
    setCooldown(60); // Start with 60 seconds cooldown

    // Countdown timer to update the cooldown state
    const timer = setInterval(() => {
      setCooldown((prev) => {
        if (prev <= 1) {
          clearInterval(timer); // Stop the timer once cooldown reaches 0
          return 0;
        }
        return prev - 1;
      });
    }, 1000); // Update every second
  };

  return (
    <div className="flex flex-col items-center w-full bg-white pb-[647px] max-md:pb-24 max-md:max-w-full">
      <Header title="Number Verification" />

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center w-full px-5"
      >
        <div className="flex gap-5 mt-10 max-w-full whitespace-nowrap w-[252px]">
          {verificationCode.map((digit, index) => (
            <NumberInput
              key={index}
              value={digit}
              index={index}
              onChange={handleChange}
            />
          ))}
        </div>
        {expire ? (
          <p className="text-red-700 mt-2">
            Your OTP has expired or is incorrect, please retry.
          </p>
        ) : null}

        <button
          type="submit"
          className="overflow-hidden gap-2 self-stretch px-6 py-5 mt-10 w-full text-sm tracking-normal text-center text-white whitespace-nowrap bg-blue-800 rounded max-w-[560px] min-h-[48px] max-md:px-5 max-md:max-w-full"
        >
          Verify
        </button>

        <button
          type="button"
          onClick={handleResendOTP}
          disabled={cooldown > 0} // Disable button if cooldown is active
          className="mt-6 mb-0 text-xs font-semibold tracking-normal text-sky-600 max-md:mb-2.5"
        >
          {cooldown > 0 ? `Resend OTP in ${cooldown}s` : "Resend OTP"}
        </button>
      </form>
    </div>
  );
}

export default NumberVerification;
