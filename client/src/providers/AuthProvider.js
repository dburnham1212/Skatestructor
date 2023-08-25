/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect, createContext} from 'react';
import axios from 'axios';

// Create a Context
export const authContext = createContext();

// Create a Component wrapper from Context.Provider
export default function AuthProvider(props) {
  // Here is our Shared State Object
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [user, setUser] = useState({});
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // AUTO LOGIN THE USER IF THEY HAVE A COOKIE SET
    axios.post('/auth/autoLogin'
    ).then((res) => {
      if(res.data.user) {
        setUser(res.data.user);
        setAuthenticated(true);
      }
    }).catch((e) => {
        alert(e);
    });
  }, [])

  // WHEN SUBMITTING LOGIN FORM 
  const onLogin = async (event) => {
    event.preventDefault();
    const loginUser = { userName, password }

    await axios.post('/auth/login', { 
      loginUser
    }
    ).then((res) => {
      if(res.data.user) {
        setUser(res.data.user);
        setAuthenticated(true);
      }
    }).catch((e) => {
        alert(e);
    });
  }

  // WHEN SUBMITTING REGISTER FORM
  const onRegister = async (event) => {
    event.preventDefault();
    const user = { userName, email, password, passwordConfirmation };

    await axios.post('/auth/register', { 
      user
    }
    ).then((res) => {
      if(res.data.user) {
        setUser(res.data.user);
        setAuthenticated(true);
      }
    }).catch((e) => {
        alert(e);
    });
  }

  // This list can get long with a lot of functions.  Reducer may be a better choice
  const providerData = { 
    user,
    setUser,
    userName,
    setUserName,
    email,
    setEmail,
    password,
    setPassword,
    passwordConfirmation,
    setPasswordConfirmation,
    authenticated,
    setAuthenticated,
    onLogin,
    onRegister
  };

  // We can now use this as a component to wrap anything
  // that needs our state
  return (
    <authContext.Provider value={providerData}>
      {props.children}
    </authContext.Provider>
  );
};