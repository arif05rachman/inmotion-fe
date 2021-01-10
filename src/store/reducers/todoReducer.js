import { GET_TODOS } from "../actions/action_types";

const defaultState = {
  todos: [],
};

const projectReducer = (state = defaultState, action) => {
  try {
    switch (action.type) {
      case GET_TODOS:
        const getTodos = action.payload.data;
        return { ...state, todos: getTodos };
      default:
        return state;
    }
  } catch (error) {
    console.log(error);
  }
};

export default projectReducer;
