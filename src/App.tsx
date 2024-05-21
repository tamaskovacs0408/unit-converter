import './App.scss';
import ConverterForm from './components/ConverterForm';
import ModalPortal from './components/ModalPortal';
import Selector from './components/Selector';
import { SelectedUnitProvider } from './store/selectedUnitContext';

function App() {
  return (
    <SelectedUnitProvider>
        <Selector />
        <ModalPortal />
        <ConverterForm />
    </SelectedUnitProvider>
  );
}

export default App;
