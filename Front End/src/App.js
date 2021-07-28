import { Switch, Route } from "react-router-dom";
import "./App.css";
import PostJob from "./containners/Company/PostJob";
import Profile from "./containners/Company/Profile";
import Vacancies from "./containners/Company/Vacancies";
import Signin from "./containners/Signin/Signin";
import SignUp from "./containners/SignUp/SignUp";
import AllJobs from "./containners/Student/AllJobs";
import StudentProfile from "./containners/Student/StudentProfile";
import AppliedJobs from "./containners/Student/AppliedJobs";
import Companies from "./containners/Student/Companies";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Signin} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/vacancies" component={Vacancies} />
        <Route path="/profile" component={Profile} />
        {/* <Route path="/post" component={PostJob} /> */}
        <Route path="/companies" component={Companies} />
        <Route path="/all-jobs" component={AllJobs} />
        <Route path="/applied-jobs" component={AppliedJobs} />
        <Route path="/student-profile" component={StudentProfile} />
      </Switch>
    </div>
  );
}

export default App;
