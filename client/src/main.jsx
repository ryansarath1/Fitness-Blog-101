import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login.jsx';
import App from './App.jsx';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import SignUp from './pages/Signup.jsx';

import Auth from './utils/auth.js'
import Profile from './pages/Profile.jsx';
import AddWorkout from './pages/AddWorkout.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: Auth.loggedIn() ? <Home /> : <Login />
      }, 
       {
        path: '/login',
        element: <Login />
      }, 
      {
        path: '/signup',
        element: <SignUp />
      }, 
      {
        path: '/profile',
        element: <Profile />
      },
      {
        path: '/add',
        element: <AddWorkout />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
