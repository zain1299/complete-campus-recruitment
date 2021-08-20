import { userUpdateConstants } from "./types";

const initialState = {
  error: null,
  message: "",
  loading: false,
};

const updateReducer = (state = initialState, action) => {
  switch (action.type) {
    case userUpdateConstants.USER_UPDATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case userUpdateConstants.USER_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    case userUpdateConstants.USER_UPDATE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default updateReducer;
