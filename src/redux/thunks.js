import axios from "axios";
import { FETCH_STUDENTS, ADD_STUDENT, DELETE_STUDENT, UPDATE_STUDENT } from "./actions";

const API = "http://localhost:5000/students";

export const fetchStudents = () => async dispatch => {

  const res = await axios.get(API);

  dispatch({
    type: FETCH_STUDENTS,
    payload: res.data
  });

};

export const addStudent = (student) => async dispatch => {

  const res = await axios.post(API, student);

  dispatch({
    type: ADD_STUDENT,
    payload: res.data
  });

};

export const deleteStudent = (id) => async dispatch => {

  await axios.delete(`${API}/${id}`);

  dispatch({
    type: DELETE_STUDENT,
    payload: id
  });

};

export const updateStudent = (student) => async dispatch => {

  const res = await axios.put(`${API}/${student.id}`, student);

  dispatch({
    type: UPDATE_STUDENT,
    payload: res.data
  });

};
