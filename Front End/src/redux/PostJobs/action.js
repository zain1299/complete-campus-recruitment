import { postJobsConstants } from "./types";
import axiosInstance from "../../helpers/axios";

export const postJObsAction = (jobs) => {
  return async (dispatch) => {
    dispatch({ type: postJobsConstants.POST_JOB_REQUEST });
    const post = await axiosInstance.post(`/jobs`, {
      ...jobs,
    });

    if (post) {
      const postJobs = post.data;
      dispatch({
        type: postJobsConstants.POST_JOB_SUCCESS,
        payload: {
          postJobs,
        },
      });
    } else {
      dispatch({
        type: postJobsConstants.POST_JOB_FAILURE,
        payload: { error: post.data.error },
      });
    }
  };
};
