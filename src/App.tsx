import React from "react";
import { createBrowserRouter, RouterProvider, Outlet, NavLink } from 'react-router-dom';
import "@/App.scss";
import ConverterForm from "@/components/ConverterForm";
import ModalPortal from "@/components/ModalPortal";
import Selector from "@/components/Selector";
import { SelectedUnitProvider } from "@/store/selectedUnitContext"

const Layout = () => (
  <SelectedUnitProvider>
    <main>
      <Outlet />
    </main>
  </SelectedUnitProvider>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Selector />,
      },
      {
        path: 'converter/:unitType',
        element: (
          <>
            <NavLink className="back-btn" to="/">Select new unit</NavLink>
            <ConverterForm />
            <ModalPortal />
          </>
        ),
      },
    ],
  },
]);

const App: React.FC = () => (
  <RouterProvider router={router} />
);

export default App;