import { GET_PROJECTS, GET_PROJECT } from "../actions/action_types";

const defaultState = {
  projects: [],
  project: {},
};

const projectReducer = (state = defaultState, action) => {
  try {
    switch (action.type) {
      case GET_PROJECTS:
        const getProjects = action.payload.data;
        return { ...state, projects: getProjects };
      case GET_PROJECT:
        const id = action.payload.id;
        // eslint-disable-next-line eqeqeq
        const [projectData] = state.projects.filter(val=>val.id==id )
        return { ...state, project: projectData };
      default:
        return state;
    }
  } catch (error) {
    console.log(error);
  }
};

export default projectReducer;
