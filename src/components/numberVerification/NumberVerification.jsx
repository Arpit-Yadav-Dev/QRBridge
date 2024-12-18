import * as React from "react";
import NumberInput from "./NumberInput";

function NumberVerification() {
  const [verificationCode, setVerificationCode] = React.useState([
    "1",
    "1",
    "",
    "",
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col items-center w-full bg-white pb-[647px] max-md:pb-24 max-md:max-w-full">
      <header className="self-stretch px-16 py-6 w-full bg-white shadow-[0px_8px_16px_rgba(0,0,0,0.06)] max-md:px-5 max-md:max-w-full">
        Number Verification
      </header>

      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <div className="flex gap-5 mt-10 max-w-full whitespace-nowrap w-[252px]">
          {verificationCode.map((digit, index) => (
            <NumberInput key={index} value={digit} />
          ))}
        </div>

        <button
          type="submit"
          className="overflow-hidden gap-2 self-stretch px-6 py-5 mt-10 w-full text-sm tracking-normal text-center text-white whitespace-nowrap bg-sky-600 rounded max-w-[560px] min-h-[48px] max-md:px-5 max-md:max-w-full"
        >
          Verify
        </button>

        <button
          type="button"
          className="mt-6 mb-0 text-xs font-semibold tracking-normal text-sky-600 max-md:mb-2.5"
        >
          Resend OTP
        </button>
      </form>
    </div>
  );
}

export default NumberVerification;
