import './App.css';
import Login from "./component/Login"
import Logout from "./component/Logout"
import User from "./component/User"
import 'bootstrap/dist/css/bootstrap.min.css';




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
