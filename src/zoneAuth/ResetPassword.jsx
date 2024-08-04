import React, { useState } from "react";
import loginImage from "../assets/login.jpg?url";
import { Lock } from "lucide-react";
import { useDispatch } from "react-redux";
import { sendMail } from "../features/auth/authSlice";
const ResetPassword = () => {
  const dispatch = useDispatch();
  const [visibleEmailInput, setVisibleEmailInput] = useState(true);
  const [visibleCodeInput, setVisibleCodeInput] = useState(false);
  const [visiblePasswordInput, setVisiblePasswordInput] = useState(false);
  const EmailInput = () => {
    const handleSubmit = () => {
      setVisibleEmailInput(false);
      setVisibleCodeInput(true);
      dispatch(sendMail())
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    };
    return (
      <div className="bg-white/70 p-3 rounded shadow-lg">
        <div className="flex justify-center">
          <Lock />
        </div>
        <div className="flex justify-center mb-5 ">Reset Password</div>
        <div className="flex justify-start mb-5 text-xs text-green-700 ">
          In order to change your password, please insert a valid email
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="" className="block">
              Email
            </label>
            <input type="text" className="w-full bg-black/30" />
          </div>

          <div className="flex justify-end items-center ">
            <button
              type="submit"
              className="bg-blue-500 text-sm
text-white rounded-sm p-1 mt-3  "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  };
  const CodeInput = () => {
    const handleSubmit = () => {
      setVisibleCodeInput(false);
      setVisiblePasswordInput(true);
    };
    return (
      <div className="bg-white/70 p-3 rounded shadow-lg">
        <div className="flex justify-center">
          <Lock />
        </div>
        <div className="flex justify-center mb-5 ">Code</div>
        <div className="flex justify-start mb-5 text-xs text-green-700 ">
          please check your email, and insert your verification code
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="" className="block">
              Code
            </label>
            <input type="text" className="w-full bg-black/30" />
          </div>
        </form>
        <div className="flex justify-end items-center ">
          <button
            type="submit"
            className="bg-blue-500 text-sm
text-white rounded-sm p-1 mt-3  "
          >
            Submit
          </button>
        </div>
      </div>
    );
  };
  const PasswordInput = () => {
    return (
      <div className="bg-white/70 p-3 rounded shadow-lg">
        <div className="flex justify-center">
          <Lock />
        </div>
        <div className="flex justify-center mb-5 "> New Password</div>
        <div className="flex justify-start mb-5 text-xs text-green-700 ">
          In order to change your password, Please fillout below feilds
        </div>
        <form>
          <div>
            <label htmlFor="" className="block">
              New Password
            </label>
            <input type="text" className="w-full bg-black/30" />
          </div>
          <div>
            <label htmlFor="" className="block">
              Confirm Password
            </label>
            <input type="text" className="w-full bg-black/30" />
          </div>
        </form>
        <div className="flex justify-end items-center ">
          <button
            type="submit"
            className="bg-blue-500 text-sm
text-white rounded-sm p-1 mt-3  "
          >
            Submit
          </button>
        </div>
      </div>
    );
  };

  return (
    <div
      className=" bg-cover bg-no-repeat bg-center 
 h-screen bg-gray-100 relative "
      style={{ backgroundImage: `url(${loginImage} )` }}
    >
      <div
        className="bg-black/60  flex justify-center items-center absolute inset-0  :"
        id="filter"
      >
        {visibleEmailInput && <EmailInput />}
        {visibleCodeInput && <CodeInput />}
        {visiblePasswordInput && <PasswordInput />}
      </div>
    </div>
  );
};

export default ResetPassword;
