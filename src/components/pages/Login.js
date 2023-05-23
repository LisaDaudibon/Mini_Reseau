import React from 'react';
import { atom, useAtom } from 'jotai';
import Cookies from 'js-cookie';

const usernameAtom = atom('');
const passwordAtom = atom('');

function Login() {
  const [username, setUsername] = useAtom(usernameAtom);
  const [password, setPassword] = useAtom(passwordAtom);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // c'est par ici que commence les potentiels requette api ect
    const data = {
        username: username,
        password: password
    };

    fetch('http://localhost:1337/api/auth/local/register', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then((response) => response.json())
        .then((responseData) => {
            const token = responseData.jwt;
            Cookies.set("token", token);
        });

    console.log('Signup submitted:', { username, password });
    // reset le champ 
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username} onChange={handleUsernameChange} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Login;
