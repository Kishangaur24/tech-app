import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomePage from './Page/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Success from './components/SuccessStories/Success';
import FAQ from './components/Faq/Faq';
import UpcomingWebinars from './components/UpcomingWebinar/UpcomingWebinar';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/success' element={<Success/>}/>
      <Route path='/faq' element={<FAQ/>}/>
      <Route path='/upcomingWebinar' element={<UpcomingWebinars/>}/>
      <Route path='/registration' element={<SignUp/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
