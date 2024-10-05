// import { Outlet,  } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import './App.css';
import Home from './page/Home';
import Header from './components/Header';
import Productaboutpage from './components/Productaboutpage';
import SignUp from './components/SignUp';
import SearchPage from './components/SearchPage';



function App() {
  return (
   <>
  
  
     <Routes>
                
               <Route path='/' element={<Home />} />
                <Route path='/Productaboutpage/:id' element={<Productaboutpage />} /> 
                <Route path='/SignUp' element={<SignUp />} />
                <Route path='/SearchPage' element={<SearchPage />} /> 
            </Routes> 
    {/* <Route path='/Productaboutpage/:id' element={<Productaboutpage />} /> 
                <Route path='/SignUp' element={<SignUp />} />
                <Route path='/SearchPage' element={<SearchPage />} />
      <Header /> */}
   </>
  );
}

export default App;
