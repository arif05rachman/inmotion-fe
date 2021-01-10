import { GET_TODOS, ERROR } from "./action_types";
import { baseUrl } from "../../config";

export const getTodos = (id) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`${baseUrl}getTodo`);
      const datas = await res.json();
      const today = await datas.filter(
        (val) => val.project_id === id && new Date(val.date) < new Date()
      );
      const upcoming = await datas.filter(
        (val) => val.project_id === id && new Date(val.date) > new Date()
      );
      const data = { today, upcoming };
      dispatch({
        type: GET_TODOS,
        payload: {
          data,
        },
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error,
      });
    }
  };
};
