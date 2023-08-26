import React from 'react';
import './App.css';
import Main from './pages/Main';
import { Provider } from 'react-redux';
import store from './Redux/store';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import SignUP from './component/signup/SignUP';
import SignIn from './component/Signin/SignIn';
import Forget from './component/forgetpassword/Forget';
import Rest from './component/restpassword/Rest';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App: React.FC =() =>{
  return (
    <Provider store={store}>
   <div className="App">
    <ToastContainer/>
      <BrowserRouter>
      <Routes>
        <Route path='*' element={<Main/>} />
        <Route path='signup' element={<SignUP/>} />
        <Route path='signin' element={<SignIn/>} />
        <Route path='forgetpassword' element={<Forget/>} />
    <Route path='rest-password/:token' element={<Rest/>} />
      </Routes>
      </BrowserRouter>
    </div>
    </Provider>
   
  );
}

export default App;
