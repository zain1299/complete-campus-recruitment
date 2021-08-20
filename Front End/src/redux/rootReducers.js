import { combineReducers } from "redux";
import userReducer from "./Users/userReducers";
import signupReducer from "./Signup/signupReducer";
import getJobsReducer from "./GetJobs/getJobReducer";
import AppliedJobsReducer from "./GetAllAppliedJobs/reducer";
import fetchAdminReducer from "./GetAllAdmins/reducer";
import AppliedStudentsReducer from "./GetAllAppliedStudents/reducer";

const rootReducer = combineReducers({
  user: userReducer,
  signup: signupReducer,
  allJob: getJobsReducer,
  appliedJob: AppliedJobsReducer,
  allAdmin: fetchAdminReducer,
  appliedStudent: AppliedStudentsReducer,
});

export default rootReducer;
