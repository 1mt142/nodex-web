import { toast } from "react-toastify";
import { ADD_TODO, UPDATE_TODO, REMOVE_TODO } from "./toDoActiontypes";

/**
 *
 * @param {object} toDoObject
 * @returns
 */

export const addToDo = (toDoObject) => {
  return {
    type: ADD_TODO,
    payload: toDoObject,
  };
};

export const updateToDo = (toDoObject, index) => {
  return {
    type: ADD_TODO,
    payload: { toDoObject, index },
  };
};

export const removeToDo = (index) => {
  return {
    type: ADD_TODO,
    payload: index,
  };
};
