import axiosInstance from "../../helpers/axios";
import { fetchAdminsConstants } from "./types";

export const fetchAdminsAction = () => {
  return async (dispatch) => {
    dispatch({ type: fetchAdminsConstants.FETCH_ADMINS_REQUEST });
    const admin = await axiosInstance.get("/all-admins");

    const company = admin.data;

    if (admin) {
      dispatch({
        type: fetchAdminsConstants.FETCH_ADMINS_SUCCESS,
        payload: { company },
      });
    } else {
      dispatch({
        type: fetchAdminsConstants.FETCH_ADMINS_FAILURE,
        payload: { error: admin.data.error },
      });
    }
  };
};
