import './App.css';
import Login from "./component/Login"
import Logout from "./component/Logout"
import User from "./component/User"
import { Button } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <Login />
      <Logout />
      <User />
    </div>
  );
}

export default App;
