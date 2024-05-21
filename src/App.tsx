import "./App.scss";
import ConverterForm from "./components/ConverterForm";
import ModalPortal from "./components/ModalPortal";
import Selector from "./components/Selector";
import { SelectedUnitProvider } from "./store/selectedUnitContext";

function App() {
  return (
    <SelectedUnitProvider>
      <main>
        <Selector />
        <ModalPortal />
        <ConverterForm />
      </main>
    </SelectedUnitProvider>
  );
}

export default App;
