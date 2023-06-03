import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ResetStyle from './styles/reset';
import StyledApp from './styles/styledApp'
import Login from './pages/login';
import Signup from './pages/signup';
import { HabitsContext, UserContext } from './ConectivityModule';
import { useState } from 'react';

import { ToastContainer } from 'react-toastify'; // Toasts.
import 'react-toastify/dist/ReactToastify.css'; // Toast obrigatory css
import AppBars from './components/AppBars';
import Today from './pages/today';

function App() {

  const [user, setUser] = useState({id: undefined, email: undefined, name: undefined, image: undefined, password: undefined, token: undefined})
  const [todayHabits, setTodayHabits] = useState([]);

  return (
    <UserContext.Provider value={[user,setUser]}>
    <HabitsContext.Provider value={[todayHabits, setTodayHabits]}>
      <StyledApp> 
        <ToastContainer/>
        <ResetStyle $isBackgroundWhite={false /* true === login e cadastro, false === resto (AINDA FALTA IMPLEMENTAR)*/ }/>
        <BrowserRouter>
        
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/cadastro' element={<Signup/>}/>
            <Route path='/hoje' element={<><AppBars/> <Today/></>}/>

          </Routes> 
        </BrowserRouter>
      </StyledApp>
    </HabitsContext.Provider>
    </UserContext.Provider>
  )

}

export default App;