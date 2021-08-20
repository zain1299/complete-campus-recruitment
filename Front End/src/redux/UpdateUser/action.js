import axiosInstance from "../../helpers/axios";
import { userUpdateConstants } from "./types";

export const updateAction = (user) => {
  return async (dispatch) => {
    dispatch({ type: userUpdateConstants.USER_UPDATE_REQUEST });
    const res = await axiosInstance.put("/update-user", {
      ...user,
    });
    if (res) {
      const message = res.data;
      dispatch({
        type: userUpdateConstants.USER_UPDATE_SUCCESS,
        payload: message,
      });
    } else {
      dispatch({
        type: userUpdateConstants.USER_UPDATE_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};
