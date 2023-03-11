import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { addcurrentUser } from '../store/currentuserSlice';
import { addUser } from '../store/usersSlice';

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    //console.log('checking');
    let newUser = {
      email: location.state.email,
      password: data.password1,
      firstname: data.firstname,
      lastname: data.lastname,
      birthdate: data.birthdate,
      mnumber: data.mnumber,
      fullname: data.firstname + ' ' + data.lastname,
    };

    dispatch(addUser(newUser));

    dispatch(addcurrentUser(newUser));

    navigate('/login', {
      state: {
        auth: true,
      },
    });
  };

  return (
    <>
      <h2>Sign Up Here</h2>
      <form onSubmit={handleSubmit(submitHandler)}>
        <label htmlFor="firstname">First Name</label>
        <input
          type="text"
          placeholder="Enter First Name"
          id="firstname"
          name="firstname"
          {...register('firstname', {
            required: true,
            maxLength: 10,
            pattern: /[a-zA-Z][a-zA-Z ]{2,}/,
          })}
        />

        {errors.firstname && <small>Please check the First Name</small>}

        <label htmlFor="lastname">Last Name</label>
        <input
          type="text"
          placeholder="Enter Last Name"
          id="lastname"
          name="lastname"
          {...register('lastname', {
            required: true,
            maxLength: 10,
            pattern: /[a-zA-Z][a-zA-Z ]{2,}/,
          })}
        />

        {errors.lastname && <small>Please check the Last Name</small>}

        <label htmlFor="birthdate">Birthdate</label>
        <input
          type="date"
          id="birthdate"
          name="birthdate"
          max="2005-12-31"
          placeholder="Select Birthdate"
          {...register('birthdate', {
            required: true,
          })}
        />

        {errors.birthdate && <small>Please check the Birth Date</small>}

        <label htmlFor="mnumber">Mobile Number (10 Digits)</label>
        <input
          type="tel"
          id="mnumber"
          name="mnumber"
          placeholder="Enter Mobile Number"
          {...register('mnumber', {
            required: true,
            maxLength: 10,
            pattern: /[6-9]{1}[0-9]{9}/,
          })}
        />

        {errors.mnumber && <small>Please check Mobile Number</small>}

        <label htmlFor="email">Email Address</label>
        <input
          type="text"
          id="email"
          name="email"
          value={location.state.email}
          disabled
        ></input>

        <label htmlFor="password">Password</label>
        <input
          type="text"
          id="password"
          name="password"
          placeholder="Enter Password"
          {...register('password1', {
            required: true,
            maxLength: 15,
            minLength: 5,
            pattern:
              /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
          })}
        ></input>

        {errors.password1 && (
          <small>
            Password should have 8 characters, at least 1 letter, 1 number and 1
            special character
          </small>
        )}

        <label htmlFor="password2">Confirm Password</label>
        <input
          type="text"
          id="password2"
          name="password2"
          placeholder="Confirm Password"
          {...register('password2', {
            validate: (value) =>
              value === getValues('password1') || 'The passwords do not match',
          })}
        ></input>

        {errors.password2 && <small>{errors.password2.message}</small>}

        <button type="submit" onSubmit={handleSubmit(submitHandler)}>
          Sign Up
        </button>
      </form>
    </>
  );
};

export default SignUp;
