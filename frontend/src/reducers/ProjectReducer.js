import {
  PROJECT_DELETE_FAIL,
  PROJECT_DELETE_REQ,
  PROJECT_DELETE_SUC,
  PROJECT_FETCH_FAIL,
  PROJECT_FETCH_REQ,
  PROJECT_FETCH_SUC,
} from "../constants/ProjectListContants";

export const ProjectReducer = (state = { projects: [] }, action) => {
  switch (action.type) {
    case PROJECT_FETCH_REQ:
      return { loading: true, projects: [] };
    case PROJECT_FETCH_SUC:
      return { projects: action.payload, loading: false };
    case PROJECT_FETCH_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const ProjectDelReducer = (state = {}, action) => {
  switch (action.type) {
    case PROJECT_DELETE_REQ:
      return { loading: true };
    case PROJECT_DELETE_SUC:
      return { loading: false, success: true };
    case PROJECT_DELETE_FAIL:
      return { loading: false, error:action.payload };
    default:
      return state;
  }
};
