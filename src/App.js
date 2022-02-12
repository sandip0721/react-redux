import { useSelector } from "react-redux";
import "./App.css";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
import { selectUser } from "./features/userSlice";
//import ChangeColor from "./components/ChangeColor";

function App() {

  const user = useSelector(selectUser);


  return (
    <div className="App">
    {user ? <Logout /> : <Login /> }
    </div>
  );
}

export default App;
