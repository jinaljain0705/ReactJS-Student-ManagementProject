import { useDispatch } from "react-redux";
import { deleteStudent, updateStudent } from "../redux/thunks";

function StudentDetails({student}){

  const dispatch = useDispatch();

  const handleDelete = ()=>{
    dispatch(deleteStudent(student.id))
  }

  const handleEdit = ()=>{

    const name = prompt("Enter new name", student.name)

    dispatch(updateStudent({...student,name}))

  }

  return(

    <div className="card p-3 mb-2">

      <h5>{student.name}</h5>

      <p>Roll: {student.roll}</p>

      <p>Class: {student.class}</p>

      <button className="btn btn-warning mx-2" onClick={handleEdit}>
        Edit
      </button>

      <button className="btn btn-danger" onClick={handleDelete}>
        Delete
      </button>

    </div>

  )

}

export default StudentDetails;
