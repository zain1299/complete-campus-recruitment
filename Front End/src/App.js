import { Switch, Route } from "react-router-dom";
import "./App.css";
import Profile from "./containners/Company/Profile";
import Vacancies from "./containners/Company/Vacancies";
import Signin from "./containners/Signin/Signin";
import SignUp from "./containners/SignUp/SignUp";
import AllJobs from "./containners/Student/AllJobs";
import StudentProfile from "./containners/Student/StudentProfile";
import AppliedJobs from "./containners/Student/AppliedJobs";
import Companies from "./containners/Student/Companies";
import PrivateRoute from "./containners/HOC/privateRoute";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { isUserLoggedIn } from "./redux/Users/userActions";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.user);

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Switch>
        <PrivateRoute exact path="/" component={Vacancies} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/companies" component={Companies} />
        <PrivateRoute path="/all-jobs" component={AllJobs} />
        <PrivateRoute path="/applied-jobs" component={AppliedJobs} />
        <PrivateRoute path="/student-profile" component={StudentProfile} />
        <Route path="/signin" component={Signin} />
        <Route path="/SignUp" component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
