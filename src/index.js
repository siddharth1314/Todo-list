import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Login from "./Login.js";
import TodoMain from "./TodoMain.js";

const App = () => {
   return (
      <div>
         <Outlet />
      </div>
   );
};

const AppRoutes = createBrowserRouter([
   {
      path: "/",
      element: <App />,
      children: [
         {
            path: "/",
            element: <Login />
         },
         {
            path: "/todo",
            element: <TodoMain/>
         },
      ],
   },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRoutes} />);
