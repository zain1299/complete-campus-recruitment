import axiosInstance from "../../helpers/axios";
import { getJobsConstants } from "./getJobTypes";

export const getJObsAction = (company_id) => {
  return async (dispatch) => {
    dispatch({ type: getJobsConstants.GET_JOB_REQUEST });
    const job = await axiosInstance.get("/all-jobs", {
      params: {
        company_id: company_id,
      },
    });

    const getJobs = job.data;

    if (job) {
      dispatch({
        type: getJobsConstants.GET_JOB_SUCCESS,
        payload: { getJobs },
      });
    } else {
      dispatch({
        type: getJobsConstants.GET_JOB_FAILURE,
        payload: { error: job.data.error },
      });
    }
  };
};
