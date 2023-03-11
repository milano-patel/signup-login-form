import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import hideEye from '../images/hide.png';
import showEye from '../images/show.png';

const LogIn = () => {
  const currentuser = useSelector((store) => store.currentuser);
  const [passInput, setpassInput] = useState('');
  const [eyeLogo, seteyeLogo] = useState(hideEye);
  const [inputType, setinputType] = useState('password');
  const [errorMsg, seterrorMsg] = useState('');
  const navigate = useNavigate();

  // prevent refresh on the login page
  useEffect(() => {
    if (!Object.keys(currentuser).length) {
      navigate('/');
    }
  });

  const toggleHandler = () => {
    if (inputType === 'password') {
      seteyeLogo(showEye);
      setinputType('text');
    } else {
      seteyeLogo(hideEye);
      setinputType('password');
    }
  };

  const changeHandler = (e) => {
    setpassInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (currentuser.password === passInput) {
      navigate('/userinfo', {
        state: {
          auth: true,
        },
      });
    } else {
      seterrorMsg('Wrong Password');
      setTimeout(() => seterrorMsg(''), 2000);
    }
  };

  return (
    <>
      <h2>Login Here</h2>
      <form onSubmit={submitHandler}>
        <label htmlFor="email">Email Address</label>
        <input
          type="text"
          id="email"
          name="email"
          value={currentuser.email}
          disabled
        ></input>
        <label htmlFor="password">Password</label>
        <div className="password-container">
          <input
            type={inputType}
            className=""
            id="password"
            name="password"
            onChange={changeHandler}
            value={passInput}
            placeholder="Enter Password"
          ></input>
          <button
            type="button"
            onClick={toggleHandler}
            className="password-toggle"
          >
            <img
              className="eye-logo"
              src={eyeLogo}
              aria-hidden="true"
              alt="eye_icon"
            />
          </button>
        </div>
        <small>{errorMsg}</small>
        <button type="submit" onSubmit={submitHandler}>
          Log In
        </button>
        <Link to="/">
          <button type="button" className="goback">
            Go Back
          </button>
        </Link>
      </form>
    </>
  );
};

export default LogIn;
