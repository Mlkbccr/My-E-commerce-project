import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { changePassword } from "../features/auth/authSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const handleChangePassword = (e) => {
    e.preventDefault();
    console.log(e);
    const data = {
      userId: user._id,
      oldPassword: e.target[0].value,
      newPassword: e.target[1].value,
      confirmNewPassword: e.target[2].value,
    };
    console.log(data);
    dispatch(changePassword(data))
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="px-3 ">
      <h1 className="text-xl">Manage Profile</h1>
      <div className="mt-4">
        <form
          onSubmit={handleChangePassword}
          className=" bg-white shadow-lg w-64 p-2 rounded "
        >
          <div className="">
            <label htmlFor="" className="block">
              Old password
            </label>
            <input type="text" className="w-full bg-slate-200 border p-1" />
          </div>
          <div className="">
            <label htmlFor="" className="block">
              New password
            </label>
            <input type="text" className="w-full bg-slate-200 border p-1" />
          </div>
          <div className="">
            <label htmlFor="" className="block">
              Confirm New password
            </label>
            <input type="text" className="w-full bg-slate-200 border p-1" />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 text-white p-1 px-2 rounded mt-3 hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Profile;
