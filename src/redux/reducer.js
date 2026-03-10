import { FETCH_STUDENTS, ADD_STUDENT, DELETE_STUDENT, UPDATE_STUDENT } from "./actions";

const initialState = {
  students: []
};

export default function reducer(state = initialState, action) {

  switch(action.type){

    case FETCH_STUDENTS:
      return { ...state, students: action.payload }

    case ADD_STUDENT:
      return { ...state, students: [...state.students, action.payload] }

    case DELETE_STUDENT:
      return {
        ...state,
        students: state.students.filter(s => s.id !== action.payload)
      }

    case UPDATE_STUDENT:
      return {
        ...state,
        students: state.students.map(s =>
          s.id === action.payload.id ? action.payload : s
        )
      }

    default:
      return state
  }

}
