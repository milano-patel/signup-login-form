import { useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser } from '../store/usersSlice';

const UserInfo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentuser = useSelector((store) => store.currentuser);

  const submitHandler = (e) => {
    e.preventDefault();
    navigate('/login', {
      state: {
        auth: true,
      },
    });
  };

  const deleteHandler = () => {
    console.log('user deleted');
    dispatch(deleteUser(currentuser));
    navigate('/');
  };

  return (
    <>
      <h2>User Profile</h2>
      <div className="info-container">
        <form>
          <Link to={`/userinfo/fullname`}>
            <label>Full Name</label>
            <h4>{currentuser.fullname}</h4>
          </Link>
          <Link to={`/userinfo/email`}>
            <label>Email</label>
            <h4>{currentuser.email}</h4>
          </Link>
          <Link to={`/userinfo/mnumber`}>
            <label>Mobile</label>
            <h4>{currentuser.mnumber}</h4>
          </Link>
          <Link to={`/userinfo/birthdate`}>
            <label>Birthdate (yyyy/mm/dd)</label>
            <h4>{currentuser.birthdate}</h4>
          </Link>

          <button type="submit" onClick={submitHandler}>
            Log Out
          </button>

          <button type="button" className="goback" onClick={deleteHandler}>
            Delete User
          </button>
        </form>
      </div>
    </>
  );
};

export default UserInfo;
