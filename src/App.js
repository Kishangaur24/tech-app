import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomePage from './Page/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HomePage/>
    </div>
  );
}

export default App;
