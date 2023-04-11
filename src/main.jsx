import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import AppliedJob from './components/AppliedJob';
import AvailableJob from './components/AvailableJob';
import JobDetails from './components/JobDetails';
import Statistics from './components/Statistics';
import ErrorPage from './components/ErrorPage';
import Blogs from './components/Blogs';
import LocalContext from './Context/LocalContext';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement : <ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element: <Home></Home>,
        loader: () => fetch("https://api.npoint.io/386201f1e2e2e769ea37")
      },
      {
        path:"/applied",
        element: <AppliedJob></AppliedJob>,
      },
      {
        path:"/jobdetails/:id",
        loader: ({params}) => fetch(`https://api.npoint.io/386201f1e2e2e769ea37/${params?.id}`),
        element: <JobDetails></JobDetails>,
      },
      {
        path:"/statistics",
        element:<Statistics></Statistics>
      },
      {
        path:"/blogs",
        element:<Blogs></Blogs>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <LocalContext>
    <RouterProvider router={router} />
  </LocalContext>,
)
