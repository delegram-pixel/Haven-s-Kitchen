
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignIn from './container/Register/SignIn.jsx';
import SignUp from './container/SignUp.jsx';
import Home2 from './Home2.jsx';
import { Photo } from './container/mary/Photo.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "SignIn",
    element: <SignIn/>,
  },
  {
    path: "Signup",
    element: <SignUp/>,
  },
  {
    path: "Home2",
    element: <Home2/>,
  },
 
  {
    path: "Photo",
    element: <Photo/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

