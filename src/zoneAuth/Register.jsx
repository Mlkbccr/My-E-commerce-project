import { Lock, User } from "lucide-react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../features/auth/authSlice";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const validate = (data) => {
    const re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    const newErrors = {};

    if (!data.name) {
      newErrors.name = "Name field is required";
    }

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

  const handleRegister = (e) => {
    e.preventDefault();

    const data = {
      name: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value,
    };

    const validationErrors = validate(data);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      dispatch(register(data))
        .then((res) => console.log(res))
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
      className="flex justify-center items-center
     h-screen bg-gray-100"
    >
      <div className="bg-white p-3 rounded shadow-lg">
        <div className="flex justify-center">
          <Lock />
        </div>
        <div className="flex justify-center mb-5 ">Inscription</div>
        <form onSubmit={handleRegister} className="w-72">
          <div>
            <label htmlFor="" className="block">
              Name
            </label>
            <input type="text" className="w-full" />
            {errors.name && (
              <span className="text-xs text-red-500">{errors.name}</span>
            )}
          </div>
          <div>
            <label htmlFor="" className="block">
              Email
            </label>
            <input type="text" className="w-full" />
            {errors.email && (
              <span className="text-xs text-red-500">{errors.email}</span>
            )}
          </div>
          <div className="relative">
            <label htmlFor="" className="block mt-2 ">
              Password
            </label>
            <input type={visible ? "text" : "password"} className="w-full" />
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
          </div>
          <div className="flex justify-between items-center ">
            <span className="text-xs">
              Déja client,
              <Link to="/auth/login">se connecter</Link>
            </span>
            <button
              type="submit"
              className="bg-blue-500 text-sm
             text-white rounded-sm p-1 mt-3  "
            >
              S'inscrire
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
