import React from "react";
import { Link } from "react-router-dom";
import { ArrowBigLeftDash } from "lucide-react";
const NotAuthorized = () => {
  return (
    <div className="h-screen ">
      <div className="flex justify-center items-center">
        <h1 className="text-red-600 text-4xl font-bold border-4 border-black text-center mt-4 inline-block p-2  uppercase">
          you are not authorized to access
        </h1>
      </div>
      <div className="flex justify-center items-center ">
        <Link
          to="/login"
          className="text 3-xl mt-4 uppercase gap-1 flex justify-center items center hover:text-blue-600"
        >
          <ArrowBigLeftDash /> Go to Login page
        </Link>
      </div>
    </div>
  );
};

export default NotAuthorized;
