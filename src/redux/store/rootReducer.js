import {combineReducers} from "redux";
import programmingProjectsReducer from "../modules/programmingProjects/programmingProjectsReducer";
import designProjectsReducer from "../modules/designProjects/designProjectsAction";
import smmProjectsReducer from "../modules/smmProjects/smmProjectsReducer";

const reducer = combineReducers({
    programmingProjectsReducer,
    designProjectsReducer,
    smmProjectsReducer
});


export default reducer;

