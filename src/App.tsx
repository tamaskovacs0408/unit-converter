import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, NavLink } from 'react-router-dom';
import "@/App.scss";
import ConverterForm from "@/components/ConverterForm";
import ModalPortal from "@/components/ModalPortal";
import Selector from "@/components/Selector";
import { SelectedUnitProvider } from "@/store/selectedUnitContext"

const App: React.FC = React.memo(() => (
  <Router>
    <SelectedUnitProvider>
      <main>
        <Routes>
          <Route path="/" element={<Selector />} />
          <Route path="/converter/:unitType" element={
            <>
              <NavLink to="/">Back to selectors</NavLink>
              <ConverterForm />
              <ModalPortal />
            </>
          } />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </SelectedUnitProvider>
  </Router>
));

// const App = React.memo(() => (
//   <SelectedUnitProvider>
//     <main>
//       <Selector />
//       <ModalPortal />
//       <ConverterForm />
//     </main>
//   </SelectedUnitProvider>
// ));

export default App;