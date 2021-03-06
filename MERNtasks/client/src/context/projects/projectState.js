import React, { useReducer } from "react";
import uuid from "uuid/dist/v4";
import projectContext from "./projectContext";
import projectReducer from "./projectReducer";
import {
  PROJECT_FORM,
  SET_ERROR_PROJECT_FORM,
  ACTUAL_PROJECT,
  GET_PROJECTS,
  ADD_PROJECT,
  DELETE_PROJECT,
} from "../../types";

const ProjectState = ({ children }) => {
  const projects = [
    { id: 1, name: "Project1" },
    { id: 2, name: "Project2" },
    { id: 3, name: "Project3" },
  ];

  const initialState = {
    project: null,
    projects: [],
    form: false,
    form_error: false,
  };

  const [state, dispatch] = useReducer(projectReducer, initialState);

  const showForm = () => {
    dispatch({ type: PROJECT_FORM });
  };

  const showFormError = () => {
    dispatch({ type: SET_ERROR_PROJECT_FORM });
  };

  const setActualProject = (project_id) => {
    dispatch({
      type: ACTUAL_PROJECT,
      payload: project_id,
    });
  };

  const getProjects = () => {
    dispatch({
      type: GET_PROJECTS,
      payload: projects,
    });
  };

  const addProject = (project) => {
    project.id = uuid();
    dispatch({
      type: ADD_PROJECT,
      payload: project,
    });
  };

  const deleteProject = (project_id) => {
    dispatch({
      type: DELETE_PROJECT,
      payload: project_id,
    });
  };

  return (
    <projectContext.Provider
      value={{
        project: state.project,
        projects: state.projects,
        form: state.form,
        form_error: state.form_error,
        showForm,
        showFormError,
        setActualProject,
        getProjects,
        addProject,
        deleteProject,
      }}
    >
      {children}
    </projectContext.Provider>
  );
};

export default ProjectState;
