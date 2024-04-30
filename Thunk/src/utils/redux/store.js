import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { reducer } from "./reducer";
import { thunk } from "redux-thunk";
import logger from "redux-logger";

export const fetchStore = createStore(reducer, applyMiddleware(logger, thunk));