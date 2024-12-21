import React, { useRef } from "react";
import { PhoneInput } from "./PhoneInput";
import { Header } from "./Header";
import { useCustomNavigate } from "../../functions/navigate";

function LoginForm() {
  const navigate = useCustomNavigate();
  const phoneInputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const mobileNo = phoneInputRef.current.value;
    navigate("/account-setup", { mobileNo });
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      <Header title={"Login or Signup"} />
      <div className="flex-grow flex flex-col px-5">
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <PhoneInput ref={phoneInputRef} />
          <button
            type="submit"
            className="w-full px-6 py-4 mt-8 text-center text-white text-base font-medium bg-indigo-500 rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
            aria-label="Continue with login"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
