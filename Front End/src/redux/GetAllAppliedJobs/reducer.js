import { getAppliedJobsConstants } from "./types";

const initialState = {
  error: "",
  appliedJob: [],
};

const AppliedJobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case getAppliedJobsConstants.GET_APPLIED_JOB_REQUEST:
      return state;
    case getAppliedJobsConstants.GET_APPLIED_JOB_SUCCESS:
      return {
        ...state,
        appliedJob: action.payload.appliedJob,
      };
    case getAppliedJobsConstants.GET_APPLIED_JOB_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default AppliedJobsReducer;
