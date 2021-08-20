import axiosInstance from "../../helpers/axios";
import { deleteJobConstants } from "./types";

export const deleteAction = (id) => {
  return async (dispatch) => {
    dispatch({ type: deleteJobConstants.DELETE_JOB_REQUEST });
    const job = await axiosInstance.delete("/delete-job", {
      params: {
        id: id,
      },
    });

    const deletejob = job.data;

    if (job) {
      dispatch({
        type: deleteJobConstants.DELETE_JOB_SUCCESS,
        payload: { deletejob },
      });
    } else {
      dispatch({
        type: deleteJobConstants.DELETE_JOB_FAILURE,
        payload: { error: job.data.error },
      });
    }
  };
};
