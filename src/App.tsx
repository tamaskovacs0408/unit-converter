import './App.scss';
import ConverterForm from './components/ConverterForm';
import Selector from './components/Selector';
import { SelectedUnitProvider } from './store/selectedUnitContext';

function App() {
  return (
    <SelectedUnitProvider>
      <>
      <h1>Unit Converter</h1>
        <Selector />
        <ConverterForm />
      </>
    </SelectedUnitProvider>
  );
}

export default App;
