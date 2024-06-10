import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login.jsx";
import App from "./App.jsx";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/Signup.jsx";

import Auth from "./utils/auth.js";
import Profile from "./pages/Profile.jsx";
import AddWorkoutForm from "./pages/AddWorkout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: Auth.loggedIn() ? <Profile /> : <Login />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/profile",
        element: Auth.loggedIn() ? <Profile /> : <Login />,
      },
      {
        path: "/add",
        element: Auth.loggedIn() ? <AddWorkoutForm /> : <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
