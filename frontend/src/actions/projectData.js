import axios from "axios";
import {
  PROJECT_FETCH_FAIL,
  PROJECT_FETCH_REQ,
  PROJECT_FETCH_SUC,
} from "../constants/ProjectListContants";

export const getProjectListAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: PROJECT_FETCH_REQ,
    });
    const { data } = await axios.get("/api/projects");
    dispatch({
      type: PROJECT_FETCH_SUC,
      payload: data,
    });
    localStorage.setItem(
      "projectList",
      JSON.stringify(getState().projectList.projects)
    );
  } catch (error) {
    dispatch({
      type: PROJECT_FETCH_FAIL,
      payload: error.response && error.response.data.message,
    });
  }
};
