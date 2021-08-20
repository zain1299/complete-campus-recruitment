import axiosInstance from "../../helpers/axios";
import { getAppliedJobsConstants } from "./types";

export const getAppliedJobbsAction = (studentId) => {
  return async (dispatch) => {
    dispatch({ type: getAppliedJobsConstants.GET_APPLIED_JOB_REQUEST });
    const apply = await axiosInstance.get("/all-applied-jobs", {
      params: {
        studentId: studentId,
      },
    });

    const appliedJob = apply.data;

    if (apply) {
      dispatch({
        type: getAppliedJobsConstants.GET_APPLIED_JOB_SUCCESS,
        payload: { appliedJob },
      });
    } else {
      dispatch({
        type: getAppliedJobsConstants.GET_APPLIED_JOB_FAILURE,
        payload: { error: apply.data.error },
      });
    }
  };
};
