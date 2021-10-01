import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { showModalPopupReducer } from "./reducers/showModalPopUpReducer";
import { ProjectReducer } from "./reducers/ProjectReducer";
import { SkillReducer } from "./reducers/SkillsReducer";
const reducer = combineReducers({
  modalLoginState: showModalPopupReducer,
  projectList: ProjectReducer,
  skillList: SkillReducer,
});

const projectListFromStorage = localStorage.getItem("projectList")
  ? JSON.parse(localStorage.getItem("projectList"))
  : [];

const skillListFromStorage = localStorage.getItem("skillList")
  ? JSON.parse(localStorage.getItem("skillList"))
  : [];

const initialState = {
  projectList: { projects: projectListFromStorage },
  skillList: { skills: skillListFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
