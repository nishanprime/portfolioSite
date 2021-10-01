import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { showModalPopupReducer } from "./reducers/showModalPopUpReducer";
import { ProjectDelReducer, ProjectReducer } from "./reducers/ProjectReducer";
import { SkillDelReducer, SkillReducer } from "./reducers/SkillsReducer";
import { userLoginReducer } from "./reducers/UserAuthReducer";
const reducer = combineReducers({
  modalLoginState: showModalPopupReducer,
  projectList: ProjectReducer,
  skillList: SkillReducer,
  userLogin:userLoginReducer,
  projectDelete:ProjectDelReducer,
  skillDelete:SkillDelReducer
});

const projectListFromStorage = localStorage.getItem("projectList")
  ? JSON.parse(localStorage.getItem("projectList"))
  : [];

const skillListFromStorage = localStorage.getItem("skillList")
  ? JSON.parse(localStorage.getItem("skillList"))
  : [];

  const userLoginInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : [];

const initialState = {
  projectList: { projects: projectListFromStorage },
  skillList: { skills: skillListFromStorage },
  userLogin:{userInfo:userLoginInfoFromStorage}
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
