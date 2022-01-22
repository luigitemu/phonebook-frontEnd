import { combineReducers } from "redux";

import { contactReducer } from "./contactReducer";
import { uiReducer } from "./uiReducer";

export const rootReducer = combineReducers({
    contacts : contactReducer,
    ui: uiReducer


});