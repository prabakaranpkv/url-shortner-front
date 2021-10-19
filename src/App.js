import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Login from "./components/Login";
import Register from "./components/register/Register";
import ResetPassword from "./components/ResetPassword";
import ForgotPassWord from "./components/ForgotPassword";
import Shorten from "./components/Shorten";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/shorten">
          <Shorten />
        </Route>
        <Route path="/forgot-password">
          <ForgotPassWord />
        </Route>
        <Route exact path="/reset-password/:resetToken">
          <ResetPassword />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
