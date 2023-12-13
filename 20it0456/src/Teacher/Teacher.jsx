import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../components/Home.jsx";
import TeacherNav from "./TeacherNav";
import StudentProfile from "../Student/StudentProfile.jsx";

import StudentResult from "../Student/StudentResult.jsx";

const Teacher = ()=>{

const router = createBrowserRouter([
      {
        path: "/",
        element: <TeacherNav/>,
        children: [
          {path: "/", element: <Home />, },
          {path: "tprofile",element: <StudentProfile/>,},
          {path: "tresult",element: <StudentResult />,},
           ],
      },
    ]);
    return (
      <div>
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
      </div>
    );
}
export default Teacher;