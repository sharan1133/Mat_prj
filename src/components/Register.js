import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState('');
  const [otp, setOTP] = useState('');
  const [showOTPField, setShowOTPField] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!showOTPField) {
      // Simulate sending OTP to the email
      setShowOTPField(true);
    } else {
      // Verify OTP and proceed with login
      console.log('Logging in with email:', email, 'and OTP:', otp);
    }
  };

  return (
    <div className="flex justify-center mt-4 mb-4">
      <div className="max-w-screen-xl w-full shadow-md rounded">
        <form onSubmit={handleSubmit}>
          <div className="space-y-12 p-4">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Login
              </h2>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email ID
                  </label>
                  <div className="mt-2">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      autoComplete="email"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              {showOTPField && (
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="otp"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      OTP
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="otp"
                        id="otp"
                        value={otp}
                        onChange={(e) => setOTP(e.target.value)}
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
              )}
              {showOTPField && (
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Enter the OTP sent to your email
                </p>
              )}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6 p-4">
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {showOTPField ? 'Login' : 'Send OTP'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;