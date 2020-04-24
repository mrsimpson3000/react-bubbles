import React, { useState } from "react";

import { axiosWithAuth } from "./utils/axiosAuth";

export default function Login(props) {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
    console.log(event.target.value);
  };

  const login = (event) => {
    event.preventDefault();

    axiosWithAuth()
      .post("http://localhost:5000/api/login", credentials)
      .then((result) => {
        console.log(result);
        localStorage.setItem("token", result.data.payload);
        console.log(props);
        props.history.push("/protected");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <form className='loginForm' onSubmit={login}>
        <input
          type='text'
          name='username'
          placeholder='username'
          value={credentials.username}
          onChange={handleChange}
        />
        <input
          type='password'
          name='password'
          placeholder='password'
          value={credentials.password}
          onChange={handleChange}
        />
        <button>Log in</button>
      </form>
    </>
  );
}
