import { useState } from "react";
import { useDispatch } from "react-redux";
import { addStudent } from "../redux/thunks";
import { useNavigate } from "react-router-dom";

function StudentForm(){

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [student,setStudent] = useState({
    name:"",
    roll:"",
    class:""
  })

  const handleChange = (e)=>{

    setStudent({
      ...student,
      [e.target.name]:e.target.value
    })

  }

  const handleSubmit = (e)=>{

    e.preventDefault();

    dispatch(addStudent(student));

    navigate("/students")

  }

  return(

    <div className="container mt-4">

      <h2>Add Student</h2>

      <form onSubmit={handleSubmit}>

        <input
          className="form-control mb-2"
          placeholder="Name"
          name="name"
          onChange={handleChange}
        />

        <input
          className="form-control mb-2"
          placeholder="Roll"
          name="roll"
          onChange={handleChange}
        />

        <input
          className="form-control mb-2"
          placeholder="Class"
          name="class"
          onChange={handleChange}
        />

        <button className="btn btn-success">
          Add Student
        </button>

      </form>

    </div>

  )

}

export default StudentForm;
