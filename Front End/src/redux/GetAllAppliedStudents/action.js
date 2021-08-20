import axiosInstance from "../../helpers/axios";
import { getAppliedStudentsConstants } from "./types";

export const getAppliedStudentsAction = (jobId) => {
  return async (dispatch) => {
    dispatch({ type: getAppliedStudentsConstants.GET_APPLIED_STUDENT_REQUEST });
    const apply = await axiosInstance.get("/all-applied-students", {
      params: {
        jobId: jobId,
      },
    });

    const appliedStudents = apply.data;

    if (apply) {
      dispatch({
        type: getAppliedStudentsConstants.GET_APPLIED_STUDENT_SUCCESS,
        payload: { appliedStudents },
      });
    } else {
      dispatch({
        type: getAppliedStudentsConstants.GET_APPLIED_STUDENT_FAILURE,
        payload: { error: apply.data.error },
      });
    }
  };
};
