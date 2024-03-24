import './App.scss';
import ConverterForm from './components/ConverterForm';
import ModalPortal from './components/ModalPortal';
import Selector from './components/Selector';
import { SelectedUnitProvider } from './store/selectedUnitContext';

function App() {
  return (
    <SelectedUnitProvider>
      <>
      <h1>Unit Converter</h1>
        <Selector />
        <ModalPortal />
        <ConverterForm />
      </>
    </SelectedUnitProvider>
  );
}

export default App;
