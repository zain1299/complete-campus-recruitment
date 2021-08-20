import { Switch, Route } from "react-router-dom";
import "./App.css";
import Profile from "./containners/Profile/Profile";
import Vacancies from "./containners/Company/Vacancies";
import Signin from "./containners/Signin/Signin";
import SignUp from "./containners/SignUp/SignUp";
import AllJobs from "./containners/Student/AllJobs";
import AppliedJobs from "./containners/Student/AppliedJobs";
import Companies from "./containners/Student/Companies";
import PrivateRoute from "./containners/HOC/privateRoute";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { isUserLoggedIn } from "./redux/Users/userActions";
import { getJObsAction } from "./redux/GetJobs/getJobAction";
import { getAppliedJobbsAction } from "./redux/GetAllAppliedJobs/action";
import { fetchAdminsAction } from "./redux/GetAllAdmins/action";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const auth = state.user;
  const allJobs = state.allJob;
  const applyJob = state.appliedJob;
  const admins = state.allAdmin;

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }

    if (allJobs.getJobs.length === 0) {
      dispatch(getJObsAction(auth.user._id));
    }

    if (admins.company.length === 0) {
      dispatch(fetchAdminsAction());
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (applyJob.appliedJob.length === 0) {
      dispatch(getAppliedJobbsAction(auth.user._id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [applyJob.appliedJob]);

  return (
    <div className="App">
      <Switch>
        <PrivateRoute exact path="/" component={Vacancies} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/companies" component={Companies} />
        <PrivateRoute path="/all-jobs" component={AllJobs} />
        <PrivateRoute path="/applied-jobs" component={AppliedJobs} />
        <Route path="/signin" component={Signin} />
        <Route path="/SignUp" component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
