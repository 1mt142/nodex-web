/**
 * @copyright UCB Fintech Company Ltd
 * @author Md. Hashinur Rahman
 * @email hasinoorit@gmail.com
 * @create date 2021-06-15 13:49:35
 * @modify date 2021-06-15 13:49:37
 * @desc [description]
 */
import { ADD_TODO, UPDATE_TODO, REMOVE_TODO } from "./toDoActiontypes";

const initialState = {
  toDoList: [],
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      state = { ...state, toDoList: [...state.toDoList, action.payload] };
      break;
    case UPDATE_TODO:
      {
        const toDoList = [...state.toDoList];
        toDoList[action.payload.index] = action.payload.toDoObject;
        state = { ...state, toDoList };
      }
      break;
    case REMOVE_TODO:
      {
        const toDoList = [...state.toDoList];
        toDoList.splice(action.payload, 1);
        state = { ...state, toDoList };
      }
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default login;
