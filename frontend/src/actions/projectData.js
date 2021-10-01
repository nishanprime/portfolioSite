import axios from "axios";
import {
  PROJECT_DELETE_FAIL,
  PROJECT_DELETE_REQ,
  PROJECT_DELETE_SUC,
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

export const delProject = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PROJECT_DELETE_REQ,
    });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.delete(`/api/projects/delete/${id}`, config);
    dispatch({
      type: PROJECT_DELETE_SUC,
      payload: data,
    });
    dispatch({
      type:PROJECT_FETCH_SUC,
      payload:data
    })
  } catch (error) {
    dispatch({
      type: PROJECT_DELETE_FAIL,
      payload: error.response && error.response.data.message,
    });
  }
};
