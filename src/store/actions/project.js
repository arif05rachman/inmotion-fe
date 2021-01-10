import { GET_PROJECTS, GET_PROJECT, ERROR } from "./action_types";
import { baseUrl } from "../../config";

export const getProjects = (search) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`${baseUrl}getProject`);
      const dataRaw = await res.json();
      const data = dataRaw.filter((val) =>
        val.name.toLowerCase().includes(search.toLowerCase())
      );
      dispatch({
        type: GET_PROJECTS,
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

export const getProject = (id) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: GET_PROJECT,
        payload: {
          id,
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
