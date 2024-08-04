import { Lock } from "lucide-react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, setUser } from "../features/auth/authSlice";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import loginImage from "../assets/login.jpg?url";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [visible, setVisible] = useState(false);
  const [errorsBackend, setErrorsBackend] = useState("");
  const { user } = useSelector((state) => state.auth);
  const validate = (data) => {
    const re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    const newErrors = {};

    if (!data.email) {
      newErrors.email = "Email field is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = "Email is not valid";
    }
    if (!re.test(data.password)) {
      newErrors.password =
        "Password must contain at least one uppercase, one lowercase and one numeric character and symbol.";
    }
    return newErrors;
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const data = {
      email: e.target[0].value,
      password: e.target[1].value,
    };

    const validationErrors = validate(data);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      dispatch(login(data))
        .then((res) => {
          const { response, data } = res.payload;

          if (data) {
            // store user in redux
            dispatch(setUser(data));
            const { role } = data.user;
            if (role == "admin") {
              navigate("/admin");
            } else if (role == "user") {
              navigate("/client");
            }
          }

          if (response) {
            setErrorsBackend(response.data.message);
          }
        })
        .catch((err) => console.log(err));
    }
  };
  useEffect(() => {
    if (Object.keys(user).length > 0) {
      navigate("/client");
    }
  }, []);
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
        <div className="bg-white/70 p-3 rounded shadow-lg">
          <div className="flex justify-center">
            <Lock />
          </div>
          <div className="flex justify-center mb-5 ">connexion</div>
          <div>
            {errorsBackend && (
              <span className="text-xs text-red-500 text-center block ">
                {errorsBackend}
              </span>
            )}
          </div>
          <form onSubmit={handleLogin} className="w-72">
            <div>
              <label htmlFor="" className="block">
                Email
              </label>
              <input type="text" className="w-full bg-black/30" />
              {errors.email && (
                <span className="text-xs text-red-500">{errors.email}</span>
              )}
            </div>
            <div className="relative">
              <label htmlFor="" className="block mt-2 ">
                Password
              </label>
              <input
                type={visible ? "text" : "password"}
                className="w-full bg-black/30"
              />
              {errors.password && (
                <span className="text-xs text-red-500">{errors.password}</span>
              )}
              <div className="absolute top-7 right-2">
                {!visible && (
                  <Eye
                    className="cursor-pointer"
                    size={16}
                    onClick={() => setVisible(true)}
                  />
                )}
                {visible && (
                  <EyeOff
                    className="cursor-pointer"
                    size={16}
                    onClick={() => setVisible(false)}
                  />
                )}
              </div>
              <div className="text-xs text-blue-600">
                <Link to="/auth/reset-password" className="hover:text-blue-700">
                  Reset password
                </Link>
              </div>
            </div>
            <div className="flex justify-between items-center ">
              <span className="text-xs">
                new client,
                <Link to="/auth/register">register</Link>
              </span>
              <button
                type="submit"
                className="bg-blue-500 text-sm
             text-white rounded-sm p-1 mt-3  "
              >
                connect
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
