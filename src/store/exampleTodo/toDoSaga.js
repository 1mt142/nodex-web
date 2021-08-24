/**
 * @copyright UCB Fintech Company Ltd
 * @author Md. Hashinur Rahman
 * @email hasinoorit@gmail.com
 * @create date 2021-06-15 13:01:20
 * @modify date 2021-06-15 13:33:00
 * @desc [description]
 */

// import {put} from "redux-saga/effects"
import { all, call, fork, takeEvery } from "redux-saga/effects";
import { ADD_TODO } from "./toDoActiontypes";
// import { addToDo } from "./toDoActions";

function dummyHandler(payload) {
  return new new Promise((resolve, reject) => {
    if (payload) {
      resolve(payload);
    } else {
      reject(new Error("Payload is falsy"));
    }
  })();
}

function* addToDOSaga(action) {
  try {
    const response = yield call(dummyHandler, action.payload);
    // yield put(loginSuccess()); to dispatch a redux action with payload or empty
    console.log(response);
  } catch (error) {
    // handle error
    console.error(error);
  }
}

export function* watchToDoActions() {
  yield takeEvery(ADD_TODO, addToDOSaga);
}

function* toDoSaga() {
  yield all([fork(watchToDoActions)]);
}

export default toDoSaga;
