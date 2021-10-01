import {
  SKILLS_FETCH_FAIL,
  SKILLS_FETCH_REQ,
  SKILLS_FETCH_SUC,
} from "../constants/SkillsListContants";
import axios from "axios";
export const getSkillsListAction = () => async (dispatch, getState) => {
  try {
    console.log("Trying to get skills")
    dispatch({
      type: SKILLS_FETCH_REQ,
    });
    const { data } = await axios.get("/api/skills");
    console.log(data);
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
