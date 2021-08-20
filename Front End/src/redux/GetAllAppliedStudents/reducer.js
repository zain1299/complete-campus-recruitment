import { getAppliedStudentsConstants } from "./types";

const initialState = {
  error: "",
  appliedStudents: [],
};

const AppliedStudentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case getAppliedStudentsConstants.GET_APPLIED_STUDENT_REQUEST:
      return state;
    case getAppliedStudentsConstants.GET_APPLIED_STUDENT_SUCCESS:
      return {
        ...state,
        appliedStudents: action.payload.appliedStudents,
      };
    case getAppliedStudentsConstants.GET_APPLIED_STUDENT_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default AppliedStudentsReducer;
