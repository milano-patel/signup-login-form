import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addcurrentUser } from '../store/currentuserSlice';

const CheckIn = () => {
  const users = useSelector((store) => store.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [emailInput, setEmailInput] = useState('');
  const [errorMsg, seterrorMsg] = useState('format: abc@xyz.com');

  const submitHandler = (e) => {
    e.preventDefault();
    let currentUser = users.filter((user) => user.email === emailInput);

    if (isValidEmail(emailInput)) {
      if (currentUser.length > 0) {
        dispatch(addcurrentUser(currentUser[0]));
        navigate('/login', {
          state: {
            email: emailInput,
          },
        });
      } else {
        navigate('/signup', {
          state: {
            email: emailInput,
          },
        });
      }
    }
  };

  const changeHandler = (e) => {
    setEmailInput(e.target.value);
  };

  const isValidEmail = (emailInput) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(emailInput).toLowerCase())) {
      return true;
    } else {
      seterrorMsg('Invalid Email');
      setTimeout(() => seterrorMsg('Format: abc@xyz.com'), 2000);
    }
  };

  return (
    <>
      <h2>Welcome</h2>
      <form onSubmit={submitHandler}>
        <label htmlFor="email">Email Address</label>
        <input
          type="text"
          name="email"
          id="email"
          onChange={changeHandler}
          value={emailInput}
          placeholder="Enter Email Address"
        />
        <small>{errorMsg}</small>
        <button type="submit" onClick={submitHandler}>
          Check In
        </button>
      </form>
    </>
  );
};

export default CheckIn;
