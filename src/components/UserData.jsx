import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const UserData = () => {
  const navigate = useNavigate();
  const { data } = useParams();

  const currentuser = useSelector((store) => store.currentuser);

  const submitHandler = (e) => {
    e.preventDefault();
    navigate('/login', {
      state: {
        auth: true,
      },
    });
  };

  const gobackHandler = () => {
    navigate('/userinfo', {
      state: {
        auth: true,
      },
    });
  };

  return (
    <>
      <h2>{currentuser.firstname}'s Profile</h2>
      <div className="info-container">
        <form>
          <h4>{currentuser[data]}</h4>

          <button type="button" className="goback" onClick={gobackHandler}>
            Go Back
          </button>

          <button type="submit" onClick={submitHandler}>
            Log Out
          </button>
        </form>
      </div>
    </>
  );
};

export default UserData;
