/**
 * @copyright UCB Fintech Company Ltd
 * @author Md. Hashinur Rahman
 * @email hasinoorit@gmail.com
 * @create date 2021-06-15 12:34:40
 * @modify date 2021-06-15 13:29:39
 * @desc Import all reducers here and inject inside combineReducers as object property
 */
import { combineReducers } from "redux";
import toDo from "./exampleTodo/toDoReducer";

const rootReducer = combineReducers({ toDo });

export default rootReducer;
