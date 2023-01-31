import logo from './logo.svg';
import {
  RandomPicker,
  RandomPickerChoice,
  RandomPickerControls,
} from './RandomPicker.js';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <RandomPicker items={namesList} />
      <RandomPickerChoice />
      <RandomPickerControls />
    </div>
  );
}

export default App;
