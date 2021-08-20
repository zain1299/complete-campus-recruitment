import { fetchAdminsConstants } from "./types";

const initialState = {
  error: "",
  company: [],
};

const fetchAdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case fetchAdminsConstants.FETCH_ADMINS_REQUEST:
      return state;

    case fetchAdminsConstants.FETCH_ADMINS_SUCCESS:
      return {
        ...state,
        company: action.payload.company,
      };
    case fetchAdminsConstants.FETCH_ADMINS_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default fetchAdminReducer;
