import { Route, Routes } from 'react-router-dom';
import CheckIn from './components/CheckIn';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import UserInfo from './components/UserInfo';
import UserData from './components/UserData';
import PrivateRoute from './utils/PrivateRoute';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<CheckIn />} />
        <Route element={<PrivateRoute />}>
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/userinfo" element={<UserInfo />} />
        </Route>
        <Route path="/userinfo/:data" element={<UserData />} />
      </Routes>
    </div>
  );
}

export default App;
