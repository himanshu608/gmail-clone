import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Mail from './Mail'
import EmailList from './EmailList'
import Sendmail from './Sendmail';
import { useDispatch, useSelector } from 'react-redux';
import {selectSendMessageIsOpen} from './features/mailSlice'
import { login, selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from './Firebase';
import { onAuthStateChanged } from 'firebase/auth';
function App() {
  const sendMessageIsOpenOrNot = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(()=>{
    onAuthStateChanged(auth,(user) => {
      if(user){
        dispatch(login(
          {
            displayName:user.displayName,
            email:user.email,
            photoUrl: user.photoURL
          }

        ))
      }
    })
  },[])
  return (
    <Router>
     {!user? <Login/>: (
      <div className="App">
        <Header />
        <div className="app_main">
          <Sidebar />
          <Switch>
            <Route path='/mail'>
              <Mail />
            </Route>
            <Route exact path='/'>
              <EmailList />
            </Route>
          </Switch>
        </div>
        {
          sendMessageIsOpenOrNot &&  <Sendmail/>
        }
      
      </div>
     )}
    </Router>
  );
}

export default App;
