import axiosInstance from "../../helpers/axios";
import { userConstants } from "./signupTypes";

export const signup = (user) => {
  return async (dispatch) => {
    dispatch({ type: userConstants.USER_REGISTER_REQUEST });
    const res = await axiosInstance.post("/signup", {
      ...user,
    });

    if (res.status === 201) {
      const message = res.data;
      dispatch({
        type: userConstants.USER_REGISTER_SUCCESS,
        payload: message,
      });
    } else {
      dispatch({
        type: userConstants.USER_REGISTER_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};
