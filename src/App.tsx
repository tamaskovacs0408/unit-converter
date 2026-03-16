import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  NavLink,
} from "react-router-dom";
import "@/App.scss";
import ConverterForm from "@/components/ConverterForm";
import CurrencyConverter from "@/components/CurrencyConverter";
import ModalPortal from "@/components/ModalPortal";
import Selector from "@/components/Selector";

const Layout = () => (
  <main>
    <Outlet />
  </main>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Selector />,
      },
      {
        path: "converter/currency",
        element: <CurrencyConverter />,
      },
      {
        path: "converter/:unitType",
        element: (
          <>
            <NavLink className='back-btn' to='/'>
              Select new unit
            </NavLink>
            <ConverterForm />
            <ModalPortal />
          </>
        ),
        caseSensitive: true,
      },
    ],
  },
]);

const App: React.FC = () => <RouterProvider router={router} />;

export default App;