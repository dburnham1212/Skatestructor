/* eslint-disable react-hooks/exhaustive-deps */
import {useState, createContext} from 'react';
import Cookies from 'js-cookie';
// Create a Context
export const authContext = createContext();

// Create a Component wrapper from Context.Provider
export default function AuthProvider(props) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  // Here is our Shared State Object
  const onLogin = (event) => {
    event.preventDefault();
    if(Cookies.get('username')){
      console.log("cookie found", Cookies.get('username'))
    } else {
      console.log("setting cookie", userName);
      Cookies.set('username', userName, { expires: 7 });
    }
  }

  // This list can get long with a lot of functions.  Reducer may be a better choice
  const providerData = { 
   };

  // We can now use this as a component to wrap anything
  // that needs our state
  return (
    <authContext.Provider value={providerData}>
      {props.children}
    </authContext.Provider>
  );
};