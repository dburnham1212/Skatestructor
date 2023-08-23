/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect, createContext} from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

// Create a Context
export const authContext = createContext();

// Create a Component wrapper from Context.Provider
export default function AuthProvider(props) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');

  useEffect(() => {
    if(Cookies.get('userId')){
      console.log("cookie found", Cookies.get('userId'))
    } 
  }, []);

  // Here is our Shared State Object
  const onLogin = async (event) => {
    event.preventDefault();
    const user = { userName, password }

    await axios.post('/auth/login', { 
      user
    }
    ).then((res) => {
      console.log(res);
    }).catch((e) => {
      alert(e);
    });
    // if(Cookies.get('userId')){
    //   console.log("cookie found", Cookies.get('userId'))
    // } else {
    //   console.log("setting cookie", userName);
    //   Cookies.set('userId', 1, { expires: 7 });
    // }
  }

  // This list can get long with a lot of functions.  Reducer may be a better choice
  const providerData = { 
    userName,
    setUserName,
    password,
    setPassword,
    onLogin
  };

  // We can now use this as a component to wrap anything
  // that needs our state
  return (
    <authContext.Provider value={providerData}>
      {props.children}
    </authContext.Provider>
  );
};