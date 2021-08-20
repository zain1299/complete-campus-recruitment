import { getJobsConstants } from "./getJobTypes";

const initialState = {
  error: "",
  getJobs: [],
};

const getJobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case getJobsConstants.GET_JOB_REQUEST:
      return state;

    case getJobsConstants.GET_JOB_SUCCESS:
      return {
        ...state,
        getJobs: action.payload.getJobs,
      };
    case getJobsConstants.GET_JOB_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default getJobsReducer;
