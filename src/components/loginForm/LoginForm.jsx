import * as React from "react";
import { PhoneInput } from "./PhoneInput";
import { Header } from "./Header";

function LoginForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      <Header />
      <div className="flex-grow flex flex-col items-center justify-center px-5">
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <PhoneInput />
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
