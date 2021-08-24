/**
 * @copyright UCB Fintech Company Ltd
 * @author Md. Hashinur Rahman
 * @email hasinoorit@gmail.com
 * @create date 2021-06-15 12:36:16
 * @modify date 2021-06-15 13:16:48
 * @desc rootSaga function handle all saga functions
 */
import { all } from "redux-saga/effects";
import toDoSaga from "./exampleTodo/toDoSaga";

export default function* rootSaga() {
  yield all([]);
  yield all([toDoSaga()]);
}
