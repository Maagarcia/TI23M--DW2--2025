import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";


import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import { Contacts } from "./routes/Projetos.jsx";
import { Projetos } from "./routes/Projetos.jsx";
import { AboutMe } from "./routes/AboutMe.jsx";
import Home from "./routes/Home.jsx";
import { Error } from "./Error.jsx";
import { Navbar } from "./Navbar.jsx";
import { ProjetoEspecifico } from "./routes/ProjetoEspecifico.jsx";
import TelaLogin from "./routes/TelaLogin.jsx";


// 
const router = createBrowserRouter([
  // {
  //   path:'/',
  //   element:<Home/>
  // },
  // {
  //   path:'/contacts/',
  //   element:<Contacts/>
  // }

  // {
  //   path:'/',
  //   element:<Navbar/>,
  //   errorElement:<Error/>,
  //   children:[
  //     {
  //       path:'/',
  //       element:<Home/>
  //     },
  //     {
  //       path:'contact',
  //       element:<Contacts/>
  //     },
  //     {
  //       path:'contact/:id',
  //       element:<ContatoEspecifico/>
  //     }
  //   ]
  // }
  {
    path: "/",
    errorElement:<Error/>,
    element: <TelaLogin
    />,
  },
  {
    path: "home",
    element: <Navbar />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "projects",
        element: <Projetos />,
      },
      {
        path: "projects/:id",
        element: <ProjetoEspecifico />,
      },
      {
        path: "aboutme",
        element: <AboutMe/>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
