import axiosInstance from "../../helpers/axios";
import { applyJobsConstants } from "./types";

export const applyJobAction = (applyJob) => {
  return async (dispatch) => {
    dispatch({ type: applyJobsConstants.APPLY_JOB_REQUEST });
    const apply = await axiosInstance.post("/apply-job", {
      ...applyJob,
    });

    if (apply) {
      const applyJobs = apply.data;
      dispatch({
        type: applyJobsConstants.APPLY_JOB_SUCCESS,
        payload: {
          applyJobs,
        },
      });
    } else {
      dispatch({
        type: applyJobsConstants.APPLY_JOB_FAILURE,
        payload: { error: apply.data.error },
      });
    }
  };
};
