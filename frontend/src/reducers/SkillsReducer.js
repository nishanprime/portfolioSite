import {
  SKILLS_DELETE_FAIL,
  SKILLS_DELETE_REQ,
  SKILLS_DELETE_SUC,
  SKILLS_FETCH_FAIL,
  SKILLS_FETCH_REQ,
  SKILLS_FETCH_SUC,
} from "../constants/SkillsListContants";

export const SkillReducer = (state = { skills: [] }, action) => {
  switch (action.type) {
    case SKILLS_FETCH_REQ:
      return { loading: true, skills: [] };
    case SKILLS_FETCH_SUC:
      return { skills: action.payload, loading: false };
    case SKILLS_FETCH_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const SkillDelReducer = (state = {}, action) => {
  switch (action.type) {
    case SKILLS_DELETE_REQ:
      return { loading: true };
    case SKILLS_DELETE_SUC:
      return { loading: false, success: true };
    case SKILLS_DELETE_FAIL:
      return { loading: false, error:action.payload};
    default:
      return state;
  }
};
