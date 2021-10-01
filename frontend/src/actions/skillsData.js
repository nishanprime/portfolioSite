import {
  SKILLS_DELETE_FAIL,
  SKILLS_DELETE_REQ,
  SKILLS_DELETE_SUC,
  SKILLS_FETCH_FAIL,
  SKILLS_FETCH_REQ,
  SKILLS_FETCH_SUC,
} from "../constants/SkillsListContants";
import axios from "axios";
export const getSkillsListAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: SKILLS_FETCH_REQ,
    });
    const { data } = await axios.get("/api/skills");

    dispatch({
      type: SKILLS_FETCH_SUC,
      payload: data,
    });
    localStorage.setItem(
      "skillList",
      JSON.stringify(getState().skillList.skills)
    );
  } catch (error) {
    dispatch({
      type: SKILLS_FETCH_FAIL,
      payload: error.response && error.response.data.message,
    });
  }
};

export const delSkill = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SKILLS_DELETE_REQ,
    });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.delete(`/api/skills/delete/${id}`, config);
    dispatch({
      type: SKILLS_DELETE_SUC,
      payload: data,
    });
    dispatch({
      type:SKILLS_FETCH_SUC,
      payload:data
    })
  } catch (error) {
    dispatch({
      type: SKILLS_DELETE_FAIL,
      payload: error.response && error.response.data.message,
    });
  }
};
