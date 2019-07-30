import React, {useEffect, useState} from 'react';
import './App.css';
import * as axios from "axios";

function App() {

  const [users, setUsers] = useState([]);
  const [value, setValue] = useState([]);

  const getUsers = () => {

    axios.get('http://localhost:7542/users').then(res => {
      debugger
      setUsers(res.data);
    })
  };

  useEffect(()=> {
    getUsers();
  }, []);

  let createUser = (e) => {
    axios.post('http://localhost:7542/users').then( res => {
      getUsers();
    })
  };

  let onChange = (e) => {
      setValue(e.currentTarget.value)
  };

  return <div>
    <input onChange={onChange}/>
    <button onClick={createUser}>Create User</button>
      {users.map(u => <div>{u.name}</div>)}
    </div>
}

export default App;
